<template>
  <div class="article-block">
    <div class="article-block__container">
      <div class="article-block__content">
        <h2 class="h1 article-block__title">
          {{contentTitle}}
        </h2>
        <span class="article-block__date">{{contentDate}}</span>
        <span class="article-block__text-content" v-html="contentText">
        </span>
      </div>
      <div class="article-block__image" v-lazy:background-image="contentImage"></div>
    </div>
    <div class="article-block__bottom-spacer"></div>
  </div>
</template>

<script>
import {ContentTasks} from '@/common/api'
import tools from '@/common/tools'

export default {
  data() {
    return {
      data: [],
      imageUrl: require('@/assets/images/code.jpg'),
    }
  },
  computed: {
    contentType() {
      if (!this.data.sys) { return null; }
      return this.data.sys.contentType.sys.id;
    },
    contentTitle() {
      if (!this.data.fields) { return null; }
      return tools.truncateString(this.data.fields.title, 70);
    },
    contentDate() {
      if (!this.data.sys) { return null; }
      return tools.processDate(this.data.sys.createdAt);
    },
    contentImage() {
      if (!this.data.fields) { return null; }
      return this.data.fields.image.fields.file.url;
    },
    contentText() {
      if (!this.data.fields) { return null; }
      const limitedText = tools.processRichText(this.data.fields.body, 500);
      // if (limitedText.charAt(limitedText.length) ===)
      return `${limitedText}...`;
    }
  },
  created() {
    ContentTasks.getArticles(2)
      .then((post) => {
        this.data = post.items[1];
      })
      .catch((error) => {
        console.log(error);
      })
  },
}
</script>

<style lang="scss">
.article-block {
  background-color: $color-background;
  color: $color-white;

  &__container {
    display: flex;
    flex-flow: column-reverse;
    margin: 0 auto;
    padding: calc(#{$layout-margin} / 2) 0 $spacing-md;
    width: 100%;
  }

  &__image {
    background-size: cover;
    background-position: center;
    height: 360px;
    width: 100%;

    img {
      width: 100%;
    }
  }

  &__content {
    padding: 0 $layout-sm 0 0;
  }

  &__title.h1 {
    margin-top: $spacing-xl;
  }

  &__date {
    border-bottom: 1px solid $color-white;
    color: $color-white;
    display: block;
    font-family: $font-medium;
    font-size: $font-size-2xs;
    padding-bottom: $spacing-2xs;
    width: 100%;
  }

  &__text-content{
    font-size: $font-size-sm;
    line-height: $line-height-md;
  }

  &__bottom-spacer {
    background-color: #ffffff;
    border-bottom: 1px dotted #000000;
    height: 4px;
    margin-bottom: 4px;
    width: 100%;
  }

  @media screen and (min-width: $width-md) {
    &__container {
      flex-flow: row;
      padding: $layout-md 0;
      width: $width-lg;
    }

    &__image {
      padding-top: $spacing-lg;
      width: 50%;

      img {
        width: 100%;
      }
    }

    &__content {
      width: 50%;
    }

    &__title.h1 {
      margin-top: 0;
    }
  }
}
</style>
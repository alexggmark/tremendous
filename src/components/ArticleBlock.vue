<template>
  <div class="article-block">
    <div class="article-block__container">
      <div class="article-block__content">
        <template v-if="loadedState">
          <h2 class="h1 article-block__title">
            {{contentTitle}}
          </h2>
          <span class="article-block__date">{{contentDate}}</span>
          <span class="article-block__text-content" v-html="contentTextTruncated">
          </span>
        </template>
        <template v-else>
          <div v-for="i in 4"  class="skeleton--title" :key="'block-title' + i"></div>
          <div class="skeleton--spacer-md"></div>
          <div class="skeleton--subtitle-sm"></div>
          <div v-for="i in 8" class="skeleton--text" :key="'block-text' + i"></div>
        </template>
      </div>
      <div class="article-block__image">
        <template v-if="loadedState">
          <div class="image" v-lazy:background-image="contentImage"></div>
        </template>
        <template v-else>
          <div class="skeleton--image"></div>
        </template>
      </div>
    </div>
    <div class="article-block__bottom-spacer"></div>
  </div>
</template>

<script>
import {ContentTasks, loadingTime} from '@/common/api'
import {articleDataBuilder} from '@/common/tools'

export default {
  data() {
    return {
      data: [],
      loadedState: false,
    }
  },
  computed: articleDataBuilder,
  created() {
    ContentTasks.getArticles(2)
      .then((post) => {
        this.data = post.items[1];
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setTimeout(() => {
          this.loadedState = true;
        }, loadingTime)
      })
  },
}
</script>

<style lang="scss">
.article-block {
  background-color: $color-secondary;
  color: $color-black;

  &__container {
    display: flex;
    flex-flow: column-reverse;
    margin: 0 auto;
    padding: calc(#{$layout-margin} / 2) 0 $spacing-md;
    width: 100%;
  }

  &__image {
    width: 100%;

    .image {
      background-position: center;
      background-size: cover;
      height: 550px;
    }

    .skeleton--image {
      height: 550px;
    }
  }

  &__content {
    padding: 0 $layout-sm 0 0;
  }

  &__title.h1 {
    margin-top: $spacing-xl;
  }

  &__date {
    border-bottom: 1px solid $color-black;
    color: $color-black;
    display: block;
    font-family: $font-medium;
    font-size: $font-size-2xs;
    padding-bottom: $spacing-2xs;
    width: 100%;
  }

  &__text-content{
    font-size: $font-size-sm;
    line-height: $line-height-sm;
  }

  &__bottom-spacer {
    background-color: #ffffff;
    margin-bottom: $spacing-md;
    width: 100%;
  }

  @media screen and (min-width: $width-lg) {
    &__container {
      flex-flow: row;
      padding: $layout-md 0;
      width: $width-lg;
    }

    &__image {
      width: 50%;

      .image {
        height: 350px;
      }

      .skeleton--image {
        height: 350px;
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
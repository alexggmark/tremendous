<template>
  <div class="main-article">
    <div class="main-article__container">
      <div class="main-article__main">
        <div class="main-article__image" v-lazy:background-image="contentImage"></div>
        <div class="main-article__content">
          <h2 class="h1 main-article__title">
            {{contentTitle}}
          </h2>
          <span class="main-article__date">{{contentDate}}</span>
          <span class="main-article__text-content" v-html="contentText"></span>
        </div>
      </div>
      <div class="main-article__side">
       <!--<article-block-vertical/>-->
      </div>
    </div>
  </div>
</template>

<script>
// import ArticleBlockVertical from '@/components/ArticleBlockVertical'
import {ContentTasks} from '@/common/api'
import {articleDataBuilder} from '@/common/tools'

export default {
  props: {
    entryId: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      data: [],
    }
  },
  components: {
    // ArticleBlockVertical,
  },
  computed: articleDataBuilder,
  created() {
    ContentTasks.getArticleById(this.entryId)
      .then((post) => {
        this.data = post;
        console.log(post);
      })
      .catch((error) => {
        console.log(error);
      })
  },
}
</script>

<style lang="scss">
.main-article {
  color: $color-black;
  padding-bottom: $spacing-xl;

  &__container {
    display: flex;
    margin: 0 auto;
    width: 100%;
  }

  &__main {
    width: 100%;
  }

  &__side {
    display: none;
  }

  &__image {
    background-size: cover;
    background-position: center;
    height: 420px;
  }

  &__title {
    margin: $spacing-xl 0 $spacing-lg;
  }

  &__date {
    border-bottom: 1px solid $color-black;
    display: block;
    font-family: $font-medium;
    font-size: $font-size-2xs;
    padding-bottom: $spacing-2xs;
    width: 100%;
  }

  &__text-content{
    font-size: $font-size-md;
    line-height: $line-height-md;
  }

  @media screen and (min-width: $width-lg) {
    &__container {
      flex-flow: row;
      width: $width-lg;
    }

    &__main {
      width: 75%;
    }

    &__side {
      display: block;
      width: 25%;
    }

    &__image {
      height: 320px;
    }
  }
}
</style>
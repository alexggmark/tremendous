<template>
  <div class="main-article">
    <div class="main-article__container">
      <div class="main-article__main">
        <template v-if="loadedState">
          <div class="main-article__image image" v-lazy:background-image="contentImage"></div>
        </template>
        <template v-else>
          <div class="skeleton--image"></div>
        </template>
        <div class="main-article__content">
          <template v-if="loadedState">
            <h2 class="h1 main-article__title">
              {{data.fields.title}}
            </h2>
          </template>
          <template v-else>
            <div class="skeleton--spacer-md"></div>
            <div v-for="i in 3" class="skeleton--title" :key="i"></div>
          </template>
          <span class="main-article__date">
            <template v-if="loadedState">
              {{contentDate}}
            </template>
            <template v-else>
              <div class="skeleton--spacer-md"></div>
              <div class="skeleton--subtitle-sm"></div>
            </template>
          </span>
          <template v-if="loadedState">
            <span class="main-article__text-content" v-html="contentText"></span>
          </template>
          <template v-else>
            <div v-for="i in 20" class="skeleton--text" :key="'skeleton-text' + i"></div>
          </template>
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
import {ContentTasks, loadingTime} from '@/common/api'
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
      loadedState: false,
    }
  },
  computed: articleDataBuilder,
  created() {
    ContentTasks.getArticleById(this.entryId)
      .then((post) => {
        this.data = post;
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setTimeout(() => {
          this.loadedState = true;
        }, loadingTime)
      })
  }
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

  .skeleton--image {
    height: 420px;
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

    .skeleton--image {
      height: 320px;
    }
  }
}
</style>
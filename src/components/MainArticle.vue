<template>
  <div class="main-article">
    <div class="main-article__container">
      <div class="main-article__main">
        <template v-if="loadedState">
          <div class="main-article__image image" v-lazy:background-image="contentImage"></div>
          <article-tags :tag-data="contentCategory"/>
        </template>
        <template v-else>
          <div class="skeleton--image"></div>
        </template>
        <div class="main-article__content">
          <template v-if="loadedState">
            <h2 class="main-article__title">
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
            <div v-for="i in 20" class="skeleton--text-main" :key="'skeleton-text' + i"></div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ContentTasks, loadingTime} from '@/common/api'
import {articleDataBuilder} from '@/common/tools'
import ArticleTags from '@/components/ArticleTags'

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
  components: {
    ArticleTags,
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
    flex-flow: column;
    margin: 0 auto;
    width: 100%;
  }

  &__main {
    padding: 0;
    width: 100%;

    .article-tag {
      padding: 0 1rem;
      margin-bottom: 0.75rem;
      text-align: left;
    }
  }

  &__content {
    padding: 0 1rem;
  }

  &__image {
    background-size: cover;
    background-position: center;
    height: 420px;
  }

  &__title {
    color: $color-primary;
    font-size: 29px;
    line-height: 36px;
    margin: $spacing-xs 0 $spacing-md;
  }

  &__date {
    border-bottom: 1px solid $color-black;
    display: block;
    font-family: $font-medium;
    font-size: $font-size-2xs;
    font-weight: 500;
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

  @media screen and (min-width: $width-sm) {
    &__main {
      padding: 0 1rem;
      width: calc(100% - 2rem);

      .article-tag {
        padding: 0;
      }
    }

    &__content {
      padding: 0;
    }
  }

  @media screen and (min-width: $width-lg) {
    &__main {
      padding: 0 16rem 0 0;
    }

    &__container {
      flex-flow: row-reverse;
      width: $width-lg;
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
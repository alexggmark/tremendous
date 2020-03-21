<template>
  <div class="home-article">
    <div class="home-article__container">
      <!-- <button @click="loadedState = !loadedState">Click</button> -->
      <div class="home-article__image">
        <template v-if="loadedState">
          <div class="image" v-lazy:background-image="contentImage"></div>
        </template>
        <template v-else>
          <div class="skeleton--image"></div>
        </template>
      </div>
      <div class="home-article__content">
        <div class="home-article__content--inner">
          <template v-if="loadedState">
            <span class="h5">{{contentType}}</span>
          </template>
          <template v-else>
            <div class="skeleton--subtitle-sm"></div>
          </template>
          <template v-if="loadedState">
            <h1 class="home-article__title">
              <router-link :to="{name: 'Article', params: {handle: contentEntryId}}">
                {{contentTitleTruncated}}
              </router-link>
            </h1>
          </template>
          <template v-else>
            <div class="skeleton--spacer-md"></div>
            <div v-for="i in 4" class="skeleton--title" :key="i"></div>
          </template>
          <template v-if="loadedState">
            <span class="home-article__date">{{contentDate}}</span>
          </template>
          <template v-else>
            <div class="skeleton--spacer-lg"></div>
            <div class="skeleton--subtitle-sm"></div>
          </template>
          <div class="home-article__more-articles">
            <more-articles :data-list="propData" :loaded-state="loadedState2" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MoreArticles from '@/components/MoreArticles'
import {ContentTasks, loadingTime} from '@/common/api'
import {articleDataBuilder} from '@/common/tools'

export default {
  data() {
    return {
      data: [],
      propData: [],
      loadedState: false,
      loadedState2: false,
    }
  },
  components: {
    MoreArticles,
  },
  computed: articleDataBuilder,
  created() {
    ContentTasks.getHomepageArticle()
      .then((post) => {
        this.data = post.items[0];
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setTimeout(() => {
          this.loadedState = true;
        }, loadingTime)
      })

    ContentTasks.getArticles(3)
      .then((post) => {
        this.propData = post.items;
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setTimeout(() => {
          this.loadedState2 = true;
        }, loadingTime)
      })
  }
}
</script>

<style lang="scss">
.home-article {
  padding-bottom: 2rem;

  &__container {
    display: flex;
    flex-flow: column;
    margin: 0 auto;
    width: 100%;
  }

  &__image {
    width: 100%;

    .image {
      background-position: center;
      background-size: cover;
      height: 350px;
    }

    .skeleton--image {
      height: 350px;
    }
  }

  &__title {
    font-size: 29px;
    line-height: 36px;
    margin: $spacing-xs 0 $spacing-md;
  }

  &__content {
    padding: $spacing-xs 1rem 0;

    &--inner {
      a {
        color: $color-primary;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  &__date {
    background-color: $color-secondary;
    border-radius: 20px;
    color: $color-white;
    font-family: $font-medium;
    font-size: $font-size-2xs;
    padding: 0.1rem 0.4rem;
  }

  &__more-articles {
    ul {
      list-style-type: none;
      padding-left: 0;

      li {
        font-size: $font-size-sm;
        padding: $spacing-2xs 0;

        &:not(:last-child) {
          border-bottom: 1px dotted $color-black;
        }

        a {
          color: $color-black;
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }

  @media screen and (min-width: $width-lg) {
    &__container {
      flex-flow: row;
      position: relative;
      width: $width-lg;
      z-index: 0;
    }

    &__image {
      width: 50%;

      .image {
        height: auto;
        padding-top: 100%;
      }

      .skeleton--image {
        height: auto;
        padding-top: 100%;
      }
    }

    &__title {
      font-size: 53px;
      line-height: 61px;
      margin: 0.3em 0 0.67em;
    }

    &__content {
      padding: $spacing-xs 0 0;
      width: 50%;

      &--inner {
        padding-left: $spacing-xl;
      }
    }
  }
}
</style>
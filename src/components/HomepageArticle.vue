<template>
  <div class="home-article">
    <div class="home-article__container">
      <div class="home-article__image">
        <img v-lazy="contentImage">
      </div>
      <div class="home-article__content">
        <div class="home-article__content--inner">
          <span class="h5">{{contentType}}</span>
          <h1 class="h1">
            <router-link :to="{name: 'Article', params: {handle: contentEntryId}}">
              {{contentTitleTruncated}}
            </router-link>
          </h1>
          <span class="home-article__date">{{contentDate}}</span>
          <div class="home-article__more-articles">
            <more-articles :data-list="propData"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MoreArticles from '@/components/MoreArticles'
import {ContentTasks} from '@/common/api'
import {articleDataBuilder} from '@/common/tools'

export default {
  data() {
    return {
      data: [],
      propData: [],
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
        console.log(post);
      })
      .catch((error) => {
        console.log(error);
      })
    ContentTasks.getArticles(3)
      .then((post) => {
        this.propData = post.items;
      })
      .catch((error) => {
        console.log(error);
      })
  },
}
</script>

<style lang="scss">
.home-article {
  &__container {
    display: flex;
    flex-flow: column;
    margin: 0 auto;
    padding-bottom: $spacing-sm;
    width: 100%;
  }

  &__image {
    width: 100%;

    img {
      width: 100%;
    }
  }

  &__content {
    &--inner {
      a {
        color: $color-black;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  &__date {
    background-color: $color-blue;
    color: $color-white;
    font-family: $font-medium;
    font-size: $font-size-2xs;
    padding: 0.1rem 0.2rem;
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

  @media screen and (min-width: $width-md) {
    &__container {
      flex-flow: row;
      width: $width-lg;
    }

    &__image {
      width: 50%;

      img {
        width: 100%;
      }
    }

    &__content {
      padding-top: $spacing-xs;
      width: 50%;

      &--inner {
        padding-left: $spacing-xl;
      }
    }
  }
}
</style>
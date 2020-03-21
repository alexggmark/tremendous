<template>
  <div class="article-grid">
    <div class="article-grid__container">
      <template v-if="loadedState">
        <div class="article-grid__item" v-for="(article, index) in data" :key="index">
          <router-link :to="{name: 'Article', params: {handle: article.entryId}}">
            <div class="article-grid__item--inner shadow">
              <h2 class="h2">
                {{ article.title }}
              </h2>
              <span class="article-grid__date">
                {{ article.date }}
              </span>
              <article-tags :tag-data="article.contentCategory"/>
            </div>
          </router-link>
        </div>
      </template>
      <template v-else>
        <div class="skeleton--block" v-for="i in 4" :key="'skeleton-block' + i"></div>
      </template>
    </div>
  </div>
</template>

<script>
import {ContentTasks, loadingTime} from '@/common/api'
import tools from '@/common/tools'
import ArticleTags from '@/components/ArticleTags'

export default {
  data() {
    return {
      data: [],
      loadedState: false,
    }
  },
  components: {
    ArticleTags,
  },
  methods: {
    set(items) {
      const output = items.map((item) => {
        return {
          title: tools.truncateString(item.fields.title, 60),
          date: tools.processDate(item.sys.createdAt),
          entryId: item.sys.id,
          contentCategory: item.fields.category,
        };
      });
      this.data = output;
    }
  },
  created() {
    ContentTasks.getArticles(7)
      .then((post) => {
        this.set(post.items);
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
.article-grid {
  background-color: $color-grey-light;
  color: $color-black;
  margin-bottom: 0;
  overflow: auto;

  &__container {
    display: flex;
    flex-wrap: wrap;
    margin: 2rem auto 1.2rem;
    padding-top: 0;
    width: 100%;
  }

  &__item {
    margin-bottom: 1.8rem;
    width: 100%;

    a {
      text-decoration: none;
    }

    &--inner {
      background-color: $color-white;
      border-radius: 5px;
      box-sizing: content-box;
      cursor: pointer;
      display: flex;
      flex-flow: column;
      height: 100%;
      justify-content: space-between;
      margin: 0 $spacing-xs;
      padding-bottom: $spacing-sm;
      padding-left: $spacing-xs;
      padding-right: $spacing-sm;
      position: relative;
      transition: transform 0.2s ease, box-shadow 0.2s ease;

      .article-tag {
        position: absolute;
        bottom: 6px;
        max-width: 250px;
        right: 2px;
        text-align: right;
      }

      &:hover {
        box-shadow: 0px 11px 10px rgba(0,0,0,0.08);
        transform: translate(0, -4px);

        h2 {
          text-decoration: underline;
        }
      }

      a & {
        color: $color-black;
      }
    }
  }

  &__date {
    color: $color-black;
    font-size: $font-size-xs;
  }

  @media screen and (min-width: $width-sm) {
    margin-bottom: 1rem;
  }

  @media screen and (min-width: $width-lg) {
    margin-bottom: 2rem;
    overflow: hidden;

    &__container {
      margin: $layout-sm auto;
      padding-top: $spacing-sm;
      padding-right: 50px;
      width: calc(#{$width-lg} - 50px);
    }

    &__item {
      width: 50%;

      &--inner {
        margin: 0 $spacing-xs 0 0;
      }
    }
  }
}
</style>
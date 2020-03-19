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

export default {
  data() {
    return {
      data: [],
      loadedState: false,
    }
  },
  methods: {
    set(items) {
      const output = items.map((item) => {
        return {
          title: tools.truncateString(item.fields.title, 60),
          date: tools.processDate(item.sys.createdAt),
          entryId: item.sys.id,
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
  overflow: auto;

  &__container {
    display: flex;
    flex-wrap: wrap;
    margin: $layout-sm auto;
    padding-top: $spacing-sm;
    width: 100%;
  }

  &__item {
    margin-bottom: $spacing-lg;
    width: 100%;

    a {
      text-decoration: none;
    }

    &--inner {
      background-color: $color-white;
      box-sizing: content-box;
      cursor: pointer;
      display: flex;
      flex-flow: column;
      height: 100%;
      justify-content: space-between;
      margin: 0 $spacing-xs 0 0;
      padding-bottom: $spacing-sm;
      padding-left: $spacing-xs;
      padding-right: $spacing-sm;
      transition: transform 0.2s ease, box-shadow 0.2s ease;

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

  @media screen and (min-width: $width-lg) {
    &__container {
      width: $width-lg;
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
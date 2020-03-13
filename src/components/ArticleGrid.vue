<template>
  <div class="article-grid">
    <div class="article-grid__container">
      <template v-if="loadedState">
        <div class="article-grid__item" v-for="(article, index) in data" :key="index">
          <div class="article-grid__item--inner">
            <h2 class="h2">
              <router-link :to="{name: 'Article', params: {handle: article.entryId}}">
                {{ article.title }}
              </router-link>
            </h2>
            <span class="article-grid__date">
              {{ article.date }}
            </span>
          </div>
        </div>
      </template>
      <template v-else>
        <div class="skeleton--block" v-for="i in 4" :key="'skeleton-block' + i"></div>
      </template>
    </div>
  </div>
</template>

<script>
import {ContentTasks} from '@/common/api'
import tools from '@/common/tools'

export default {
  data() {
    return {
      data: [],
      loadedState: true,
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
        console.log(post);
      })
      .catch((error) => {
        console.log(error);
      })
  },
  updated() {
    this.$nextTick(() => {
      this.loadedState = true;
    })
  }
}
</script>

<style lang="scss">
.article-grid {
  background-color: $color-yellow;
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
    width: 50%;

    &--inner {
      border: 2px solid $color-black;
      box-shadow: 0px 0px 0px 0px rgba(255,255,255,1);
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
        box-shadow: 4px 4px 0px 0px rgba(255,255,255,1);
        transform: translate(-4px, -4px);

        a {
          text-decoration: underline;
        }
      }

      a {
        color: $color-black;
        text-decoration: none;
      }
    }
  }

  &__date {
    color: $color-black;
    font-size: $font-size-xs;
  }

  @media screen and (min-width: $width-md) {
    &__container {
      padding-right: $layout-lg;
      width: calc(#{$width-lg} - #{$layout-lg});
    }

    &__item {
      width: 25%;

      &--inner {
        margin: 0 $spacing-xs 0 0;
      }
    }
  }
}
</style>
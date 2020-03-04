<template>
  <div class="article-grid">
    <div class="article-grid__container">
      <div class="article-grid__item" v-for="(article, index) in data" :key="index">
        <div class="article-grid__item--inner shadow">
          <h2 class="h2">
            <a href="#">
              {{ article.title }}
            </a>
          </h2>
          <span class="article-grid__date">
            {{ article.date }}
          </span>
        </div>
      </div>
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
    }
  },
  methods: {
    set(items) {
      const output = items.map((item) => {
        return {
          title: tools.truncateString(item.fields.title, 60),
          date: tools.processDate(item.sys.createdAt),
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
}
</script>

<style lang="scss">
.article-grid {
  background-color: #fbfbfb;
  border-top: 1px solid $color-grey-light;

  &__container {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto $layout-sm;
    padding-top: $spacing-sm;
    width: 100%;
  }

  &__item {
    margin-bottom: $spacing-lg;
    width: 50%;

    &--inner {
      background-color: $color-white;
      cursor: pointer;
      display: flex;
      flex-flow: column;
      height: 100%;
      justify-content: space-between;
      margin: 0 $spacing-xs 0 0;
      padding-bottom: $spacing-sm;
      padding-left: $spacing-xs;
      padding-right: $spacing-sm;

      &:hover {
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
    color: $color-grey;
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
<template>
  <div class="article-vertical">
    <div class="article-vertical__item" v-for="(article, index) in articleGrid" :key="index">
      <div class="article-vertical__item--inner">
        <h2 class="h2">
          <a href="#">
            {{ article.title }}
          </a>
        </h2>
        <span class="article-vertical__date">
          {{ article.date }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articleGrid: [
        {
          title: 'Cases Spread in Western U.S., Jump in Iran, Korea: Virus',
          date: '22nd February 2020',
        },
        {
          title: 'Five Charts Tell Horror Story of European Market’s Mayhem',
          date: '22nd February 2020',
        },
        {
          title: 'China Posts Weakest Factory Activity on Record',
          date: '22nd February 2020',
        },
      ]
    }
  }
}
</script>

<style lang="scss">
.article-vertical {
  padding: 0 0 0 $spacing-lg;

  &__item {
    margin-bottom: $spacing-md;
    width: 100%;

    &--inner {
      border-bottom: 1px dotted $color-black;
      cursor: pointer;
      display: flex;
      flex-flow: column;
      height: 100%;
      justify-content: space-between;
      margin: 0 $spacing-xs 0 0;
      padding-bottom: $spacing-sm;
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
}
</style>
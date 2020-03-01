<template>
  <div class="article-grid">
    <div class="article-grid__container">
      <div class="article-grid__item" v-for="(article, index) in articleGrid" :key="index">
        <div class="article-grid__item--inner">
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
        {
          title: 'Cases Spread in Western U.S., Jump in Iran, Korea: Virus',
          date: '22nd February 2020',
        },
        {
          title: 'China Posts Weakest Factory Activity on Record',
          date: '22nd February 2020',
        },
        {
          title: 'Five Charts Tell Horror Story of European Market’s',
          date: '22nd February 2020',
        },
        {
          title: 'Cases Spread in Western U.S., Jump in Iran, Korea: Virus',
          date: '22nd February 2020',
        },
      ]
    }
  }
}
</script>

<style lang="scss">
.article-grid {
  &__container {
    border-top: 1px solid $color-black;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto $layout-sm;
    width: 100%;
  }

  &__item {
    margin-bottom: $spacing-sm;
    width: 50%;

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

  @media screen and (min-width: $width-md) {
    &__container {
      padding-right: $layout-lg;
      width: calc(#{$width-lg} - #{$layout-lg});
    }

    &__item {
      width: 25%;
    }
  }
}
</style>
<template>
  <div>
    <div class="article-navigation">
      <div class="article-navigation__container">
        <span class="article-navigation__menu-title">Menu:</span> <navigation-component/>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'

export default {
  components: {
    navigationComponent: Navigation,
  }
}
</script>

<style lang="scss">
.article-navigation {
  display: block;
  margin-bottom: $spacing-xs;
  width: 100%;

  &__container {
    border-bottom: 2px solid #000000;
    border-top: 2px solid #000000;
    margin: 1rem auto 0;
    width: 100%;
  }

  &__menu-title {
    display: inline;
    font-family: $font-bold;
  }

  ul {
    display: inline-block;
    list-style-type: none;
    margin-block-start: 0.65rem;
    margin-block-end: 0.65rem;
    padding-left: 0.5rem;

    li {
      display: inline;
      font-size: 14px;
      margin-right: 1rem;

      a {
        color: #000000;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  @media screen and (min-width: $width-md) {
    &__container {
      position: relative;
      width: $width-lg;

      // @include container-shadow;
    }
  }
}
</style>
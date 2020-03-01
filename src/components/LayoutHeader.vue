<template>
  <header>
    <div class="header">
      <div class="header__container">
        <navigation class="header__navigation">
          <navigation-component/>
        </navigation>
        <div class="header__logo">
          <logo-animation/>
          tremendous
        </div>
      </div>
    </div>
    <div class="header__bottom-spacer"></div>
  </header>
</template>

<script>
import NavigationComponent from '@/components/Navigation'
import LogoAnimation from '@/components/animations/Logo'

export default {
  components: {
    NavigationComponent,
    LogoAnimation,
  }
}
</script>

<style lang="scss">
  .header {
    background-color: #000000;
    color: #ffffff;
    width: 100%;

    &__container {
      display: flex;
      align-items: center;
      flex-flow: column;
      justify-content: space-between;
      margin: 0 auto;
      min-height: 160px;
      position: relative;
      width: 100%;
    }

    &__logo {
      display: flex;
      font-family: 'Lobster', sans-serif;
      font-size: 45px;
    }

    &__bottom-spacer {
      background-color: #ffffff;
      border-bottom: 1px dotted #000000;
      height: 4px;
      width: 100%;
    }

    &__navigation {
      ul {
        list-style-type: none;
        padding-left: 0;

        li {
          font-size: 14px;
          float: left;
          margin-right: $spacing-sm;

          a {
            color: #ffffff;
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
        min-height: 120px;
        width: $width-lg;
      }

      &__navigation {
        left: 0;
        position: absolute;
      }

      &__logo {
        bottom: 0;
        position: absolute;
        right: 0;
      }
    }
  }
</style>
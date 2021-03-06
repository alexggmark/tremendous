<template>
  <header>
    <div class="header" ref="header">
      <div class="header__mobile-menu" ref="mobilemenu" @click="toggleMobileMenu">
        <div class="header__mobile-menu--close">
          <mobile-close />
        </div>
        <navigation-component :navigation-links="navigation" />
      </div>
      <div class="header__container shadow">
        <div class="header__container--inner">
          <div class="header__navigation">
            <navigation-component :navigation-links="navigation" />
          </div>
          <div class="header__mobile" @click="toggleMobileMenu">
            <mobile-menu />
          </div>
          <logo-animation :animation="readyState" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import NavigationComponent from '@/components/Navigation'
import LogoAnimation from '@/components/animations/Logo'
import MobileMenu from '@/components/animations/MobileMenu'
import MobileClose from '@/components/animations/MobileClose'
import debounce from 'lodash/debounce';
import scrollLock from 'scroll-lock';

export default {
  data() {
    return {
      readyState: false,
      navigation: [
        {
          title: 'Home',
          name: 'Home',
        },
        {
          title: 'About me',
          type: 'About',
          id: '7bV3O9Tl8v48qvSwpuGDFw'
        },
        {
          title: 'Articles',
          type: 'Experiment1',
        },
        {
          title: 'Portfolio',
          type: 'Experiment2',
        },
      ]
    }
  },
  components: {
    NavigationComponent,
    LogoAnimation,
    MobileMenu,
    MobileClose,
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 0) {
        this.$refs.header.classList.add('scrolled');
        return;
      }
      this.$refs.header.classList.remove('scrolled');
    },
    toggleMobileMenu() {
      if (this.$refs.mobilemenu.classList.contains('show')) {
        this.$refs.mobilemenu.classList.remove('show');
        scrollLock.enablePageScroll();

        return;
      }

      scrollLock.disablePageScroll();
      this.$refs.mobilemenu.classList.add('show');
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.readyState = true;
    })
  },
  created () {
    this.debounceHandleScroll = debounce(this.handleScroll);
    window.addEventListener('scroll', this.debounceHandleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.debounceHandleScroll);
  },
}
</script>

<style lang="scss">
.header {
  user-select: none; /* supported by Chrome and Opera */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  color: $color-black;
  min-height: 75px;
  transition: min-height 0.4s ease;
  width: 100%;

  .logo {
    margin-bottom: 6px;
  }

  &.scrolled {
    min-height: 75px;
  }

  &__container {
    background-color: $color-white;
    width: 100%;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    z-index: 9999;

    &--inner {
      display: flex;
      align-items: center;
      flex-flow: row-reverse;
      justify-content: space-between;
      margin: 0 auto;
      min-height: 75px;
      top: 0;
      transition: min-height 0.4s ease, width 0.3s ease-in;
      width: 100%;
    }
  }

  &__mobile {
    cursor: pointer;
    display: block;
    margin-right: 1.5rem;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.2);
    }
  }

  &__navigation {
    display: none;

    ul {
      list-style-type: none;
      padding-left: 0;

      li {
        font-size: 14px;
        float: left;
        margin: 0 $spacing-xs 0 0;

        a {
          padding: 0.7rem 1.5rem;
          color: $color-black;
          text-decoration: none;

          &:hover {
            background-color: $color-grey-light;
            border-radius: 3px;
            color: $color-primary;
          }
        }
      }
    }
  }

  &__mobile-menu {
    background-color: rgba(255, 255, 255, 0.95);
    display: block;
    height: 100vh;
    left: -100%;
    position: fixed;
    transition: 0.5s ease left;
    width: 100%;
    z-index: 99999;

    &--close {
      cursor: pointer;
      float: right;
      margin: 1.25rem;
      transition: transform 0.2s ease;

      &:hover {
        transform: scale(1.2);
      }
    }

    &.show {
      left: 0;
    }

    ul {
      list-style-type: none;
      padding-left: 0;
      padding-top: 3rem;

      li {
        transition: padding 0.2s ease;

        a {
          color: $color-black;
          display: block;
          font-family: Helvetica, sans-serif;
          font-size: 3.4rem;
          font-weight: 100;
          height: 100%;
          padding: 1rem;
          text-decoration: none;
          width: 100%;
        }

        &:not(:last-child) {
          border-bottom: 1px solid #e6e6e6;
        }

        &:hover {
          background-color: $color-white;
          padding-left: 1rem;
        }
      }
    }
  }

  @media screen and (min-width: $width-lg) {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
    min-height: 140px;
    padding-bottom: $spacing-sm;
    width: 100%;

    .logo {
      margin-bottom: -9px;
    }

    &.scrolled {
      min-height: 50px;
    }

    &__container {
      &--inner {
        align-items: center;
        flex-flow: row;
        justify-content: space-between;
        min-height: 50px;
        padding-bottom: $spacing-sm;
        padding-top: 90px;
        transition: padding-top 0.4s;
        width: $width-lg;

        .scrolled & {
          padding-top: 0;
          min-height: 50px;
        }
      }
    }

    &__navigation {
      display: block;

      ul {
        margin-top: 1rem;
      }

      .scrolled & {
        bottom: $spacing-sm;
      }
    }

    &__mobile {
      display: none;
    }

    &__mobile-menu {
      display: none;
    }
  }
}
</style>
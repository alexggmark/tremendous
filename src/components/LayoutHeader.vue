<template>
  <header id="headercontainer">
    <div class="header" id="header" ref="header">
      <div class="header__container">
        <div class="header__navigation">
          <navigation-component/>
        </div>
        <logo-animation :animation="readyState" />
      </div>
    </div>
  </header>
</template>

<script>
import NavigationComponent from '@/components/Navigation'
import LogoAnimation from '@/components/animations/Logo'
import debounce from 'lodash/debounce';

export default {
  data() {
    return {
      readyState: false,
    }
  },
  components: {
    NavigationComponent,
    LogoAnimation,
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 0) {
        this.$refs.header.classList.add('scrolled');
        document.getElementsByTagName('body')[0].style.paddingTop = `${this.getHeaderHeight()}px`;
        return;
      }
      document.getElementsByTagName('body')[0].style.paddingTop = '0px';
      this.$refs.header.classList.remove('scrolled');
    },
    getHeaderHeight() {
      return document.getElementById('header').offsetHeight;
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.readyState = true;
    })
  },
  created () {
    window.addEventListener('scroll', debounce(this.handleScroll));
  },
  destroyed () {
    window.removeEventListener('scroll', debounce(this.handleScroll));
  },
}
</script>

<style lang="scss">
.header {
  background-color: $color-background;
  color: $color-white;
  width: 100%;

  &.scrolled {
    position: fixed;
    top: 0;
  }

  &__container {
    display: flex;
    align-items: center;
    flex-flow: column;
    justify-content: space-between;
    margin: 0 auto;
    min-height: 160px;
    padding-bottom: $spacing-sm;
    position: relative;
    transition: min-height 0.2s ease, width 0.3s ease-in;
    width: 100%;

    .scrolled & {
      min-height: 90px;
    }
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
      align-items: flex-end;
      flex-flow: row;
      min-height: 120px;
      width: $width-lg;

      .scrolled & {
        min-height: 50px;
      }
    }

    &__navigation {
      ul {
        margin-top: 1rem;
      }

      .scrolled & {
        bottom: $spacing-sm;
      }
    }
  }
}
</style>
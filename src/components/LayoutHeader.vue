<template>
  <header>
    <div class="header" ref="header">
      <div class="header__container shadow">
        <div class="header__container--inner">
          <div class="header__navigation">
            <navigation-component :navigation-links="navigation" />
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
import debounce from 'lodash/debounce';

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
          title: 'Contact',
          type: 'Contact',
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
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 0) {
        this.$refs.header.classList.add('scrolled');
        return;
      }
      this.$refs.header.classList.remove('scrolled');
    },
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
  color: $color-black;
  margin-bottom: 2rem;
  min-height: 100px;
  transition: min-height 0.4s ease;
  width: 100%;

  &.scrolled {
    min-height: 90px;
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
      flex-flow: column;
      justify-content: space-between;
      margin: 0 auto;
      min-height: 90px;
      padding-bottom: $spacing-sm;
      top: 0;
      transition: min-height 0.4s ease, width 0.3s ease-in;
      width: 100%;
    }
  }

  &__navigation {
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
          }
        }
      }
    }
  }

  @media screen and (min-width: $width-lg) {
    display: flex;
    justify-content: center;
    min-height: 140px;
    padding-bottom: $spacing-sm;
    width: 100%;

    &.scrolled {
      min-height: 50px;
    }

    &__container {
      &--inner {
        align-items: center;
        flex-flow: row;
        min-height: 50px;
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
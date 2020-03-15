<template>
  <header>
    <div class="header" ref="header">
      <div class="header__container">
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
          title: 'Test3',
          type: 'Experiment1',
        },
        {
          title: 'Test4',
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
  color: $color-white;
  transition: min-height 0.4s ease;
  width: 100%;

  &__container {
    background-color: $color-background;
    width: 100%;
    display: flex;
    justify-content: center;
    position: fixed;
    z-index: 9999;

    &--inner {
      display: flex;
      align-items: center;
      flex-flow: column;
      justify-content: space-between;
      margin: 0 auto;
      min-height: 140px;
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
        align-items: flex-end;
        flex-flow: row;
        width: $width-lg;

        .scrolled & {
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
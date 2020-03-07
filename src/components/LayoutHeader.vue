<template>
  <header>
    <div class="header" ref="header">
      <div class="header__container">
        <div class="header__navigation">
          <navigation-component :animation="readyState" />
        </div>
        <logo-animation :animation="readyState" />
      </div>
    </div>
  </header>
</template>

<script>
import NavigationComponent from '@/components/Navigation'
import LogoAnimation from '@/components/animations/Logo'

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
        return;
      }
      this.$refs.header.classList.remove('scrolled');
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.readyState = true;
    })
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
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
      flex-flow: row;
      justify-content: space-between;
      margin: 0 auto;
      min-height: 160px;
      padding-bottom: $spacing-sm;
      position: relative;
      transition: min-height 0.2s ease, width 0.3s ease-in;
      width: 100%;

      .scrolled & {
        min-height: 70px;
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
        min-height: 120px;
        width: $width-lg;

        // .scrolled & {
        //   width: calc(100% - #{$spacing-md});
        // }
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
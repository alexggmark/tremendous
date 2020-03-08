<template>
  <div class="footer">
    <div class="footer__container">
      <div class="footer__content">
        Lorem
      </div>
      <div class="footer__content">
        Ipsum
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.footer {
  background-color: $color-yellow;
  color: $color-black;

  &__container {
    display: flex;
    flex-flow: column;
    margin: 0 auto;
    padding: $layout-sm 0;
    width: 100%;
  }

  &__content {
    padding: 0 $layout-sm 0 0;
  }

  @media screen and (min-width: $width-lg) {
    &__container {
      flex-flow: row;
      width: $width-lg;
    }

    &__content {
      padding-top: $spacing-xs;
      width: 50%;
    }
  }
}
</style>
<template>
  <div class="footer">
    <div class="footer__container">
      <div class="footer__content">
        Alex Grønmark
      </div>
      <div class="footer__content">
        2020
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
  background-color: #1b1b1b;
  color: $color-white;
  font-size: 12px;

  &__container {
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    margin: 0 auto;
    padding: $layout-sm 1rem;
    width: calc(100% - 2rem);
  }

  @media screen and (min-width: $width-lg) {
    &__container {
      flex-flow: row;
      padding: $layout-sm 0;
      width: $width-lg;
    }
  }
}
</style>
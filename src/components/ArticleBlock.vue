<template>
  <div class="article-block">
    <div class="article-block__container">
      <div class="article-block__content">
        <h2 class="h1 article-block__title">
          Five Charts Tell Horror Story of European Market’s Mayhem
        </h2>
        <span class="article-block__date">24th February 2020</span>
        <span class="article-block__text-content">
          <p>The Trump administration’s response to the global coronavirus outbreak has been riven by missteps, including problems developing and distributing a test for the infection and discordant public messages, raising risk that the president’s assertions the virus is contained may be proved wrong.</p>
          <p>An initial test for the virus developed by the Centers for Disease Control and Prevention was plagued by technical problems and has been in short supply ...</p>
        </span>
      </div>
      <div class="article-block__image">
        <img src="@/assets/images/code.jpg">
      </div>
    </div>
    <div class="article-block__bottom-spacer"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.article-block {
  background-color: $color-black;
  color: $color-white;

  &__container {
    display: flex;
    flex-flow: column;
    margin: 0 auto;
    padding: $layout-sm 0;
    width: 100%;
  }

  &__image {
    width: 100%;

    img {
      width: 100%;
    }
  }

  &__content {
    padding: 0 $layout-sm 0 0;
  }

  &__title {
    margin-top: 0;
  }

  &__date {
    border-bottom: 1px solid $color-white;
    color: $color-white;
    display: block;
    font-family: $font-medium;
    font-size: $font-size-2xs;
    padding-bottom: $spacing-2xs;
    width: 100%;
  }

  &__text-content{
    font-size: $font-size-sm;
    line-height: $line-height-md;
  }

  &__bottom-spacer {
    background-color: #ffffff;
    border-bottom: 1px dotted #000000;
    height: 4px;
    margin-bottom: 4px;
    width: 100%;
  }

  @media screen and (min-width: $width-md) {
    &__container {
      flex-flow: row;
      width: $width-lg;
    }

    &__image {
      width: 50%;

      img {
        width: 100%;
      }
    }

    &__content {
      padding-top: $spacing-xs;
      width: 50%;
    }
  }
}
</style>
<template>
  <div class="main-article">
    <div class="main-article__container">
      <div class="main-article__main">
        <div class="main-article__image" :style="{ backgroundImage: 'url(' + imageUrl + ')' }"></div>
        <div class="main-article__content">
          <h2 class="h1 main-article__title">
            Five Charts Tell Horror Story of European Market’s Mayhem
          </h2>
          <span class="main-article__date">24th February 2020</span>
          <span class="main-article__text-content">
          <p>The Trump administration’s response to the global coronavirus outbreak has been riven by missteps, including problems developing and distributing a test for the infection and discordant public messages, raising risk that the president’s assertions the virus is contained may be proved wrong.</p>
          <p>An initial test for the virus developed by the Centers for Disease Control and Prevention was plagued by technical problems and has been in short supply. A decision by the State Department to allow infected Americans to return home from Japan on the same plane as hundreds of uninfected citizens. The Trump administration’s response to the global coronavirus outbreak has been riven by missteps, including problems developing and distributing a test for the infection and discordant public messages, raising risk that the president’s assertions the virus is contained may be proved wrong.</p>
          <p>An initial test for the virus developed by the Centers for Disease Control and Prevention was plagued by technical problems and has been in short supply. A decision by the State Department to allow infected Americans to return home from Japan on the same plane as hundreds of uninfected citizens.</p>
          <p>The Trump administration’s response to the global coronavirus outbreak has been riven by missteps, including problems developing and distributing a test for the infection and discordant public messages, raising risk that the president’s assertions the virus is contained may be proved wrong.</p>
          <p>An initial test for the virus developed by the Centers for Disease Control and Prevention was plagued by technical problems and has been in short supply. A decision by the State Department to allow infected Americans to return home from Japan on the same plane as hundreds of uninfected citizens.</p>
          </span>
        </div>
      </div>
      <div class="main-article__side">
        <article-block-vertical/>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleBlockVertical from '@/components/ArticleBlockVertical'

export default {
  data() {
    return {
      imageUrl: require('@/assets/images/burger.jpg'),
    }
  },
  components: {
    ArticleBlockVertical,
  }
}
</script>

<style lang="scss">
.main-article {
  padding-bottom: $spacing-xl;

  &__container {
    display: flex;
    margin: 0 auto;
    width: 100%;
  }

  &__main {
    width: 100%;
  }

  &__side {
    display: none;
  }

  &__image {
    background-size: cover;
    background-position: center;
    height: 420px;
  }

  &__title {
    margin: $spacing-xl 0 $spacing-lg;
  }

  &__date {
    border-bottom: 1px dotted $color-black;
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

  @media screen and (min-width: $width-md) {
    &__container {
      flex-flow: row;
      width: $width-lg;
    }

    &__main {
      width: 75%;
    }

    &__side {
      display: block;
      width: 25%;
    }

    &__image {
      height: 320px;
    }
  }
}
</style>
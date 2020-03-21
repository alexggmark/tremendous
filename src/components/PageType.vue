<template>
  <section class="page">
    <div class="page--top">
      <div class="page__container">
        <div class="page__main">
          <template v-if="loadedState">
            <div class="page__image image" v-lazy:background-image="content1Image"></div>
          </template>
          <template v-else>
            <div class="skeleton--image"></div>
          </template>
          <template v-if="loadedState">
            <h2 class="h1 page__title">
              {{content1Title}}
            </h2>
          </template>
          <template v-else>
            <div class="skeleton--spacer-md"></div>
            <div v-for="i in 1" class="skeleton--title" :key="i"></div>
            <div class="skeleton--spacer-lg"></div>
          </template>
          <template v-if="loadedState">
            <span class="page__text-content" v-html="content1Text"></span>
          </template>
          <template v-else>
            <div v-for="i in 20" class="skeleton--text" :key="'skeleton-text' + i"></div>
          </template>
        </div>
      </div>
    </div>
    <div class="page--bottom">
      <div class="page__container">
        <div class="page__main">
          <div class="page__content shadow" v-if="content2Image && content2Text">
            <div class="page__block">
                <div class="page__image image" v-lazy:background-image="content2Image"></div>
            </div>
            <div class="page__block page__block--text">
              <h2 class="h3">
                {{content2Title}}
              </h2>
              <span class="page__text-content" v-html="content2Text"></span>
            </div>
          </div>

          <div class="page__content page__content--reverse shadow" v-if="content3Image && content3Text">
            <div class="page__block">
                <div class="page__image image" v-lazy:background-image="content3Image"></div>
            </div>
            <div class="page__block page__block--text">
              <h2 class="h3">
                {{content3Title}}
              </h2>
              <span class="page__text-content" v-html="content3Text"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {ContentTasks, loadingTime} from '@/common/api'
import tools from '@/common/tools'

export default {
  data() {
    return {
      data: [],
      loadedState: false,
    }
  },
  computed: {
    pageTitle() {
      return this.$route.params.type;
    },
    pageContentId() {
      return this.$route.params.id;
    },
    contentTitle() {
      if (!this.data.fields) { return null; }
      return this.data.fields.title;
    },
    content1Text() {
      if (!this.data.fields) { return null; }
      return tools.processRichText(this.data.fields.content1);
    },
    content1Title() {
      if (!this.data.fields) { return null; }
      return this.data.fields.title1;
    },
    content1Image() {
      if (!this.data.fields) { return null; }
      return this.data.fields.image1.fields.file.url;
    },
    content2Text() {
      if (!this.data.fields) { return null; }
      return tools.processRichText(this.data.fields.content2);
    },
    content2Title() {
      if (!this.data.fields) { return null; }
      return this.data.fields.title2;
    },
    content2Image() {
      if (!this.data.fields) { return null; }
      return this.data.fields.image2.fields.file.url;
    },
    content3Text() {
      if (!this.data.fields) { return null; }
      return tools.processRichText(this.data.fields.content3);
    },
    content3Title() {
      if (!this.data.fields) { return null; }
      return this.data.fields.title3;
    },
    content3Image() {
      if (!this.data.fields) { return null; }
      return this.data.fields.image3.fields.file.url;
    }
  },
  created() {
    ContentTasks.getArticleById(this.pageContentId)
      .then((content) => {
        this.data = content;
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setTimeout(() => {
          this.loadedState = true;
        }, loadingTime)
      })
  }
}
</script>

<style lang="scss">
.page {
  color: $color-black;

  &--bottom {
    background-color: $color-grey-light;
  }

  &__container {
    display: flex;
    margin: 0 auto;
    padding: 0 1rem;
    width: calc(100% - 2rem);
  }

  &__content {
    background-color: $color-white;
    display: flex;
    flex-flow: column;
    padding: 1.2rem;
    margin: $spacing-md 0;
  }

  &__block {
    width: 100%;

    &--text {
      display: flex;
      flex-flow: column;
      justify-content: center;
    }
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
    border-bottom: 1px solid $color-black;
    display: block;
    font-family: $font-medium;
    font-size: $font-size-2xs;
    padding-bottom: $spacing-2xs;
    width: 100%;
  }

  &__text-content{
    font-size: $font-size-md;
    line-height: $line-height-md;
  }

  .skeleton--image {
    height: 420px;
  }

  @media screen and (min-width: $width-md) {
    &__container {
      flex-flow: row;
    }

    &__content {
      flex-flow: row;
      padding: 0.6rem;

      &--reverse {
        flex-flow: row-reverse;
      }
    }

    &__block {
      padding: 0 $spacing-md 0 0;

      .image {
        height: auto;
        padding-top: 100%;
      }

      .page__content--reverse & {
        padding: 0 0 0 $spacing-md;
      }
    }
  }

  @media screen and (min-width: $width-lg) {
    &__container {
      flex-flow: row;
      padding: 0;
      width: $width-lg;
    }

    &__main {
      padding: 0 16rem 0 0;
      width: 100%;
    }
  }
}
</style>
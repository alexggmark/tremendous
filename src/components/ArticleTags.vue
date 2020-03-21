<template>
    <ul class="article-tag">
      <li
        v-for="tag in tagData"
        :key="'article-tag-' + tag.fields.title"
        :style="{
          '--color-hover': getTagColor(tag.fields.title).color,
          '--color-text-hover': getTagColor(tag.fields.title).darkText ? dark : light,
        }"
        class="article-tag__tag"
      >
        {{ tag.fields.title }}
      </li>
    </ul>
</template>

<script>
import {tagColors} from '@/common/config'

export default {
  data() {
    return {
      dark: 'black',
      light: 'white',
    }
  },
  props: {
    tagData: {
      type: Array,
      required: true,
    }
  },
  methods: {
    getTagColor(tagName) {
      let match = tagColors.find((tag) => {
        return tag.title === tagName;
      });

      if (!match || match.length <= 0) {
        return {
          color: '#0059ff',
          darkText: false,
        }
      }

      return {
        color: match.color,
        darkText: match.dark,
      };
    }
  }
}
</script>

<style lang="scss">
  .article-tag {
    margin: 0;
    padding-inline-start: 0;

    &__tag {
      background-color: var(--color-hover);
      border-radius: 20px;
      color: var(--color-text-hover);
      cursor: pointer;
      display: inline-block;
      font-size: $font-size-2xs;
      font-weight: 400;
      line-height: 12px;
      margin: 0.3rem 0.3rem 0 0;
      padding: 0.2rem 0.5rem;
      transition: background-color 0.2s ease, color 0.2s ease;

    }

    @media screen and (min-width: $width-md) {
      &__tag {
        background-color: #cacaca;
        color: white;

        &:hover {
          background-color: var(--color-hover);
          color: var(--color-text-hover);
        }
      }
    }
  }
</style>
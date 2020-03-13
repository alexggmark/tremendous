<template>
  <div class="layout">
    <layout-header/>
    <layout-article-navigation/>
    <slot/>
    <layout-footer/>
  </div>
</template>

<script>
import LayoutHeader from '@/components/LayoutHeader'
import LayoutArticleNavigation from '@/components/LayoutArticleNavigation'
import LayoutFooter from '@/components/LayoutFooter'

export default {
  data() {
    return {
      info: true,
    }
  },
  components: {
    LayoutHeader,
    LayoutArticleNavigation,
    LayoutFooter,
  },
  updated() {
    this.info = false;
  }
}
</script>

<style lang="scss" scoped>
.layout {
  margin: 0;
  padding: 0;
}
</style>
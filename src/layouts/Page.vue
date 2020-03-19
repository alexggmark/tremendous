<template>
  <div class="layout">
    <layout-header/>
    <slot/>
    <layout-footer/>
  </div>
</template>

<script>
import LayoutHeader from '@/components/LayoutHeader'
import LayoutFooter from '@/components/LayoutFooter'

export default {
  components: {
    LayoutHeader,
    LayoutFooter,
  }
}
</script>

<style lang="scss" scoped>
.layout {
  margin: 0;
  padding: 0;
}
</style>
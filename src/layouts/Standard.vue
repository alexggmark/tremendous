<template>
  <div class="layout">
    <canvas-background/>
    <layout-header/>
    <slot/>
    <layout-footer/>
  </div>
</template>

<script>
import LayoutHeader from '@/components/LayoutHeader'
import LayoutFooter from '@/components/LayoutFooter'
import CanvasBackground from '@/components/animations/Canvas'

export default {
  components: {
    LayoutHeader,
    LayoutFooter,
    CanvasBackground,
  },
  updated() {
    this.$nextTick(() => {
      this.loadedState = true;
    })
  }
}
</script>

<style lang="scss" scoped>
.layout {
  margin: 0;
  padding: 0;
}
</style>
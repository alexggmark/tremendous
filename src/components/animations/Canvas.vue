<template>
  <div>
    <canvas class="canvas"></canvas>
  </div>
</template>

<script>
import Canvas from '@/common/canvas'

export default {
  mounted() {
    Canvas();
  }
}
</script>

<style lang="scss" scoped>
.canvas {
  position: fixed;
  top: 0;
  left: 0;
  // width: 100%;
  // height: 100vh;
  background-color: $color-white;
  z-index: 0;
}
</style>
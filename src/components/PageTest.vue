<template>
  <div class="test">
    <div class="test__container">
      <button @click="animation1 = !animation1">Animation 1</button>
      <button @click="animation2 = !animation2">Animation 2</button>
      <button @click="animation3 = !animation3">Animation 3</button>
      <button @click="animation4 = !animation4">Animation 4</button>
      <div class="block-container">
        <transition name="slide">
          <div class="block" v-if="animation1"></div>
        </transition>
        <div class="block" v-if="animation2"></div>
        <div class="block" v-if="animation3"></div>
        <div class="block" v-if="animation4"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      animation1: false,
      animation2: false,
      animation3: false,
      animation4: false,
    }
  }
}
</script>

<style lang="scss" scoped>
.slide-enter {
  height: 200px;
  width: 200px;
  background-color: red;
}
.slide-enter-active {
  animation: slide-in .5s;
}
.slide-leave-active {
  animation: slide-in .5s reverse;
}
@keyframes slide-in {
  0% {
    transform: translateX(-100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.test {
  &__container {
    margin: 0 auto $layout-sm;
    padding-top: $spacing-sm;
    width: 100%;
  }

  .block-container {
    display: block;
    width: 100%;
  }

  .block {
    background: url('https://images-cdn.9gag.com/photo/aOzq15D_700b.jpg');
    background-size: cover;
    display: inline-block;
    margin: 2rem auto;
    height: 200px;
    width: 200px;
  }

  @media screen and (min-width: $width-md) {
    &__container {
      padding-right: $layout-lg;
      width: calc(#{$width-lg} - #{$layout-lg});
    }
  }
}
</style>
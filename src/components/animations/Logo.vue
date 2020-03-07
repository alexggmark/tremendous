<template>
  <div class="logo">
    <div class="logo__shapes">
      <svg class="obj1" height="20" width="20">
        <circle cx="10" cy="10" r="10" fill="#FF0000"></circle>
      </svg>
      <svg class="obj2" width="30" height="20">
        <rect width="30" height="20" fill="#00FF0A"></rect>
      </svg>
      <svg class="obj3" height="20" width="20">
        <circle cx="10" cy="10" r="10" fill="#00FF0A"></circle>
      </svg>
      <svg class="obj4" height="20" width="20">
        <circle cx="10" cy="10" r="10" fill="#001AFF"></circle>
      </svg>
    </div>
    <span class="logo__text">
      <span class="logo__text--logo obj5">tremendous</span>
    </span>
  </div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js';

export default {
  data() {
    return {
      el1: '.obj1',
      el2: '.obj2',
      el3: '.obj3',
      el4: '.obj4',
      el5: '.obj5',
    }
  },
  props: ['animation'],
  methods: {
    setAnimation() {
      anime.set(this.el1, {
        scale: 0,
      })
      anime.set(this.el2, {
        width: 0,
      });
      anime.set(this.el3, {
        translateX: -30,
        scale: 0,
      });
      anime.set(this.el4, {
        scale: 0,
      });
      anime.set(this.el5, {
        translateY: 50.
      })
    },
    runAnimation() {
      const logo = anime.timeline({
        easing: 'easeOutExpo',
        duration: 950,
        loop: false,
      });

      logo
        .add({
          targets: this.el3,
          scale: 1,
          delay: 1000,
        })
        .add({
          targets: this.el1,
          scale: 1,
        }, '-=750')
        .add({
          targets: this.el3,
          translateX: 0,
        }, '-=300')
        .add({
          targets: this.el2,
          width: 30,
        }, '-=950')
        .add({
          targets: this.el4,
          scale: 1,
        }, '-=400')
        .add({
          targets: this.el5,
          translateY: 0,
          duration: 1000,
        }, '-=500')
    }
  },
  watch: {
    animation() {
      if (!this.animation) { return; }
      this.runAnimation();
    }
  },
  mounted() {
    this.setAnimation();
  },
}
</script>

<style lang="scss" scoped>
  .obj1, .obj2, .obj3, .obj4 {
    position: absolute;
  }

  .obj1 {
    left: 0;
    z-index: 3;
  }

  .obj2 {
    left: 10px;
    z-index: 0;
  }

  .obj3 {
    left: 30px;
    z-index: 2;
  }

  .obj4 {
    right: 0;
    z-index: 1;
  }

.logo {
  align-items: flex-end;
  display: flex;
  font-family: 'Lobster', sans-serif;
  font-size: 45px;
  padding-bottom: $spacing-xs;

  &__text {
    line-height: 36px;
    margin-bottom: 0;
    padding-bottom: 0;
    overflow: hidden;

    &--logo {
      display: block;
      padding-left: $spacing-sm;
    }
  }

  &__shapes {
    height: 20px;
    position: relative;
    width: 75px;
  }

  @media screen and (min-width: $width-md) {
    bottom: 0;
    position: absolute;
    right: 0;
  }
}
</style>
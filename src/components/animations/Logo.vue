<template>
  <div class="logo">
    <div class="logo__shapes">
      <svg class="obj1" height="20" width="20">
        <circle cx="10" cy="10" r="10" fill="#ff4b3e"></circle>
      </svg>
      <svg class="obj2" width="30" height="20">
        <rect width="30" height="20" fill="#0059ff"></rect>
      </svg>
      <svg class="obj3" height="20" width="20">
        <circle cx="10" cy="10" r="10" fill="#0059ff"></circle>
      </svg>
      <svg class="obj4" height="20" width="20">
        <circle cx="10" cy="10" r="10" fill="#0059ff"></circle>
      </svg>
    </div>
    <span class="logo__text">
      <span class="logo__text--logo obj5" data-splitting="tremendous">tremendous</span>
    </span>
  </div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js';
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import splitting from "splitting";

export default {
  data() {
    return {
      el1: '.obj1',
      el2: '.obj2',
      el3: '.obj3',
      el4: '.obj4',
      el5: '.char',
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
        translateY: 50,
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
          duration: 750,
          delay: anime.stagger(50),
        }, '-=700')
    }
  },
  watch: {
    animation() {
      if (!this.animation) { return; }
      this.runAnimation();
    }
  },
  mounted() {
    splitting({
      target: "[data-splitting]",
      by: "chars",
      key: null
    })
    this.setAnimation();
  },
}
</script>

<style lang="scss" scoped>
.logo {
  align-items: flex-end;
  display: flex;
  margin-bottom: -9px;
  flex-flow: row-reverse;

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

  &__text {
    color: $color-black;
    line-height: 28px;
    margin-bottom: 0;
    padding-bottom: 0;
    overflow: hidden;

    &--logo {
      display: block;
      font-family: 'Helvetica', sans-serif;
      font-size: 25px;
      font-weight: 900;
      letter-spacing: -3px;
      margin-bottom: -5px;
      margin-right: 3px;
    }
  }

  &__shapes {
    height: 20px;
    margin-bottom: -3px;
    margin-right: -6px;
    position: relative;
    transform: scale(0.7);
    width: 75px;
  }

  @media screen and (min-width: $width-md) {
    flex-flow: row;
  }
}
</style>
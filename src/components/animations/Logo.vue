<template>
  <div>
    <svg width="63" height="23" viewBox="0 0 63 16" fill="none" xmlns="http://www.w3.org/2000/svg" ref="logo">
      <rect class="obj2" x="9" y="3.22565" width="21" height="16" fill="#00FF0A"/>
      <circle class="obj1" cx="8" cy="11.2256" r="8" fill="#FF0000"/>
      <circle class="obj3" cx="29" cy="11.2256" r="8" fill="#00FF0A"/>
      <ellipse class="obj4" cx="51.5088" cy="11.4917" rx="8.12586" ry="8.12585" transform="rotate(45 51.5088 11.4917)" fill="#001AFF"/>
    </svg>
    <button @click="runAnimation">Click</button>
    <button @click="setAnimation">Set</button>
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
    }
  },
  props: ['animation'],
  methods: {
    setAnimation() {
      anime.set(this.el1, {
        opacity: 0,
      })
      anime.set(this.el4, {
        translateX: -40,
        scale: 0,
      });
      anime.set(this.el3, {
        scale: 0,
        translateX: -20,
      });
      anime.set(this.el2, {
        width: 0,
      });
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
        })
        .add({
          targets: this.el1,
          opacity: 1,
        })
        .add({
          targets: this.el3,
          translateX: 0,
        }, '-=500')
        .add({
          targets: this.el2,
          width: 21,
        }, '-=1000')
        .add({
          targets: this.el4,
          scale: 1,
          translateX: 0,
        }, '-=500');
    }
  },
  mounted() {
    this.setAnimation();
  },
}
</script>

<style lang="scss" scoped>
  .obj1, .obj2, .obj3, .obj4 {
    transform-origin: center center;
  }
</style>
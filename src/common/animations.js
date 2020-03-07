import anime from 'animejs/lib/anime.es.js';

const animations = {
  logoAnimation(el1, el2, el3, el4) {
    // Create a timeline with default parameters
    var tl = anime.timeline({
      easing: 'easeOutExpo',
      duration: 750
    });

    tl
    .add({
      targets: el,
      translateX: 250,
    })
    .add({
      targets: el,
      translateY: 250,
    })
    .add({
      targets: el,
      rotate: 250,
    });
  }
}

export default animations;
<template>
  <section @mousemove="imagePerspeciveShift">
    <div class="hero-content" fetchpriority="high" rel="preload">
      <h1 class="section-heading">
        <transition appear @enter="enter">
          <span>Zachary Lehouillier</span>
        </transition>
        <span>portfolio</span>
        <p class="sub-heading">Web Developer & Designer</p>
      </h1>
      <NavMenu />
    </div>
    <ParallaxImage
      clickable
      class="notebook"
      :expanded="notebookIsExpanded"
      :src="notebookImage"
      :clientX="clientX"
      :clientY="clientY"
      :mousePos="[clientX, clientY]"
    />
    <HeroParagraph />
    <p class="welcome-paragraph">Oh, dude, welcome!</p>
    <p>X~! {{ clientX }}</p>
    <p>Y~! {{ clientY }}</p>
  </section>
  <div class="grad"></div>
</template>
<script>
import NavMenu from '/src/components/nav/NavMenu.vue';
import ParallaxImage from '/src/components/ParallaxImage.vue';
import HeroParagraph from '/src/components/hero/HeroParagraph.vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default {
  components: {
    NavMenu,
    ParallaxImage,
    HeroParagraph,
  },
  props: ['clientX', 'clientY'],
  data() {
    return {
      notebookImage: require('../../assets/optimized-imgs/notebook.webp'),
      notebookIsExpanded: false,
    };
  },
  methods: {
    enter(el) {
      gsap.fromTo(
        el,
        { opacity: 0 },
        {
          duration: 1,
          opacity: 1,
        }
      );
    },
  },
};
</script>

<style scoped>
section {
  height: max(100vh, 800px);
  height: max(100svh, 800px);
  position: relative;
  overflow-x: clip;
}

h1 {
  bottom: 20%;
  left: -55%;
  overflow: hidden;
}

.sub-heading {
  font-size: 1.5rem;
  font-weight: 100;
}

.welcome-paragraph {
  text-transform: uppercase;
  position: absolute;
  right: 2rem;
  bottom: 2rem;
  font-size: 2.4rem;
  font-style: italic;
  z-index: 1;
}

.hero-content {
  background-image: url('../../assets/optimized-imgs/hero-image.webp');
  width: clamp(300px, 47rem, 1000px);
  height: clamp(300px, 47rem, 1000px);
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 2rem;
  right: 2rem;
  filter: saturate(1.1);
}

.grad {
  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 85%
  );
  left: 0;
  right: 0;
  height: 30vh;
  height: 30svh;
}

@media (width <= 950px) {
  .hero-content {
    background-image: none;
    background-size: contain;
    background-position: 50% 50%;
    width: 100%;
    height: 50vh;
    height: 50svh;
    left: 50%;
    top: 30%;
    transform: translate(-50%, -50%);
  }

  h1 {
    top: 10%;
    left: 50%;
    transform: translate(-50%, 0%);
    font-size: 5rem;
  }

  .notebook {
    left: 50%;
    top: 0%;
    transform: translate(-50%, 0%);
    display: none;
  }
  .sub-heading {
    font-size: 2.5rem;
    width: 100%;
    text-align: center;
  }
}
</style>

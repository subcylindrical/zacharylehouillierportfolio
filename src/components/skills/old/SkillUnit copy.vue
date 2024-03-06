<template>
  <div class="skill-wrapper" :ref="skillCategory">
    <div class="earth" ref="earth"></div>
    <div class="skill-container">
      <img :src="lightImg" class="skill-light" />
      <ParallaxImage
        :expanded="false"
        :src="imgSrc"
        :clientX="clientX"
        :clientY="clientY"
        :mousePos="[clientX, clientY]"
      />
    </div>
  </div>
</template>

<script>
import ParallaxImage from '../ParallaxImage.vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default {
  components: { ParallaxImage },
  props: ['skillCategory', 'abilities', 'clientX', 'clientY'],
  data() {
    return {
      imgSrc: require('/images/skills-design-shadow.png'),
      // lightImg: require('/images/skills-light-2.png'),
      lightImg: require('/images/lighbulb.png'),
    };
  },
  mounted() {},
};
</script>

<style scoped>
* {
  --side-width: 15%;
  --skill-background: var(--main-yellow);
}

h3 {
  position: absolute;
  left: 22%;
  bottom: 5%;
  transform-origin: 0% 100%;
  transform: rotate(-90deg);
  font-family: 'Pitagon Sans Mono';
  text-transform: uppercase;
  font-size: 25px;
  font-weight: 200;
}

.skill-wrapper {
  width: 75vw;
  max-width: 65vw;
  min-width: 65vw;
  height: 100%;
  position: relative;
}

.skill-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url('/images/window-no-earth.png');
  background-position: center center;
  background-size: 100%;
  background-repeat: no-repeat;
  position: relative;
  z-index: 2;
}

.skill-container::before {
  position: absolute;
  content: '';
  left: 0px;
  right: 0px;
  height: 100%;
  background-image: url('/images/glass.png');
  background-position: center center;
  background-size: 100%;
  background-repeat: no-repeat;
  z-index: 4;
  opacity: 0.3;
}

.earth {
  width: 65vw;
  max-width: 65vw;
  min-width: 65vw;
  position: absolute;
  left: 0px;
  height: 100%;
  background-image: url('/images/earth.png');
  background-position: center center;
  background-size: 100%;
  background-repeat: no-repeat;
  z-index: 1;
  opacity: 1;
}

img {
  width: 45%;
  height: auto;
  z-index: 2;
  position: relative;
  left: 0rem;
  top: 0rem;
}

.skill-light {
  width: 25rem;
  height: auto;
  z-index: 5;
  position: absolute;
  left: -10rem;
  top: 0%;
}
</style>

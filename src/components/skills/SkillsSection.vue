<template>
  <section ref="sectionTrigger">
    <div class="skills-wrapper">
      <div class="slider-wrapper">
        <div class="skill-slider" ref="slider">
          <div class="skill-wrapper">
            <div class="earth" ref="earth"></div>
            <div class="skill-container">
              <div class="notebook-container">
                <ParallaxImage
                  v-for="imgSrc in imgSrcs"
                  class="skill-image"
                  :expanded="false"
                  :src="imgSrc.src"
                  :clientX="clientX"
                  :clientY="clientY"
                  :mousePos="[clientX, clientY]"
                  :key="imgSrc"
                  :rotation="imgSrc.rotation"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ParallaxImage from '../ParallaxImage.vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default {
  components: { ParallaxImage },
  provide() {
    return {
      timeline: this.timeline,
    };
  },
  props: ['clientX', 'clientY'],
  data() {
    return {
      imgSrcs: [
        {
          src: require('../../assets/optimized-imgs/code.webp'),
          rotation: '-8deg',
        },
        {
          src: require('../../assets/optimized-imgs/design.webp'),
          rotation: '2deg',
        },
        {
          src: require('../../assets/optimized-imgs/build.webp'),
          rotation: '-15deg',
        },
      ],
      timeline: null,
      skills: [
        {
          name: '01.Code',
          abilities: [
            'html',
            'css',
            'sass',
            'javascript',
            'js libraries',
            'vue',
          ],
        },
      ],
    };
  },
  mounted() {
    this.timeline = gsap
      .timeline({
        scrollTrigger: {
          trigger: this.$refs.sectionTrigger,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 2,
          markers: false,
        },
      })
      .fromTo(
        '.earth',
        { x: '10%', rotate: '-15deg' },
        {
          x: '-10%',
          rotate: '5deg',
          ease: 'none',
        }
      )
      .to(
        '.notebook-container',
        {
          x: '-100%',
          ease: 'none',
        },
        '<'
      );
  },
};
</script>

<style scoped>
* {
  --notebook-width: 65rem;
}

section {
  height: 300vh;
  height: 300lvh;
  background-color: var(--off-black);
  flex-direction: column;
  z-index: 1;
}

.skills-wrapper {
  background-color: var(--off-black);
  position: relative;
  z-index: 0;
  background-size: cover;
  height: 100vh;
  height: 100lvh;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
}

.slider-wrapper {
  display: flex;
  overflow: hidden;
  flex-grow: 1;
}

.skill-slider {
  flex-grow: 0;
  display: flex;
  flex-direction: row;
  align-items: start;
  width: 100vw;
}

.banner-section {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.skills-banner img {
  height: 100%;
  padding: 0 50px;
}

.skill-header {
  max-height: 100%;
  margin: 0px;
  line-height: 1.3;
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
  width: 100vw;
  height: 100%;
  position: relative;
}

.skill-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* background-image: url('/images/porthole-test1.png'); */
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  z-index: 2;
}

.notebook-container {
  /* width: 100%; */
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* transform: translateX(calc(50% - var(--notebook-width) / 2rem)); */
  transform: translateX(55%);
}

.skill-container::before {
  position: absolute;
  content: '';
  left: 0px;
  right: 0px;
  height: 100%;
  background-image: url('../../assets/optimized-imgs/porthole5.webp');
  background-position: center center;
  /* background-size: 100% 100%; */
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 4;
  opacity: 1;
}

.earth {
  width: 50vw;
  height: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-image: url('../../assets/optimized-imgs/earth-small.webp');
  background-position: center center;
  background-size: 100%;
  background-repeat: no-repeat;
  z-index: 1;
  filter: blur(2px);
  opacity: 1;
}

img {
  width: 65rem;
  height: auto;
  z-index: 2;
  position: relative;
  left: 0rem;
  top: 0rem;
}

@media (width <= 1850px) {
  .earth {
    width: 60vw;
    top: 65%;
    left: 50%;
  }
}

@media (width <= 1200px) {
  .earth {
    width: 150vw;
    top: 70%;
    left: 24%;
  }
}
@media (width <= 800px) {
  .earth {
    width: 200vw;
    top: 70%;
  }
}
</style>

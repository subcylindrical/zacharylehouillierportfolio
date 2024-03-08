<template>
  <div
    class="background-wrapper"
    @mousemove="trackMouse"
    @mouseover="handleClickable"
  >
    <div ref="homeSection" class="scroller"></div>
    <HeroSection :clientX="trackClientX" :clientY="trackClientY" />
    <div class="overflow">
      <div ref="workSection" class="scroller"></div>
      <WorkSection @show-image="setImgSrc" @is-showing-image="toggleImgShow" />
      <div ref="skillsSection" class="scroller"></div>
      <SkillsSection :clientX="trackClientX" :clientY="trackClientY" />
    </div>
    <div ref="aboutSection" class="scroller"></div>
    <AboutMeSection />
  </div>
  <teleport to=".earth-satellite-container" :disabled="cursorTeleportDisabled">
    <TheCursor
      :workSource="workSelection"
      :focused="focused"
      :mousePos="[trackClientX, trackClientY]"
      :showImage="cursorImgShown"
    />
  </teleport>
  <div ref="contactSection" class="scroller"></div>
</template>

<script>
import HeroSection from './components/hero/HeroSection.vue';
import WorkSection from '/src/components/work/WorkSection.vue';
import SkillsSection from '/src/components/skills/SkillsSection.vue';
import AboutMeSection from '/src/components/about/AboutMeSection.vue';
import TheCursor from './components/TheCursor.vue';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

export default {
  components: {
    HeroSection,
    WorkSection,
    SkillsSection,
    AboutMeSection,
    TheCursor,
  },
  data() {
    return {
      trackClientX: 0,
      trackClientY: 0,
      focused: false,
      workSelection: '',
      cursorImgShown: false,
      cursorTeleportDisabled: true,
    };
  },
  watch: {
    cursorImgShown(status) {
      if (status) {
        this.moveCursorToWork();
      } else {
        this.moveCursorFromWork();
      }
    },
  },
  provide() {
    return {
      scrollToSection: this.scroll,
    };
  },
  methods: {
    trackMouse(el) {
      this.trackClientX = el.clientX;
      this.trackClientY = el.clientY;
    },
    handleClickable(event) {
      if (event.target.hasAttribute('clickable')) {
        this.focused = true;
      } else {
        this.focused = false;
      }
    },
    setImgSrc(source) {
      this.workSelection = source;
    },
    toggleImgShow(isShowing) {
      this.cursorImgShown = isShowing;
    },
    moveCursorToWork() {
      // if (this.cursorTeleportDisabled && this.cursorImgShown) {
      this.cursorTeleportDisabled = false;
      // }
    },
    moveCursorFromWork() {
      this.cursorTeleportDisabled = true;
    },
    scroll(ref) {
      let location = this.$refs[ref];
      // location.scrollIntoView({ behavior: 'smooth', duration: 2000 });
      const offset = ref === 'skillsSection' ? -250 : 0;
      console.log(offset);
      gsap.to(window, {
        duration: 1.25,
        // scrollTo: location,
        scrollTo: { y: location, offsetY: offset },
        ease: 'sine.inOut',
      });
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Herr+Von+Muellerhoff&display=swap');

:root {
  /* --main-orange: #d3630d; */
  --main-orange: #ff751f;
  --main-red: #77070b;
  /* --main-red: #be2127; */
  /* --main-yellow: #f7cb47; */
  --main-yellow: #c6bea2;
  --off-black: #010101;
  --mauve: #7a5c58;
  --dim-gray: #767162;
  font-family: 'RL Madena';
  font-family: 'RL Madena';
  font-size: calc(0.35rem + 0.35vw);
  font-weight: 100;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: black;
  overflow-x: clip;
  cursor: none;
}

img {
  border-style: none;
}

button,
select {
  text-transform: none;
}

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button;
}

button::-moz-focus-inner,
[type='button']::-moz-focus-inner,
[type='reset']::-moz-focus-inner,
[type='submit']::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

::selection {
  background: #ff751f;
  color: black;
}

p {
  margin: 0;
}

h2,
h3,
h4,
h5 {
  margin: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
}

.section-heading span:first-of-type {
  font-size: 3rem;
  font-family: 'Herr Von Muellerhoff', cursive;
}

.section-heading {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: start;
}

.section-heading span:nth-of-type(2) {
  margin-top: -1.5rem;
  padding-left: 1.5rem;
  font-size: 4rem;
  font-style: italic;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.background-wrapper {
  background-image: url('../src/assets/optimized-imgs/arabesque_invert-70.png');
  background-repeat: repeat;
}

.overflow {
  overflow: clip;
}

.scroller {
  display: hidden;
}

@media (width <= 950px) {
  body {
    cursor: auto;
  }
  .section-heading span:first-of-type {
    font-size: 4rem;
  }
  .section-heading span:nth-of-type(2) {
    font-size: 5rem;
  }
}
</style>

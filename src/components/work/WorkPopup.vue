<template>
  <div class="popup-wrapper" :visible="isVisible">
    <div id="popup">
      <h2 class="section-heading">
        <span>More About</span>
        <span>{{ project.name }}</span>
      </h2>
      <div class="popup-content">
        <img :src="project.imgSrc" alt="" />
      </div>
    </div>
    <div
      class="background-blur"
      clickable
      @click="this.$emit('close-popup')"
    ></div>
  </div>
</template>

<script>
import { gsap } from 'gsap';

export default {
  props: ['project', 'isVisible'],
  data() {
    return {};
  },
  methods: {
    disableScroll() {
      let scrollTop = window.scrollY;
      window.onscroll = function () {
        console.log('i scroll', scrollTop);
        gsap.to(window, {
          duration: 0,
          scrollTo: { y: scrollTop },
          ease: 'sine.inOut',
        });
      };
    },
    enableScroll() {
      window.onscroll = function () {};
    },
  },
  watch: {
    isVisible(isVis) {
      if (isVis) {
        this.disableScroll();
      } else {
        this.enableScroll();
      }
    },
  },
};
</script>

<style scoped>
.popup-wrapper {
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  transform: translateX(-100%);
  transition: transform ease 0.35s;
}

#popup {
  height: 100%;
  width: 45vw;
  background-color: black;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.popup-wrapper[visible='true'] {
  transform: translateX(0%);
}

.section-heading {
  position: relative;
  margin: 4rem 0;
}

.popup-content {
  width: 100%;
}

.background-blur {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(10px);
}

img {
  width: 100%;
}

@media (width <= 950px) {
  #popup {
    width: 90vw;
  }
}
</style>

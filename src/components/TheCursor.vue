<template>
  <div class="cursor-box" :class="{ 'box-hover': focused }" ref="cursorBox">
    <img class="box-image" :src="workSource" ref="boxImg" />
  </div>
  <div class="cursor" :class="{ 'cursor-hover': focused }" ref="cursor">
    <img
      src="../assets/optimized-imgs/zl-icon-white.svg"
      class="cursor-inner"
      alt=""
    />
  </div>
</template>

<script>
import { gsap } from 'gsap';

export default {
  props: ['mousePos', 'focused', 'workSource', 'showImage'],
  data() {
    return {
      cursorTransform: '',
      boxTransform: '',
      imgTl: null,
    };
  },
  watch: {
    mousePos() {
      this.animateCursor(this.mousePos[0], this.mousePos[1]);
    },
    focused(focus) {
      if (focus) {
        gsap.to(this.$refs.cursorBox, {
          left: -25,
          top: -25,
          duration: 0.3,
        });
      } else {
        gsap.to(this.$refs.cursorBox, {
          left: 0,
          top: 0,
          duration: 0.3,
        });
      }
    },
    showImage() {
      if (this.showImage) {
        setTimeout(() => {
          this.imgTl.play();
        }, 5);
      } else {
        setTimeout(() => {
          this.imgTl.reverse();
        }, 5);
      }
    },
  },
  methods: {
    animateCursor(clientX, clientY) {
      const x = clientX,
        y = clientY;
      // this.cursorTransform = `translate(calc(${x}px - 50%), calc(${y}px - 50%))`;

      const cursorFrames = {
        transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
      };

      this.$refs.cursor.animate(cursorFrames, {
        duration: 0,
        delay: 0,
        fill: 'forwards',
        easing: 'linear',
      });

      const boxFrames = {
        transform: `translate(${x}px, ${y}px)`,
      };
      this.$refs.cursorBox.animate(boxFrames, {
        duration: 300,
        delay: 0,
        fill: 'forwards',
        easing: 'linear',
      });
    },
  },
  mounted() {
    this.imgTl = gsap
      .timeline({
        paused: true,
      })
      .to(this.$refs.cursorBox, {
        width: '500px',
        duration: 0.1,
        ease: 'ease',
      })
      .to(this.$refs.cursorBox, {
        gridTemplateRows: '1fr',
        duration: 0.2,
        ease: 'ease-out',
        '--overlay-opacity': 1,
      })
      .to(this.$refs.boxImg, {
        opacity: 0.8,
        duration: 0.15,
        filter: 'invert(0%)',
      });
  },
};
</script>

<style scoped>
.cursor {
  position: fixed;
  width: 35px;
  z-index: 50;
  backdrop-filter: invert();
  -webkit-backdrop-filter: invert();
  transition: backdrop-filter 0.3s ease;
  pointer-events: none;
  top: 0;
}

.cursor-inner {
  width: 100%;
  pointer-events: none;
  z-index: 50;
  filter: invert();
  transition: transform 0.3s ease;
}

.cursor-box {
  width: 50px;
  min-height: 50px;
  position: fixed;
  background-color: var(--main-orange);
  border: 2px solid var(--main-orange);
  top: 0;
  left: 0;
  backdrop-filter: invert(0%);
  -webkit-backdrop-filter: invert(0%);
  z-index: 50;
  pointer-events: none;
  display: grid;
  grid-template-rows: 0fr;
  --overlay-opacity: 0;
}

.cursor-box::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: 2;
  opacity: var(--overlay-opacity);
}

.cursor-hover {
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
}

.cursor-hover .cursor-inner {
  transform: scale(0.65);
}

.box-hover {
  border-color: black;
  background-color: rgba(0, 0, 0, 0);
  backdrop-filter: invert(100%);
  -webkit-backdrop-filter: invert(100%);
}

.box-image {
  width: 100%;
  overflow: hidden;
  opacity: 0;
  filter: invert(100%);
  -webkit-filter: invert(100%);
  position: relative;
  z-index: 3;
}

@media (width <= 950px) {
  .cursor {
    display: none;
  }

  .cursor-box {
    display: none;
  }
}
</style>

<template>
  <img
    :class="{ expanded: imgIsExpanded }"
    :src="src"
    alt="wavy paint"
    ref="img"
    @click="toggleExpand"
  />
</template>

<script>
export default {
  props: ['src', 'mousePos', 'rotation'],
  data() {
    return {
      imgTransform: null,
      rX: null,
      rY: null,
      rotate: this.rotation ? this.rotation : '-8deg',
      translateX: '0%',
      translateY: '0%',
      imgIsExpanded: false,
      perspective: 600,
    };
  },
  watch: {
    mousePos() {
      this.controlImageShift(this.mousePos[0], this.mousePos[1]);
    },
  },
  methods: {
    controlImageShift(x, y) {
      const image = this.$refs.img;
      const rect = image.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      let xDiff = x - centerX;
      let yDiff = y - centerY;

      let xRotation = 3 * Math.pow(Math.atan(xDiff / 100), 3);
      let yRotation = 3 * Math.pow(Math.atan(yDiff / 100), 3);

      const MAX_ROTATION = 1;
      this.rX = (MAX_ROTATION / 2 - yRotation * MAX_ROTATION).toFixed(2);
      this.rY = (xRotation * MAX_ROTATION - MAX_ROTATION / 2).toFixed(2);
      this.imgTransform = `perspective(${this.perspective}px) rotateX(${this.rX}deg) rotateY(${this.rY}deg) rotate(${this.rotate}) translate(${this.translateX}, ${this.translateY})`;
    },
    toggleExpand() {
      if (!this.imgIsExpanded) {
        this.rotate = '0deg';
        this.perspective = '2000';
      } else {
        this.rotate = '-8deg';
        this.translateX = '0%';
        this.translateY = '0%';
        this.perspective = '600';
      }
      this.imgIsExpanded = !this.imgIsExpanded;
      this.controlImageShift(this.mousePos[0], this.mousePos[1]);
    },
  },
};
</script>

<style scoped>
img {
  width: 25rem;
  height: auto;
  max-height: 95vh;
  max-height: 95svh;
  object-fit: contain;
  transform: v-bind(imgTransform);
  filter: saturate(1.1);
  position: absolute;
  left: 5rem;
  top: 5rem;
  transition: transform 0.25s ease-out,
    left 0.5s cubic-bezier(0.65, 0.13, 0.35, 1),
    top 0.5s cubic-bezier(0.65, 0.13, 0.35, 1),
    width 0.5s cubic-bezier(0.65, 0.13, 0.35, 1);
  z-index: 10;
  cursor: pointer;
}
.expanded {
  width: 58rem;
  height: auto;
  filter: saturate(1.1);
  position: absolute;
  left: calc(50% - 58rem / 2);
  top: 1%;
}
</style>

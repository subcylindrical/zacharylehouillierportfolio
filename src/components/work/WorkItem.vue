<template>
  <div
    :class="[{ center: isCenter }, { visible: isFirst || isThird || isCenter }]"
    :clickable="isCenter ? true : null"
  >
    <p id="proj-platform">01^{{ project.plat }}</p>
    <p id="proj-name">{{ project.name }}</p>
    <p id="proj-description">02^{{ project.desc }}</p>
  </div>
</template>

<script>
export default {
  props: ['project', 'isCenter', 'isFirst', 'isThird'],
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
div {
  width: 60vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  border-top: 0.2rem solid white;
  border-bottom: 0.2rem solid white;
  margin: -0.08rem 0;
  padding: 2rem 0;
  transition: width 0.5s ease, opacity 0.25s ease-out;
  z-index: 2;
  opacity: 0;
}

div.visible {
  opacity: 1;
}

#proj-name {
  font-size: 1.5rem;
  font-style: italic;
  /* transition: font-size 0.5s ease; */
  transition: transform 0.5s ease, margin 0.5s ease;
  backface-visibility: hidden;
  transform: translateZ(0);
  -webkit-font-smoothing: subpixel-antialiased;
}

#proj-platform {
  position: absolute;
  top: 0;
  right: 0;
}

#proj-description {
  position: absolute;
  bottom: 0;
  left: 0;
}

p:nth-of-type(1),
p:nth-of-type(3) {
  font-family: 'Pitagon Sans Mono';
  font-size: 1.25rem;
  margin: 2px 0;
  opacity: 0;
  transition: opacity 0.5s ease;
}

.center {
  width: 70vw;
}

.center #proj-name {
  /* font-size: 2.9rem; */
  transform: scale(1.9);
  margin: 1.2rem 0;
  pointer-events: none;
}

.center p:nth-of-type(1),
.center p:nth-of-type(3) {
  opacity: 1;
}

div:last-of-type {
  z-index: 1;
}

@media (width <= 950px) {
  div {
    width: 75vw;
  }
  .center {
    width: 85vw;
  }
}
</style>

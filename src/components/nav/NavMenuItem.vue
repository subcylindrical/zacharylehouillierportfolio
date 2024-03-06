<template>
  <li :class="current ? 'current' : ''">{{ name }}</li>
</template>

<script>
export default {
  props: {
    name: String,
    current: Boolean,
    location: String,
  },
};
</script>

<style scoped>
li {
  list-style: none;
  padding: 0.5rem 2.4rem;
  border-right: 1px solid white;
  position: relative;
  text-transform: uppercase;
  z-index: 5;
  /* cursor: pointer; */
}

li::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  background: var(--main-orange);
  width: 100%;
  height: 0;
  z-index: -1;
  transition: height 0.15s ease-out;
}

li:hover::after {
  height: 100%;
}

li:last-of-type {
  border: none;
}

li::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--mauve);
  width: 100%;
  height: 0%;
  z-index: -1;
  transition: height 0.15s ease-out;
}
.current::before {
  height: 100%;
}
</style>

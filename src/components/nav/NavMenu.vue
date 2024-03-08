<template>
  <div id="nav">
    <ul>
      <NavMenuItem
        clickable
        v-for="navItem in navItems"
        :name="navItem.name"
        :current="navItem.current"
        :key="navItem.name"
        @click="scrollToSection(navItem.location)"
      />
    </ul>
  </div>
</template>
<script>
import NavMenuItem from './NavMenuItem';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default {
  components: { NavMenuItem },
  inject: ['scrollToSection'],
  data() {
    return {
      tl: null,
      navItems: [
        { name: 'Home', current: true, location: 'homeSection' },
        { name: 'Work', current: false, location: 'workSection' },
        { name: 'Skills', current: false, location: 'skillsSection' },
        { name: 'About', current: false, location: 'aboutSection' },
        { name: 'Contact', current: false, location: 'contactSection' },
      ],
    };
  },
};
</script>

<style scoped>
#nav {
  display: inline-block;
  background-color: black;
  border: 1px solid white;
  font-size: 2.3rem;
  letter-spacing: normal;
  position: absolute;
  left: -40%;
  bottom: 12%;
}

ul {
  all: unset;
  display: flex;
  flex-direction: row;
}

@media (width <= 950px) {
  #nav {
    font-size: 2.3rem;
    display: none;
    position: absolute;
    left: 50%;
    bottom: 12%;
    transform: translate(-50%);
    width: 100vw;
  }
  li {
    flex-grow: 1;
    text-align: center;
    padding: 2.4rem 0;
  }
}
</style>

<template>
  <div id="nav">
    <ul>
      <NavMenuItem
        clickable
        v-for="navItem in navItems"
        :name="navItem.name"
        :current="navItem.current"
        :key="navItem.name"
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
  data() {
    return {
      tl: null,
      tl2: null,
      navItems: [
        { name: 'Home', current: true, location: '' },
        { name: 'Work', current: false, location: '' },
        { name: 'Skills', current: false, location: '' },
        { name: 'About', current: false, location: '' },
        { name: 'Contact', current: false, location: '' },
      ],
    };
  },
  mounted() {
    this.tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: '#nav',
        start: 'top 10px',
        end: 'top 10px',
        markers: true,
        onEnterBack: () => {
          console.log('back');
          gsap.to('#nav', {
            position: 'absolute',
            top: '38.8rem',
            duration: 0,
          });
        },
        onEnter: () => {
          gsap.to('#nav', {
            position: 'fixed',
            top: '10px',
            duration: 0,
          });
        },
      },
    });
    //   .to('#nav', {
    //     position: 'fixed',
    //     top: '10px',
    //     duration: 0,
    //   });
    // this.tl2 = gsap
    //   .timeline({
    //     scrollTrigger: {
    //       trigger: '#nav',
    //       start: 'top 38.8%',
    //       markers: true,
    //     },
    //   })
    //   .to('#nav', {
    //     position: 'absolute',
    //     top: '38.8rem',
    //     duration: 0,
    //   });
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
  right: 7.1rem;
  top: 38.8rem;
  z-index: 50;
}

ul {
  all: unset;
  display: flex;
  flex-direction: row;
}
</style>

<template>
  <section>
    <div class="sticky-wrapper" ref="section">
      <div class="work-section-container">
        <h2 class="section-heading">
          <span>Check Out</span>
          <span>My work</span>
        </h2>
        <WorkContainer :projects="projects" :section="$refs.section" />
      </div>
      <div class="earth-satellite-container">
        <img :src="earthBackground" class="earth-background" />
        <img class="satellite" :src="satellite" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
import WorkContainer from './WorkContainer.vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default {
  components: { WorkContainer },
  data() {
    return {
      earthBackground: require('../../../images/earth3.png'),
      satellite: require('../../../images/satellite-enhanced-porthole.png'),
      timeline: null,
      timeline2: null,
      projects: [
        // { name: '↓', plat: '', desc: '' },
        {
          name: 'The Rise Design',
          plat: 'Webflow',
          desc: 'ui/ux design | web development',
        },
        {
          name: 'Front Porch Coffee Roasters',
          plat: 'Webflow',
          desc: 'ui/ux design | web development',
        },
        {
          name: 'Hawthorne Landscaping',
          plat: 'Webflow',
          desc: 'ui/ux design | web development',
        },
        {
          name: 'Ariel Taylor Art Portfolio',
          plat: 'Webflow',
          desc: 'ui/ux design | web development',
        },
        {
          name: 'JSLAMMED',
          plat: 'Webflow',
          desc: 'ui/ux design | web development',
        },
        {
          name: 'Mindful Moves Mara',
          plat: 'Webflow',
          desc: 'ui/ux design | web development',
        },
        // { name: '↑', plat: '', desc: '' },
      ],
    };
  },

  mounted() {
    gsap.set('.satellite', {
      x: '-20%',
      y: '-180%',
      scale: 0.45,
      rotate: '30deg',
    });

    this.timeline = gsap
      .timeline({
        scrollTrigger: {
          trigger: '.earth-satellite-container',
          start: '58.5% center',
          endTrigger: '.skills-wrapper',
          end: 'bottom top',
          // end: '+=350%',
          scrub: true,
          markers: false,
        },
      })
      .to('.earth-background', {
        y: '75%',
        scale: 1.2,
        ease: 'none',
      })
      .to(
        '.work-section-container',
        {
          opacity: 0,
          x: '-50%',
          y: '-70%',
          scale: 2,
          filter: 'blur(30px)',
          ease: 'none',
        },
        '<+=10%'
      )
      .to(
        '.satellite',
        {
          x: '-50%',
          y: '-50%',
          scale: 70,
          rotate: '-15deg',
          // ease: 'CustomEase.create("custom", "M0,0 C0.17,0 0.33,0.067 0.364,0.097 0.438,0.162 0.54,0.31 0.555,0.51 0.569,0.716 0.628,0.826 0.665,0.862 0.69,0.887 0.794,1 1,1 ")',
          ease: 'circ.in',
        },
        '<-=10%'
      )
      .to(
        '.satellite',
        {
          scale: 200,
          ease: 'power2.out',
        },
        '<95%'
      );
    this.timeline2 = gsap
      .timeline({
        scrollTrigger: {
          trigger: '.skills-wrapper',
          scrub: true,
          start: 'top top',
          end: '+=200px',
          markers: true,
        },
      })
      .to('.sticky-wrapper', {
        opacity: 0,
        ease: 'none',
      });
  },
};
</script>

<style scoped>
section {
  min-height: 375vh;
  position: relative;
  z-index: 2;
  margin-bottom: -70vh;
}

.sticky-wrapper {
  position: sticky;
  top: 0;
  height: 250vh;
  display: flex;
  flex-direction: column;
  background-color: black;
}

.work-section-container {
  min-height: 70vh;
  height: 70vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: clip;
}

.earth-satellite-container {
  flex-grow: 1;
  position: relative;
  overflow-x: clip;
  opacity: 1;
}

.satellite {
  position: absolute;
  width: 65rem;
  top: 50%;
  left: 50%;
}

.earth-background {
  position: absolute;
  width: 110%;
  height: auto;
  top: -10%;
  left: 50%;
  transform: translate(-50%, -25%);
  margin-top: 200px;
  z-index: -5;
}

h2 {
  position: relative;
  padding: 10% 0 0 30%;
  z-index: 1;
}
</style>

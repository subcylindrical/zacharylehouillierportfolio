<template>
  <section class="work-section">
    <WorkPopup
      :project="openProject"
      :isVisible="popupOpen"
      @closePopup="this.popupOpen = false"
    />
    <div class="sticky-wrapper" ref="section">
      <div class="work-section-container">
        <h2 class="section-heading">
          <span>Check Out</span>
          <span>My work</span>
        </h2>
        <WorkContainer
          :projects="projects"
          :section="$refs.section"
          @show-popup="showImageToggle"
        />
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
import WorkPopup from './WorkPopup.vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default {
  components: { WorkContainer, WorkPopup },
  data() {
    return {
      isShowingImage: false,
      earthBackground: require('../../assets/optimized-imgs/earth-large.webp'),
      satellite: require('../../assets/optimized-imgs/satellite-enhanced-porthole.webp'),
      timeline: null,
      timeline2: null,
      imgTl: null,
      projects: [
        {
          name: 'The Rise Design',
          plat: 'Webflow',
          desc: 'ui/ux design | web development',
          imgSrc: require('../../../src/assets/optimized-imgs/work/full-page/ariel.webp'),
        },
        {
          name: 'Front Porch Coffee Roasters',
          plat: 'Webflow',
          desc: 'ui/ux design | web development',
          imgSrc: require('../../../src/assets/optimized-imgs/work/full-page/porch.webp'),
        },
        {
          name: 'Hawthorne Landscaping',
          plat: 'Webflow',
          desc: 'ui/ux design | web development',
          imgSrc: require('../../../src/assets/optimized-imgs/work/full-page/hawthorne.webp'),
        },
        {
          name: 'Ariel Taylor Art Portfolio',
          plat: 'Webflow',
          desc: 'ui/ux design | web development',
          imgSrc: require('../../../src/assets/optimized-imgs/work/full-page/ariel.webp'),
        },
        {
          name: 'JSLAMMED',
          plat: 'Webflow',
          desc: 'ui/ux design | web development',
          imgSrc: require('../../../src/assets/optimized-imgs/work/full-page/j.webp'),
        },
        {
          name: 'Mindful Moves Mara',
          plat: 'Webflow',
          desc: 'ui/ux design | web development',
          imgSrc: require('../../../src/assets/optimized-imgs/work/full-page/mara.webp'),
        },
        // { name: '↑', plat: '', desc: '' },
      ],
      openProject: 'J SLAMMED',
      popupOpen: false,
    };
  },
  methods: {
    showImageToggle(target) {
      this.openProject = this.projects[target];
      this.popupOpen = true;
    },
  },

  mounted() {
    gsap.set('.satellite', {
      x: '-20%',
      y: '-60%',
      scale: 0.45,
      rotate: '30deg',
    });

    this.timeline = gsap
      .timeline({
        scrollTrigger: {
          trigger: '.work-section',
          start: '50% 50%',
          end: 'bottom top',
          scrub: true,
          markers: false,
        },
      })
      .to('.earth-background', {
        y: '-15%',
        scale: 1.2,
        ease: 'none',
      })
      .to(
        '.work-section-container',
        {
          opacity: 0,
          x: '-25%',
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
          markers: false,
        },
      })
      .to('.sticky-wrapper', {
        opacity: 0,
        ease: 'none',
      });
    //Setting isShowingImage
    this.imgTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.work-section',
        scrub: true,
        start: 'top top',
        end: '50% 50%',
        markers: false,
        onToggle: () => {
          console.log('toggle');
          this.isShowingImage = !this.isShowingImage;
        },
      },
    });
  },
};
</script>

<style scoped>
section {
  min-height: 475vh;
  min-height: 475lvh;
  position: relative;
  z-index: 2;
  margin-bottom: -70vh;
  margin-bottom: -70lvh;
}

.sticky-wrapper {
  position: sticky;
  top: 0;
  height: 100vh;
  height: 100lvh;
  display: flex;
  flex-direction: column;
  background-color: black;
}

.work-section-container {
  min-height: 70vh;
  min-height: 70lvh;
  height: 70%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: clip;
  z-index: 55;
}

.earth-satellite-container {
  height: 30%;
  position: relative;
  overflow-x: clip;
  opacity: 1;
  pointer-events: none;
}

.satellite {
  position: absolute;
  width: 65rem;
  top: 50%;
  left: 50%;
  z-index: 65;
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

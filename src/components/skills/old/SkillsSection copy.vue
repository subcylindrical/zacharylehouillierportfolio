<template>
  <section ref="sectionTrigger">
    <div class="skills-wrapper">
      <!-- <div class="skills-banner">
        <div v-for="imgRef in imgRefs" class="banner-section" :key="imgRef">
          <span class="skill-header">Skills</span>
          <img :src="imgRef" alt="" />
        </div>
      </div> -->
      <div class="slider-wrapper">
        <div class="skill-slider">
          <div class="track" ref="track">
            <SkillUnit
              v-for="skill in skills"
              :skillCategory="skill.name"
              :abilities="skill.abilities"
              :key="skill.name"
              :clientX="clientX"
              :clientY="clientY"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SkillUnit from './SkillUnit.vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default {
  components: { SkillUnit },
  provide() {
    return {
      timeline: this.timeline,
    };
  },
  props: ['clientX', 'clientY'],
  data() {
    return {
      timeline: null,
      imgRefs: [
        require('/images/silhouettes/cropped/frame-17.png'),
        require('/images/silhouettes/cropped/frame-16.png'),
        require('/images/silhouettes/cropped/frame-15.png'),
        require('/images/silhouettes/cropped/frame-14.png'),
        require('/images/silhouettes/cropped/frame-13.png'),
        require('/images/silhouettes/cropped/frame-12.png'),
        require('/images/silhouettes/cropped/frame-12.png'),
        require('/images/silhouettes/cropped/frame-11.png'),
        require('/images/silhouettes/cropped/frame-10.png'),
        require('/images/silhouettes/cropped/frame-9.png'),
        require('/images/silhouettes/cropped/frame-8.png'),
        require('/images/silhouettes/cropped/frame-7.png'),
        require('/images/silhouettes/cropped/frame-6.png'),
        require('/images/silhouettes/cropped/frame-5.png'),
        require('/images/silhouettes/cropped/frame-4.png'),
        require('/images/silhouettes/cropped/frame-3.png'),
        require('/images/silhouettes/cropped/frame-2.png'),
        require('/images/silhouettes/cropped/frame-1.png'),
      ],
      skills: [
        {
          name: '01.Code',
          abilities: [
            'html',
            'css',
            'sass',
            'javascript',
            'js libraries',
            'vue',
          ],
        },
        {
          name: '02.Design',
          abilities: ['photoshop', 'figma', 'mockups', 'wireframes'],
        },
        {
          name: '03.Build',
          abilities: ['webflow', 'vue', 'git', 'github'],
        },
      ],
    };
  },
  mounted() {
    this.timeline = gsap
      .timeline({
        scrollTrigger: {
          trigger: this.$refs.sectionTrigger,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
          markers: false,
        },
      })
      .to('.skill-slider', {
        xPercent: -100,
        ease: 'none',
      });
    const trackItems = [...this.$refs.track.children];
    trackItems.forEach((element) => {
      gsap
        .timeline({
          scrollTrigger: {
            stagger: 1,
            trigger: element,
            start: 'left right',
            end: 'right left',
            scrub: true,
            markers: false,
            containerAnimation: this.timeline,
          },
        })
        .fromTo(
          element.children[0],
          { xPercent: 5 },
          {
            xPercent: -5,
            ease: 'none',
          }
        );
    });
  },
};
</script>

<style scoped>
section {
  height: 300vh;
  background-color: var(--off-black);
  flex-direction: column;
  z-index: 1;
}

.skills-wrapper {
  background-color: var(--off-black);
  position: relative;
  z-index: 0;
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
}

.skills-banner {
  height: 10rem;
  background-color: var(--main-red);
  font-size: 6rem;
  text-transform: uppercase;
  font-style: italic;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  overflow-x: hidden;
  letter-spacing: 2px;
}

.slider-wrapper {
  display: flex;
  overflow: hidden;
  flex-grow: 1;
}

.skill-slider {
  margin-left: 40vw;
  flex-grow: 0;
  display: flex;
  flex-direction: row;
  align-items: start;
}

.track {
  margin-right: -75vw;
  display: flex;
  flex-direction: row;
  align-items: start;
  height: 100%;
  position: relative;
  padding-right: 20vw;
}

.banner-section {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.skills-banner img {
  height: 100%;
  padding: 0 50px;
}

.skill-header {
  max-height: 100%;
  margin: 0px;
  line-height: 1.3;
}
</style>

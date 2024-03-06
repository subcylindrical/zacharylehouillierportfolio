<template>
  <div class="work-container" ref="container">
    <!-- <div class="background"></div> -->
    <transition-group name="work-item">
      <WorkItem
        class="work-item"
        v-for="(name, index) in computedArray"
        :project="name"
        :key="name"
        :isCenter="index === 1"
      />
    </transition-group>
  </div>
</template>

<script>
import WorkItem from './WorkItem.vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default {
  props: ['projects', 'section'],
  components: { WorkItem },
  data() {
    return {
      scrollProgress: 0,
      displayIndex: 0, //center index
      n: this.projects.length - 3,
      computedArray: this.projects.slice(this.displayIndex, 3),
    };
  },
  computed: {},
  methods: {},
  watch: {
    scrollProgress(oldScroll) {
      if (this.displayIndex != Math.ceil(oldScroll * this.n)) {
        this.displayIndex = Math.ceil(oldScroll * this.n);
      }
    },
    displayIndex(newIndex, oldIndex) {
      const N_A_I = 2;
      if (newIndex >= this.projects.length) return;
      if (newIndex > oldIndex) {
        if (this.projects[newIndex + N_A_I]) {
          this.computedArray.push(this.projects[newIndex + N_A_I]);
          this.computedArray.shift();
        }
      } else {
        if (this.projects[newIndex]) {
          this.computedArray.unshift(this.projects[newIndex]);
          this.computedArray.pop();
        }
      }
      this.$refs.container.childNodes[3].classList.add('center');
      this.$refs.container.childNodes[2].classList.remove('center');
    },
  },
  mounted() {
    const workTrigger = this.$parent.$refs.section;

    gsap.to('.work-item', {
      ease: 'none',
      scrollTrigger: {
        trigger: workTrigger,
        start: '10% top',
        end: '90% bottom',
        scrub: true,
        markers: false,
        onUpdate: (self) => {
          this.scrollProgress = self.progress;
        },
      },
    });
  },
};
</script>

<style scoped>
.work-container {
  width: 100%;
  flex-grow: 1;
  bottom: 0%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

.work-item-leave-from {
  opacity: 1;
}
.work-item-enter-to {
  opacity: 1;
  /* transform: translateY(0px); */
}

.work-item-enter-active {
  transition: all 0.75s ease;
  z-index: -1;
}

.work-item-leave-active {
  /* transition: all 0s ease; */
  position: absolute;
  z-index: -1;
}
.work-item-leave-to {
  opacity: 0;
  /* transform: rotateX(90deg); */
  transform: scale(0.1);
  /* top: 0; */
}
.work-item-enter-from {
  opacity: 0;
  /* transform: translateY(-40px); */
  /* transform: scaleY(0.1); */
  transform: rotateX(90deg);
}

.work-item-move {
  transition: transform 0.75s ease, opacity 0.75s ease, width 0.75s ease,
    top 0.75s ease;
}
</style>

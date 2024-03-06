<template>
  <div class="work-items" ref="workItems">
    <WorkItem
      class="work-item"
      v-for="(name, index) in projects"
      :project="name"
      :key="name"
      :isFirst="index === displayIndex - 1"
      :isCenter="index === displayIndex"
      :isThird="index === displayIndex + 1"
    />
  </div>
</template>

<script>
import WorkItem from './WorkItem.vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default {
  props: ['projects', 'section'],
  emits: ['show-image'],
  components: { WorkItem },
  data() {
    return {
      workTl: null,
      workItemsTl: null,
      scrollProgress: 0,
      displayIndex: 0, //center index
      n: this.projects.length - 1,
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
    displayIndex(index) {
      this.$emit('show-image', index);
    },
  },
  mounted() {
    this.$emit('show-image', this.displayIndex);
    this.workTl = gsap
      .timeline({
        scrollTrigger: {
          trigger: '.work-section',
          start: '5% top',
          end: '50% 50%',
          scrub: 1,
          markers: false,
          onUpdate: (self) => {
            this.scrollProgress = self.progress;
          },
        },
      })
      .to('.work-items', {
        ease: 'none',
        y: '-85%',
      });
  },
};
</script>

<style scoped>
.work-items {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 60%;
}
</style>

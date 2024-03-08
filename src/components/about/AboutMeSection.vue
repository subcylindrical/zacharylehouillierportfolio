<template>
  <section ref="about">
    <div class="heading-wrapper" ref="aboutHeading">
      <h2 class="section-heading">
        <span>More</span>
        <span>About Me</span>
      </h2>
    </div>
    <div class="sticky-about">
      <div class="about-paragraph-container">
        <p class="about-paragraph">
          I’m Zach, a highly motivated web developer, designer, and problem
          solver, whose passion lies in creating stunning and functional
          websites. I build sites with a keen eye for design and strong
          attention to detail.
        </p>
      </div>
    </div>
    <div class="contact-text-wrapper">
      <div class="contact-info">
        <p clickable class="phone-number" @click="copyToClipboard">
          831-331-1201
        </p>
        <p clickable class="email" @click="copyToClipboard">
          zacharylehouillier@gmail.com
        </p>
      </div>
      <p class="contact-text">
        Let's Get<br />
        In Touch
      </p>
    </div>
    <div class="section-overlay"></div>
  </section>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default {
  data() {
    return {
      aboutBackground: require('../../assets/optimized-imgs/about-background.webp'),
      tl: null,
    };
  },
  methods: {
    copyToClipboard(e) {
      navigator.clipboard.writeText(e.target.textContent);
      // console.log(e.target);
      // e.target.focus();
      // document.execCommand('copy');
    },
  },
  mounted() {
    console.log('mount');
    this.tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: this.$refs.about,
          start: 'top top',
          end: '85% bottom',
          scrub: 3,
          markers: false,
        },
      })
      .to('.about-paragraph-container', {
        xPercent: '-100',
        ease: 'none',
      });
    gsap.to(this.$refs.aboutHeading, {
      scrollTrigger: {
        trigger: this.$refs.about,
        start: '75% bottom',
        end: '85% bottom',
        scrub: 3,
        markers: false,
      },
      opacity: 0,
      ease: 'circ.inOut',
    });
    gsap.from('.contact-text-wrapper', {
      scrollTrigger: {
        trigger: this.$refs.about,
        start: '95% bottom',
        end: '100% bottom',
        scrub: 2,
        markers: false,
      },
      y: '50px',
      ease: 'none',
    });
    gsap.from('.about-paragraph', {
      scrollTrigger: {
        trigger: this.$refs.about,
        start: 'top 15%',
        end: 'top top',
        scrub: 1,
        markers: false,
      },
      opacity: 0,
      ease: 'none',
    });
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Akshar&display=swap');
section {
  position: relative;
  margin: 0;
  padding: 0;
  min-height: 600px;
  height: 400vh;
  height: 400lvh;
  background-color: paleturquoise;
  background-image: url('../../assets/optimized-imgs/about-background.webp');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
  overflow-x: clip;
}

.section-overlay {
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  pointer-events: none;
  background-image: url('../../assets/optimized-imgs/sky-overlay.webp');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
}

.sticky-about {
  display: flex;
  position: sticky;
  top: 0%;
  padding-top: 50vh;
  padding-top: 50lvh;
}

.heading-wrapper {
  position: sticky;
  top: 0px;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contact-text-wrapper {
  position: absolute;
  bottom: 2%;
  width: 100%;
}

.contact-text {
  font-family: 'Akshar', sans-serif;
  color: black;
  font-size: 25rem;
  text-align: center;
  display: block;
  width: 100%;
  text-transform: uppercase;
  pointer-events: none;
}

.about-paragraph-container {
  font-size: 3rem;
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.about-paragraph {
  white-space: nowrap;
  /* margin-right: -100vw; */
  padding-left: 50vw;
  padding-right: 50px;
}

.contact-info {
  position: absolute;
  bottom: 50%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.contact-info p {
  font-size: 2rem;
  letter-spacing: 10px;
  margin: 0 2rem;
  padding: 0 1rem;
  text-decoration: none;
}

.contact-info p:hover {
  background-color: black;
}

.contact-info p:active {
  /* background-color: red; */
  filter: invert(1);
}

@media (width <= 950px) {
  .contact-text {
    font-size: 20rem;
  }
}
@media (width <= 840px) {
  .contact-info p {
    font-size: 1.75rem;
    letter-spacing: 5px;
  }
  .contact-info {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
@media (width <= 550px) {
  .contact-text {
    font-size: 15rem;
  }
  .contact-info {
    bottom: 110%;
  }
}
@media (width <= 360px) {
  .contact-text {
    font-size: 12rem;
  }
  .contact-info p {
    font-size: 1.5rem;
    letter-spacing: 2px;
  }
}
</style>

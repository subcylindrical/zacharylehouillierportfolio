<template>
  <p>
    {{ p1 }}
    <i> {{ p2 }}</i>
    {{ p3 }}
  </p>
</template>

<script>
export default {
  data() {
    return {
      p1: `Check out my work `,
      p2: `below.`,
      p3: `To do so, please scroll your mouse wheel 
      down if you have native windows scrolling, 
      not the ridiculous “natural” mac scroll which so 
      many of us know all too much about. Anyway, if you have a 
      track pad, you probably want to swipe your fingers in an “upward” 
      direction in order to navigate “down” the page. haha. Anyway, 
      see you there 😎`,
    };
  },
};
</script>

<style scoped>
p {
  font-size: 2.4rem;
  max-width: 556px;
  max-width: 47rem;
  position: absolute;
  top: max(58%, 500px);
  left: 20%;
}

@media (width <= 950px) {
  p {
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: justify;
    font-size: 3rem;
    width: 90vw;
  }
}
</style>

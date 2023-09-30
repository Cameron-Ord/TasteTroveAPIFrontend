<template>
  <span class="footerSpan">
    <nav class="footerNav">
      <p class="footerText">placeholder</p>
    </nav>
    <div class="credsFooter">
      <h3 class="footerText">2023 - Cameron Ord</h3>
      <h3 class="footerText">TasteTroveAPI</h3>
    </div>
  </span>
</template>

<script>
export default {
  components: {},

  data() {
    return {}
  },

  methods: {},
  computed: {},
  created() {},
  mounted() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {}
}
</script>

<style lang="scss" scoped>
.footerSpan{
  display: grid;
  align-items: center;
  grid-template-rows: 1fr 1fr;

  >.credsFooter{
    display: grid;
    grid-auto-flow: row;
    row-gap: 25px;
    justify-items: center;
    
  }
  >.footerNav{
    display: grid;
    justify-items: center;
    
    >h3{
      font-size: clamp(0.9em, 1.5vw, 1.25em);
    }
    >h3{
      font-size: clamp(0.9em, 1.5vw, 1.25em);
    }
  }
}
</style>

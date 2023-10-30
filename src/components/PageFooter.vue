<template>
  <span class="footerSpan">
    <div class="credsFooter">
      <h4 class="footerText">2023 - Cameron Ord</h4>
      <h4 class="footerText">TasteTroveAPI</h4>
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
.footerSpan {
  display: grid;
  align-items: center;

  > .credsFooter {
    display: grid;
    grid-auto-flow: row;
    row-gap: 25px;
    justify-items: start;
    text-align: start;
    margin-left: 25px;
  }
  > .footerNav {
    display: grid;
    justify-items: start;
    text-align: start;
    margin-left: 25px;
    > h4 {
      font-size: clamp(0.9em, 1.5vw, 1.25em);
    }
    > h4 {
      font-size: clamp(0.9em, 1.5vw, 1.25em);
    }
  }
}
</style>

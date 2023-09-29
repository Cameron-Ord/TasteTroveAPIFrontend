<template>
  <span class="heroSubheaderSpan">
    <h1 class="heroText">TasteTroveAPI</h1>
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
.heroSubheaderSpan{
  display: grid;
  justify-items: center;
  grid-template-rows: 1fr 1fr;
  >.heroText{
    font-size: clamp(1em, 1.5vw, 1.5em);
  }
}
</style>

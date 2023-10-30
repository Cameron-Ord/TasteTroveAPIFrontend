<template>
  <span class="heroImageSpan">
    <img class="heroImage" src="/images/lily-banse--YHSwy6uqvk-unsplash.jpg" alt="recipe image" />
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
.heroImageSpan {
  display: grid;
  justify-items: center;

  > .heroImage {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
}
@media only screen and (min-width: 1024px) {
  .heroImageSpan {
    display: grid;
    justify-items: center;

    > .heroImage {
      width: 90%;
      height: 550px;
      object-fit: cover;
    }
  }
}
</style>

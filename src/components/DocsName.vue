<template>
  <span class="docInfo">
    <div class="headingContainer">
      <h2>GET BY NAME</h2>
    </div>
    <div class="methodContainer">
      <p>
        To use this method, simply query the api with the meal of your choice. The name must be an
        exact match, the query is not case sensitive.
      </p>
      <h4>Optional parameters that can be sent as data:</h4>
      <p>
        (isHealthy). This is a boolean, enter 0 for false, 1 for true. It will return only recipes
        that correspond with your choice. You can leave this empty to get all results.
      </p>
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

<style lang="scss" scoped></style>

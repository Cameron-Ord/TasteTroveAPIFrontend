<template>
  <span>
    <svg
      @click="handleInput(this.$refs.left)"
      ref="left"
      class="leftArrow"
      viewBox="-3 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <g id="icomoon-ignore"></g>
      <path
        d="M13.114 2.887c-7.243 0-13.114 5.871-13.114 13.113s5.871 13.113 13.114 13.113c7.242 0 13.112-5.871 13.112-13.113s-5.87-13.113-13.112-13.113zM13.114 28.064c-6.653 0-12.065-5.412-12.065-12.064s5.412-12.063 12.065-12.063c6.652 0 12.063 5.412 12.063 12.063s-5.411 12.064-12.063 12.064z"
        fill="#000000"
      ></path>
      <path
        d="M12.318 10.363l-0.742-0.742-6.379 6.379 6.379 6.379 0.742-0.742-5.113-5.113h12.726v-1.049h-12.726z"
        fill="#000000"
      ></path>
    </svg>
    <svg
      @click="handleInput(this.$refs.right)"
      ref="right"
      class="rightArrow"
      viewBox="-3 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <g id="icomoon-ignore"></g>
      <path
        d="M13.11 29.113c7.243 0 13.113-5.871 13.113-13.113s-5.87-13.113-13.113-13.113c-7.242 0-13.113 5.871-13.113 13.113s5.871 13.113 13.113 13.113zM13.11 3.936c6.652 0 12.064 5.412 12.064 12.064s-5.412 12.064-12.064 12.064c-6.653 0-12.064-5.412-12.064-12.064s5.411-12.064 12.064-12.064z"
        fill="#000000"
      ></path>
      <path
        d="M13.906 21.637l0.742 0.742 6.378-6.379-6.378-6.379-0.742 0.742 5.112 5.112h-12.727v1.049h12.727z"
        fill="#000000"
      ></path>
    </svg>
  </span>
</template>

<script>
export default {
  components: {},

  data() {
    return {}
  },

  methods: {
    handleInput(ref) {
      this.$emit('send-index', ref)
    }
  },
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
span {
  display: grid;
  align-items: center;
  justify-items: center;

  > .rightArrow {
    width: 25px;
  }
  > .leftArrow {
    width: 25px;
  }
}
</style>

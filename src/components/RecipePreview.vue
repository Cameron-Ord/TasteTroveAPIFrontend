<template>
  <span v-if="recipeHolder !== undefined" class="recipeSpan">
    <div class="recipeContainer">
      <h4>{{ recipeHolder[0][index]['title'] }}</h4>
      <img :src="recipeHolder[0][index]['image_url']" alt="" />
      <h4>{{ recipeHolder[0][index]['desc'] }}</h4>
      </div>
    <preview-controls @send-index="handleIndex"></preview-controls>
  </span>
</template>

<script>
import PreviewControls from './PreviewControls.vue'
export default {
  components: {
    PreviewControls
  },

  data() {
    return {
      index: 0,
      recipeHolder: undefined
    }
  },

  methods: {
    handleData(response) {
      this.recipeHolder = []
      if (this.recipeHolder.length === 0) {
        for (let i = 0; i < response.length; i++) {
          this.recipeHolder.push(response)
        }
      }
    },

    decrement() {
      this.index--
      console.log('decrement')
    },

    increment() {
      this.index++
      console.log('increment')
    },

    handleIndex(ref) {
      if (ref.className.baseVal === 'leftArrow') {
        this.decrement()
      } else if (ref.className.baseVal === 'rightArrow') {
        this.increment()
      }
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
.recipeSpan{
  display: grid;
  align-items: center;
  >.recipeContainer{
    display: grid;
    justify-items: center;
    >img{
      width: 100%;
    }
    
  }
}
</style>

<template>
  <span class="inputSpan">
    <input 
      placeholder="Italian, Pasta, etc.."
      type="text"
      class="inputTag"
      ref="cuisineInput"
      @keyup.enter="sendQuery"
    />
  </span>
</template>

<script>
import axios from 'axios'
export default {
  components: {},

  data() {
    return {}
  },

  methods: {
    sendQuery() {
      const Query = this.$refs.cuisineInput.value
      console.log(Query)
      axios({
        url: `https://tastetroveapi.cameron-ord.online/api/searchByCuisine?cuisine=${Query}`,
        method: 'GET'
      })
        .then((resp) => {
          console.log(resp)
          this.$emit('handle-response', resp['data'])
        })
        .catch((err) => {
          err
        })
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
.inputSpan{
    display: grid;
    align-items: center;
    justify-items: center;
    width: 70%;
    >.inputTag{
        display: grid;
        width: 90%;
    }
}
</style>

<template>
  <span class="heroSubheaderSpan">
    <div class="subheader">
      <h1 class="heroText">Never wonder what to eat.</h1>
    </div>
    <div class="heroPara">
      <p class="heroParaText">TasteTrove is an API that delivers a wide range of recipes spanning many cuisines.
      Every recipe is hand picked and added to the API. Every recipe in the TasteTrove API contains 
      a list of ingredients, it's cooking methods, whether it's healthy or not, the recipe's it name and description.
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

<style lang="scss" scoped>
.heroSubheaderSpan{
  display: grid;
  justify-items: center;
  grid-auto-flow: row;
  align-items: center;
  row-gap: 25px;
  >.heroPara{
    display: grid;
    justify-items: start;
    text-align: start;
    width: 80%;
    >.heroParaText{
      padding-right: 15px;
      padding-left: 15px;
      background-color: var(--bg);
      border-radius: 7.5px;
      color: var(--highlight);
      font-weight: 600;
      padding-bottom: 10px;
      padding-top: 10px;
      letter-spacing: 1px; 
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
  }
  >.subheader{
    display: grid;
    justify-items: center;
    >.heroText{
    
    }
  }
  }
</style>

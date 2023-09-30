<template>
  <span class="headerSpan">
    <nav class="headerNav">
      <menu-element></menu-element>  
      <div class="logoContainer">
            <h3 class="headerIcon">Home</h3>
      </div>
    </nav>
    <div class="searchBar">
      <recipe-search @handle-response="passToMain"></recipe-search>
    </div>
  </span>
</template>

<script>
import MenuElement from './MenuElement.vue';
import RecipeSearch from './RecipeSearch.vue';
export default {
  components: {
    RecipeSearch,MenuElement
  },

  data() {
    return {}
  },

  methods: {
    passToMain(response) {
      this.$emit('handle-response', response)
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
.headerSpan{
    display: grid;
    align-items: center;
    grid-template-rows: 75px 50px;

    >.searchBar{
        display: grid;
        justify-items: center;
    }
    >.headerNav{
        align-items: center;
        display: grid;
        grid-template-columns: 1fr 1fr;
        >div{
            display: grid;
            justify-items: center;
            grid-template-columns: 1fr;
            >.headerSubtext{
                padding-left: 5px;
                padding-right: 5px;
                padding-top: 2.5px;
                padding-bottom: 2.5px;

            }
        }
        >.logoContainer{
            display: grid;
            justify-items: center;

            >.headerIcon{
                padding-left: 5px;
                padding-right: 5px;
                padding-top: 2.5px;
                padding-bottom: 2.5px;
            }
        }
    }
}
</style>

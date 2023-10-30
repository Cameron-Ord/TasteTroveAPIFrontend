<template>
  <span class="heroSubheaderSpan">
    <div class="subheader">
      <h1 class="heroText">Never wonder what to eat.</h1>
    </div>
    <div class="heroPara">
      <p class="heroParaText">
        TasteTrove is an API that delivers a wide range of recipes spanning many cuisines. Every
        recipe is hand picked and added to the API. Each recipe in the TasteTrove API contains a
        list of ingredients, it's cooking methods, whether it's healthy or not, all along with the
        recipes name and description.
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
.heroSubheaderSpan {
  display: grid;
  justify-items: center;
  grid-auto-flow: row;
  align-items: center;
  row-gap: 25px;
  > .heroPara {
    display: grid;
    justify-items: center;

    text-align: start;
    width: 90%;
    > .heroParaText {
      width: 90%;
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
  > .subheader {
    display: grid;
    justify-items: center;
    > .heroText {
    }
  }
}
@media only screen and (min-width: 770px) {
  .heroSubheaderSpan {
    > .heroPara {
      justify-items: center;

      > .heroParaText {
        width: 70%;
      }
    }
    > .subheader {
      > .heroText {
      }
    }
  }
}
</style>

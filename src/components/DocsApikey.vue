<template>
  <span class="apiKeySpan">
    <div class="headingContainer">
      <h2 class="apiKeyHeader">API KEYS</h2>
    </div>
    <div class="apiContent">
      <h4 class="apiKeySubHeader">Getting your key</h4>
      <p class="apiKeyText">
        To generate an API key, simply make an account or login to your existing account, navigate
        to your profile page and select "Generate Key" under the Keys section.
      </p>
    </div>
    <div class="howTo">
      <h4 class="apiKeySubHeader">Using your key</h4>
      <p class="apiKeyText">
        To use your key, include it in your request as a header and use TroveKey:'{your key}'
      </p>
    </div>
    <div class="apiURL">
      <h4 class="apiKeySubHeader">Using the API</h4>
      <p class="apiKeyText">All request must use the base url :</p>
      <p class="apiURLtextTag">https://tastetroveapi.cameron-ord.online/api/{CHOSEN ENDPOINT}</p>
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
.apiURLtextTag {
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 7.5px;
  padding-right: 7.5px;
  background-color: var(--highlight);
  word-break: break-all;
  color: var(--bg);
  border-radius: 5px;
}
.apiKeySpan {
  display: grid;
  align-items: center;
  justify-items: start;
  width: 90%;
  grid-auto-flow: row;
  row-gap: 25px;
  > .apiContent {
    width: auto;
    max-width: 100%;
    display: grid;
    justify-items: start;
    text-align: start;
    align-items: center;
    grid-auto-flow: row;
    row-gap: 15px;
  }
  > .howTo {
    width: auto;
    max-width: 100%;
    align-items: center;
    display: grid;
    justify-items: start;
    text-align: start;
    grid-auto-flow: row;
    row-gap: 15px;
  }
  > .apiURL {
    width: auto;
    max-width: 100%;
    align-items: center;
    display: grid;
    justify-items: start;
    text-align: start;
    grid-auto-flow: row;
    row-gap: 15px;
  }
}
@media only screen and (min-width: 770px) {
  .apiURLtextTag {
  }
  .apiKeySpan {
    width: 90%;
    > .apiContent {
    }
    > .howTo {
    }
    > .apiURL {
    }
  }
}
@media only screen and (min-width: 1024px) {
  .apiURLtextTag {
  }
  .apiKeySpan {
    width: 60%;
    > .apiContent {
    }
    > .howTo {
    }
    > .apiURL {
    }
  }
}
</style>
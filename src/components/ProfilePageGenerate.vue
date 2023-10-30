<template>
  <span class="generateSpan">
    <div class="genDesc">
      <h4 class="genDescText">You can generate or replace a key by clicking generate key</h4>
    </div>
    <div class="generateButton">
      <p @click="generateKey" class="genKey">Generate Key</p>
    </div>
    <div class="generatedDisplay" v-if="key !== undefined">
      <h3 class="yourKey">Your key:</h3>
      <p class="keyTag">{{ key.toString() }}</p>
    </div>
  </span>
</template>

<script>
import axios from 'axios'
import Cookies from 'vue-cookies'
export default {
  components: {},

  data() {
    return {
      key: undefined
    }
  },

  methods: {
    generateKey() {
      let sessionInfo = Cookies.get('clientSession')
      axios({
        url: `${import.meta.env.VITE_APP_BASE_DOMAIN}/api/generateKey`,
        method: 'POST',
        data: {
          client_id: sessionInfo[0]['client_id'],
          token: sessionInfo[0]['session_token']
        }
      })
        .then((response) => {
          this.key = response['data'][0]['apiKey']
        })
        .catch((error) => {
          error
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
.generateSpan {
  display: grid;
  justify-items: center;
  align-items: center;
  grid-auto-flow: row;
  row-gap: 25px;
  > .generatedDisplay {
    display: grid;
    justify-items: center;
    text-align: center;
    > p {
    }
    > h3 {
    }
  }
  > .genDesc {
    display: grid;
    justify-items: center;
    text-align: center;
    > h4 {
    }
  }
  > .generateButton {
    display: grid;
    justify-items: center;
    text-align: center;
    > p {
    }
  }
}
</style>

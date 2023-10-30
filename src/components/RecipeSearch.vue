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
import Cookies from 'vue-cookies';
import axios from 'axios';
export default {
  components: {},

  data() {
    return {
      keyHolder : undefined
    }
  },

  methods: {

    fetchResults(){
      const Query = this.$refs.cuisineInput.value;
      const isInput = null;
      axios({
        url: `${import.meta.env.VITE_APP_BASE_DOMAIN}/api/searchByCuisine?cuisine=${Query}`,
        method: 'GET',
        headers:{
          apiKey: this.keyHolder
        },
        params:{
          isHealthy : isInput
        }
      })
        .then((resp) => {
          console.log(resp)
        })
        .catch((err) => {
          err
        });
    },

    sendQuery() {
      const clientID = Cookies.get('clientSession')
      console.log(clientID)
      axios({
        url: `${import.meta.env.VITE_APP_BASE_DOMAIN}/api/fetchUserKey`,
        method: 'GET',
        params:{
          client_id:clientID[0]['client_id'],
          session_token:clientID[0]['session_token'] 
        }
      }).then((response)=>{
         this.keyHolder = response['data'][0]['apiKey'];
         if(this.keyHolder !== undefined){
          this.fetchResults()
         }
      }).catch((error)=>{
        error;
      })
    }
  },
  computed: {},
  created() {

  },
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

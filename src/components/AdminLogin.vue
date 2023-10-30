<template>
    <span class="adminLogin">
    <div class="usernameInputContainer">
        <input placeholder="username" type="text" ref="username" class="adminInput">
    </div>
    <div class="passwordInputContainer">
        <input placeholder="..." type="password" ref="password" class="adminInput">
    </div>
    <div class="optionsContainer">
      <p class="logintext" ref="login" @click="submitLogin(this.$refs.username, this.$refs.password)">Login</p>
    </div>
  </span>
</template>

<script>
import Cookies from 'vue-cookies';
import axios from 'axios';
export default {
  components: {},

  data() {
    return {}
  },

  methods: {
    submitLogin(username, password){
      if(username && password){
        axios({
          url: `${import.meta.env.VITE_APP_BASE_DOMAIN}/api/adminLogin`,
          method: 'POST',
          data:{
            username: username.value,
            password: password.value,
          }
        }).then((response)=>{
          Cookies.set('adminSession', response['data']);
          Cookies.remove('adminLogin');
          response;
        }).catch((error)=>{
          error;
          this.status = "Invalid Login"
        });
      } else {
        this.status = "Please provide the required information";
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

<style lang="scss" scoped></style>

<template>
  <span class="clientLogin">
    <div class="usernameInputContainer">
        <input placeholder="username" type="text" ref="username" class="clientInput">
    </div>
    <div class="passwordInputContainer">
        <input placeholder="..." type="password" ref="password" class="clientInput">
    </div>
    <div class="optionsContainer">
      <p class="signuptext" ref="signup" @click="openSignupBox">Signup</p>
      <p class="logintext" ref="login" @click="submitLogin(this.$refs.username, this.$refs.password)">Login</p>
    </div>
    <div class="signupbox">
      
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
    openSignupBox(){
      console.log('this function does nothing!!!');
    },
    submitLogin(username, password){
      if(username && password){
        axios({
          url: 'https://tastetroveapi.cameron-ord.online/api/clientLogin',
          method: 'POST',
          data:{
            username: username.value,
            password: password.value,
          }
        }).then((response)=>{
          Cookies.set('clientSession', response['data']);
          Cookies.remove('clientLogin');
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

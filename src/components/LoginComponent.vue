<template>
  <span class="clientLogin">
    <div class="usernameInputContainer">
        <input placeholder="username" type="text" ref="username" class="clientInput">
    </div>
    <div class="passwordInputContainer">
        <input placeholder="..." type="password" ref="password" class="clientInput">
    </div>
    <div class="optionsContainer">
      <p class="signuptext" ref="signup" @click="openSignupBox(this.$refs.signup)">Signup</p>
      <p class="logintext" ref="login" @click="submitLogin(this.$refs.username, this.$refs.password)">Login</p>
    </div>
    <div class="signupbox" ref="signup" SignupBox>
          <h2>this is open</h2>
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
    openSignupBox(ref){
      const isopenBox = ref.matches('[SignupBox]');
      let OpenedBox;
      if(isopenBox){
        OpenedBox = ref;
        OpenedBox.classList.toggle('openBox');
      }
      const box = document.querySelector('[SignupBox].openBox');
      if(box === OpenedBox) return
      OpenedBox.classList.remove('openBox')
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

<style lang="scss" scoped>

.signupbox.openBox{
  pointer-events: auto;
  opacity: 1;
}
.signupbox{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  pointer-events: none;
  transition: 0.3s ease-in-out;
}
</style>

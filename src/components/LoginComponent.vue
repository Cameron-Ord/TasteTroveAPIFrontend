<template>
  <article class="loginArticle">
    <span class="clientLogin" ref="login">
      <usr-login @signup-call="SignupBox(this.$refs.signup)"></usr-login>
      <login-image></login-image>
    </span>
    <span class="signupbox" ref="signup" SignupBox>
      <client-signup @closeBox="SignupBox(this.$refs.signup)"></client-signup>
    </span>
  </article>
</template>

<script>
import LoginImage from './LoginImage.vue';
import UsrLogin from './UsrLogin.vue';
import ClientSignup from './ClientSignup.vue';
import Cookies from 'vue-cookies';

export default {
  components: {
    ClientSignup,UsrLogin,LoginImage
  },

  data() {
    return {}
  },

  methods: {
    handleLogin(username,password){
      this.submitLogin(username,password)
    },
    SignupBox(ref){
      const isopenBox = ref.matches('[SignupBox]');
      let OpenedBox;
      if(isopenBox){
        OpenedBox = ref;
        OpenedBox.classList.toggle('openBox');
        this.$refs.login.classList.toggle('boxIsOpen')
      }
      const box = document.querySelector('[SignupBox].openBox');
      if(box === OpenedBox) return
      OpenedBox.classList.remove('openBox')
      this.$refs.login.classList.remove('boxIsOpen')
    },

    CookieExists(Cookie){
      return document.cookie.split(';').some((cookie) => cookie.trim().startsWith(Cookie + '='))
    },
},
  computed: {},
  created() {
  },
  mounted() {
    if(this.CookieExists('SigningUp')){
      this.SignupBox(this.$refs.signup);
      Cookies.remove('SigningUp');
      }
  },
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {}
}
</script>

<style lang="scss" scoped>

.loginArticle{
  display: grid;
  align-items: center;
  justify-items: center;
>.clientLogin.boxIsOpen{
  opacity: 0;
  pointer-events: none;
}
>.clientLogin{
  z-index: 900;
  width: 90%;
  display: grid;
  grid-auto-flow: row;
  row-gap: 25px;
  pointer-events: auto;
  transition: 0.3s ease-in-out;
  opacity: 1;
}
>.signupbox.openBox{
  pointer-events: auto;
  opacity: 1;
}
>.signupbox{
  width: 90%;
  z-index: 900;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  pointer-events: none;
  transition: 0.3s ease-in-out;
  background-color: var(--foreground);
  padding-top: 25px;
  padding-bottom: 25px;
  border-radius: 5px;
}
}
</style>

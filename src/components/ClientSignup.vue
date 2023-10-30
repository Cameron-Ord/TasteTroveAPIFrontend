<template>
  <span class="signupSpan">
    <div class="emailInput">
      <input class="signupTag" type="text" ref="emailRef" placeholder="email.." />
    </div>
    <div class="userInput">
      <input class="signupTag" type="text" ref="usrRef" placeholder="username.." />
    </div>
    <div class="passInput">
      <input class="signupTag" type="password" ref="passRef" placeholder="..." />
    </div>
    <div class="optionsContainer">
      <p class="closeTag" @click="closeDialog">Close</p>
      <p
        class="signupButtonTag"
        ref="signupButton"
        @click="signUsr(this.$refs.emailRef, this.$refs.usrRef, this.$refs.passRef)"
      >
        Signup
      </p>
    </div>
  </span>
</template>

<script>
import axios from 'axios'
import Cookies from 'vue-cookies'
export default {
  components: {},

  data() {
    return {}
  },

  methods: {
    closeDialog() {
      this.$emit('closeBox')
    },

    logUsr(username, password) {
      axios({
        url: `${import.meta.env.VITE_APP_BASE_DOMAIN}/api/clientLogin`,
        method: 'POST',
        data: {
          username: username.value,
          password: password.value
        }
      })
        .then((response) => {
          Cookies.set('clientSession', response['data'])
          this.$router.push('/ProfilePage')
        })
        .catch((error) => {
          error
        })
    },

    signUsr(email, username, password) {
      axios({
        url: `${import.meta.env.VITE_APP_BASE_DOMAIN}/api/clientSignup`,
        method: 'POST',
        data: {
          username: username.value,
          password: password.value,
          email: email.value
        }
      })
        .then((response) => {
          this.logUsr(username, password)
          response
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
.signupSpan {
  display: grid;
  align-items: center;
  justify-items: center;
  grid-auto-flow: row;
  row-gap: 20px;
  > .optionsContainer {
    display: grid;
    justify-items: center;
    width: 80%;
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    > .closeTag {
      font-weight: 700;
      color: var(--highlight);
      cursor: pointer;
    }
    > .signupButtonTag {
      color: var(--bg);
      cursor: pointer;
      padding-top: 5px;
      padding-bottom: 5px;
      padding-left: 7.5px;
      padding-right: 7.5px;
      border-radius: 5px;
      background-color: var(--dark);
      font-weight: 700;
    }
  }

  > .passInput {
    max-width: 300px;
    display: grid;
    justify-items: center;
    background-color: var(--light);
    border-radius: 5px;
    padding: 5px;
    width: 75%;
    > input {
      width: 90%;
      border-color: var(--dark);
      padding: 7.5px;
      border-radius: 5px;
    }
  }
  > .userInput {
    max-width: 300px;
    display: grid;
    justify-items: center;
    background-color: var(--light);
    border-radius: 5px;
    padding: 5px;
    width: 75%;
    > input {
      width: 90%;
      border-color: var(--dark);
      padding: 7.5px;
      border-radius: 5px;
    }
  }
  > .emailInput {
    max-width: 300px;
    display: grid;
    justify-items: center;
    background-color: var(--light);
    border-radius: 5px;
    padding: 5px;
    width: 75%;
    > input {
      border-color: var(--dark);
      border-radius: 5px;
      padding: 7.5px;
      width: 90%;
    }
  }
}

@media only screen and (min-width: 770px) {
  .signupSpan {
    > .optionsContainer {
      > .closeTag {
      }
      > .signupButtonTag {
      }
    }

    > .passInput {
      max-width: 300px;
      > input {
      }
    }
    > .userInput {
      max-width: 300px;

      > input {
      }
    }
    > .emailInput {
      max-width: 300px;

      > input {
      }
    }
  }
}
@media only screen and (min-width: 1024px) {
}
</style>

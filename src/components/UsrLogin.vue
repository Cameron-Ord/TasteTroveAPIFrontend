
<template>
    <div class="wrapper">
     <div class="usernameInputContainer">
        <input placeholder="username" type="text" ref="username" class="clientInput">
    </div>
    <div class="passwordInputContainer">
        <input placeholder="..." type="password" ref="password" class="clientInput">
    </div>
    <div class="optionsContainer">
      <p class="signuptext" ref="signup" @click="SignupBoxCall">Signup</p>
      <p class="logintext" ref="login" @click="LoginSubmitCall(this.$refs.username, this.$refs.password)">Login</p>
    </div>
    </div>
</template>

<script>
    export default {
        components:{

        },

        data() {
            return {
                
            }
        },

        methods:{
            LoginSubmitCall(username,password){
                this.$emit('login-call', username,password);
            },
            SignupBoxCall(){
                this.$emit('signup-call');
            }
        },
        computed:{

        },
        created(){

        },
        mounted(){

        },
        beforeMount(){

        },
        beforeUpdate(){

        },
        updated(){

        },
        beforeUnmount(){

        },
        unmounted(){

        }

    }
</script>

<style lang="scss" scoped>
.wrapper{
    display: grid;
    align-items: center;
    justify-items: center;
    >.usernameInputContainer{
    display: grid;
    justify-items: center;
  }
  >.passwordInputContainer{
    display: grid;
    justify-items: center;
  }
  >.optionsContainer{
    display: grid;
    width: 90%;
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    justify-items: center;
    >.logintext{
      cursor: pointer;
    }
    >.signuptext{
      cursor: pointer;
    }
  }
}
</style>



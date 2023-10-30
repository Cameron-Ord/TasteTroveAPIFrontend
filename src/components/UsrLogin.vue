
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
      <p class="logintext" ref="login" @click="submitLogin(this.$refs.username, this.$refs.password)">Login</p>
    </div>
    </div>
</template>

<script>
import Cookies from 'vue-cookies';
import axios from 'axios';
    export default {
        components:{

        },

        data() {
            return {
                
            }
        },

        methods:{
          submitLogin(username, password){
            console.log(username.value,password.value)
            if(username && password){
              axios({
                url: `${import.meta.env.VITE_APP_BASE_DOMAIN}/api/clientLogin`,
                method: 'POST',
                data:{
                  username: username.value,
                  password: password.value,
                }
              }).then((response)=>{
                Cookies.set('clientSession', response['data']);
                this.$router.push('ProfilePage');
              }).catch((error)=>{
                error;
                this.status = "Invalid Login"
              });
            } else {
              this.status = "Please provide the required information";
            }
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
    width: 90%;
    max-width: 400px;
    background-color: var(--foreground);
    padding-top: 25px;
    padding-bottom: 25px;
    border-radius: 5px;
    display: grid;
    align-items: center;
    justify-items: center;
    grid-auto-flow: row;
    row-gap: 50px;
    >.usernameInputContainer{
      display: grid;
      justify-items: center;
      padding: 5px;
      width: 80%;
      max-width: 300px;
      border-radius: 5px;
      background-color: var(--light);
    >input{
      width: 90%;
      
      border-radius: 5px;
      padding: 7.5px;
      border-color: var(--dark);
    }
  }
  >.passwordInputContainer{
    display: grid;
    width: 80%;
    max-width: 300px;
    justify-items: center;
    background-color: var(--light);
    border-radius: 5px;
    padding: 5px;

    >input{
      width: 90%;
      border-color: var(--dark);
      border-radius: 5px;
      padding: 7.5px;
      
    }
  }
  >.optionsContainer{
    display: grid;
    width: 80%;
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    justify-items: center;
    >.logintext{
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
    >.signuptext{
      font-weight: 700;
      color: var(--highlight);
      cursor: pointer;
    }
  }
}

@media only screen and (min-width: 770px){
.wrapper{
  row-gap: 75px;

>.usernameInputContainer{
  max-width: 300px;
  
  >input{
  

  }
}

>.passwordInputContainer{
  max-width: 300px;
  >input{
  
  }
}
}
}
@media only screen and (min-width: 1024px){
.wrapper{
  row-gap: 75px;

}  
}

</style>



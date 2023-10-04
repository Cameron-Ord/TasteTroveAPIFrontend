
<template>
    <span class="signupSpan">
        <div class="emailInput">
            <input class="signupTag" type="text" ref="emailRef" placeholder="email..">
        </div>
        <div class="userInput">
            <input class="signupTag" type="text" ref="usrRef" placeholder="username..">
        </div>
        <div class="passInput">
            <input class="signupTag" type="password" ref="passRef" placeholder="...">
        </div>
        <div class="optionsContainer">
            <p class="signupButtonTag" ref="signupButton" @click="signUsr(this.$refs.emailRef, this.$refs.usrRef, this.$refs.passRef)">Signup</p>
            <p class="closeTag" @click="closeDialog">Close</p>
        </div>
    </span>
</template>

<script>
import axios from 'axios';
import Cookies from 'vue-cookies';
    export default {
        components:{

        },

        data() {
            return {

            }
        },

        methods:{
            
            closeDialog(){
                this.$emit('closeBox')
            },

            logUsr(username,password){
                axios({
                    url:'https://tastetroveapi.cameron-ord.online/api/clientLogin',
                    method: 'POST',
                    data:{
                        username: username,
                        password: password,
                    }
                }).then((response)=>{
                    Cookies.set('clientInfo', response['data'])
                }).catch((error)=>{
                    error;
                })
            },

            signUsr(email,username,password){
                axios({
                    url: 'https://tastetroveapi.cameron-ord.online/api/clientSignup',
                    method:'POST',
                    data:{
                        username: username.value,
                        password: password.value,
                        email: email.value
                    }
                }).then((response)=>{
                    this.logUsr(username,password);
                    response;
                }).catch((error)=>{
                    error;
                })
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
.signupSpan{
    display: grid;
    align-items:center;
    justify-items: center;

    >.optionsContainer{
        display: grid;
        justify-items: center;
        grid-template-columns: repeat(auto-fit);
        >.closeTag{

        }
        >.signupButtonTag{

        }
    }

    >.passInput{
        display: grid;
        justify-items: center;
    }
    >.userInput{
        display: grid;
        justify-items: center;
    }
    >.emailInput{
        display: grid;
        justify-items: center;
    }
}
</style>



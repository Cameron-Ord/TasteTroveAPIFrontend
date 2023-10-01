<template>
    <span>
        <login-component v-if="adminSession === false && clientSession === true"></login-component>
        <admin-login v-if="adminSession === true && clientSession === false"></admin-login>
    </span>
</template>

<script>
import AdminLogin from '../components/AdminLogin.vue';
import LoginComponent from '../components/LoginComponent.vue';
    export default {
        data() {
            return {
                clientSession : false,
                adminSession  : false,
            }
        },

        methods:{
            CookieExists(Cookie){
                return document.cookie.split(';').some((cookie) => cookie.trim().startsWith(Cookie + '='))
            }
        },

        components:{
            AdminLogin, LoginComponent
        },
    
        created(){
            if(this.CookieExists('clientLogin')){
                this.clientSession = true;
                this.adminSession = false;
            } else if (this.CookieExists('adminLogin')){
                this.adminSession = true
                this.clientSession = false;
            }
        }
    }

</script>

<style lang="scss" scoped>

</style>

<template>
    <div class="mainWrapper">
        <div class="docsDiv">
            <p class="menuTag" @click="goToDocs(this.$refs.Docs)" ref="Docs">Documentation</p>
        </div>        
        <div class="desktopMenuWrapper" v-if="(clientSession === true) || (clientSession === false && currentPath !== '/Login')">
            <div class="menuText">
                <p class="menuTag" @click="goToProfile" v-if="clientSession === true">Profile</p>
                <p class="menuTag" @click="goToLogin" v-if="clientSession === false && currentPath !== '/Login'">Login</p>
                <p class="menuTag" @click="goToSignup" v-if="clientSession === false && currentPath !== '/Login'">Signup</p>
                <p class="menuTag" @click="SignOut" v-if="clientSession === true">Signout</p>
            </div>
        </div>
    </div>
</template>

<script>
import Cookies from 'vue-cookies';
    export default {
        components:{

        },

        data() {
            return {
                currentPath : undefined,
                clientSession : false 
            }
        },

        methods:{
            SignOut(){
                Cookies.remove('clientSession');
                if(this.$route.path === '/ProfilePage'){
                    this.$router.push('/');
                } else {
                    this.$router.go();
                }
            },
            goToProfile(){
                const getLoginStatus = Cookies.get('clientSession');
                if(getLoginStatus !== null){
                    this.clientSession = true;
                    this.$router.push('/ProfilePage');
                } else {
                    this.clientSession = false;
                }
            },

            goToLogin(){
                if(this.$route.path !== '/Login'){
                    this.$router.push('/Login');
                }
            },

            goToSignup(){
                if(this.$route.path !== '/Login'){
                    this.$router.push('/Login');
                    Cookies.set('SigningUp');
                }
            },

            goToDocs(ref){
                if(ref){
                    this.$router.push('/Docs');
                }
            },

            checkIfNull(cookie){
                if(cookie !== null){
                    return false;
                } else {
                    return true;
                }
            },

            CookieExists(Cookie){
                return document.cookie.split(';').some((cookie) => cookie.trim().startsWith(Cookie + '='))
            },

            resetHeight(){
                let pageHeader = document.querySelector('.pageHeader');
                pageHeader.style.minHeight = '150px';
            },

            assignHeight(){
                if(this.clientSession === true){
                    let pageHeader = document.querySelector('.pageHeader');
                    pageHeader.style.minHeight = '250px';
                }
            }

        },
        computed:{

        },
        created(){
            this.currentPath = this.$route.path;
            console.log(this.currentPath)
            if(this.CookieExists('clientSession')){
                const checker = Cookies.get('clientSession');
                 const clientBool = this.checkIfNull(checker);
                 if(clientBool === false){
                    this.clientSession = true;
                 }
            }
        },
        mounted(){
            if(this.clientSession === true){
                this.assignHeight();
            } else {
                this.resetHeight();
            }
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
.mainWrapper{
    display: grid;
    align-items: center;
    grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
    >.docsDiv{
        display: grid;
        justify-items: center;
        >.menuTag{
            margin-top: 5px;
            margin-bottom: 5px;
            padding-top: 5px;
            padding-bottom: 5px;
            padding-left: 8.5px;
            padding-right: 8.5px;
            cursor: pointer;
            color: var(--highlight);
            font-weight: 700;
        }
    }
    >.desktopMenuWrapper{
        display: grid;
        align-items: center;
        >.menuText{
            display: grid;
            justify-items: center;
            text-align: center;
            grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
            >.menuTag{
                margin-top: 5px;
                margin-bottom: 5px;
                padding-top: 5px;
                padding-bottom: 5px;
                padding-left: 8.5px;
                padding-right: 8.5px;
                cursor: pointer;
                color: var(--highlight);
                font-weight: 700;
            }
        }
    }
}
</style>



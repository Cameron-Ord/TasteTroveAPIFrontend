
<template>
    <div>
       <div class="dropDown">
        <h2 @click="showMenu(this.$refs.menuBox)" dropDownButton ref="icon" class="icon">Nav</h2>
        <div class="menuBox" ref="menuBox" dropdown>
            <div class="menuContent">
                <div class="contentWrapper">
                    <div class="menuSubHeader">
                        <h4>Docs</h4>
                    </div>
                    <div class="menuText">
                        <p class="menuTag" @click="goToDocs(this.$refs.Policy)" ref="Policy">Usage Policy</p>
                        <p class="menuTag" @click="goToDocs(this.$refs.Docs)" ref="Docs">Documentation</p>
                    </div>
                </div>
                <div class="contentWrapper" v-if="(clientSession === true) || (clientSession === false && currentPath !== '/Login')">
                    <div class="menuSubHeader">
                        <h4>Account</h4>
                    </div>
                    <div class="menuText">
                        <p class="menuTag" @click="goToProfile" v-if="clientSession === true">Profile</p>
                        <p class="menuTag" @click="goToLogin" v-if="clientSession === false && currentPath !== '/Login'">Login</p>
                        <p class="menuTag" @click="goToSignup" v-if="clientSession === false && currentPath !== '/Login'">Signup</p>
                        <p class="menuTag" @click="SignOut" v-if="clientSession === true">Signout</p>
                    </div>
                </div>
            </div>
        </div>
       </div>
    </div>
</template>

<script>
import Cookies from 'vue-cookies';
    export default {
        data() {
            return {
                currentPath : undefined,
                clientSession : false
            }
        },

        methods:{
            SignOut(){
                this.$refs.menuBox.classList.remove('isActive');
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
                    this.$refs.menuBox.classList.remove('isActive');
                    this.clientSession = true;
                    this.$router.push('/ProfilePage');
                } else {
                    this.$refs.menuBox.classList.remove('isActive');
                    this.clientSession = false;
                }
            },

            goToLogin(){
                if(this.$route.path !== '/Login'){
                    this.$router.push('/Login');
                    this.$refs.menuBox.classList.remove('isActive');
                } else {
                    this.$refs.menuBox.classList.remove('isActive');
                }
            },

            goToSignup(){
                if(this.$route.path !== '/Login'){
                    this.$router.push('/Login');
                    this.$refs.menuBox.classList.remove('isActive');
                    Cookies.set('SigningUp');
                } else {
                    this.$refs.menuBox.classList.remove('isActive');
                }
            },

            goToDocs(ref){
                if(ref){
                    this.$refs.menuBox.classList.remove('isActive');
                    Cookies.set('docChoice', ref.textContent)
                    this.$router.push('/Docs');
                }
            },

            showMenu(ref){

                const isDropdownButton = this.$refs.icon.matches('[dropDownButton]');
                if(!isDropdownButton && ref.closest('[dropdown]') != null) return

                let currentDropdown;
                if(isDropdownButton) {
                    currentDropdown = ref.closest('[dropdown]');
                    currentDropdown.classList.toggle('isActive');
                }
                document.querySelectorAll('[dropdown].isActive').forEach(dropdown => {
                    if(dropdown === currentDropdown) return
                    dropdown.classList.remove('isActive')
                })
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
.dropDown{
    position: relative;
    z-index: 1000;

    >.icon{
        color: var(--dark);
        cursor: pointer;
    }
    >.menuBox{
        width: 150px;
        position: absolute;
        left: 0;
        top: calc(100% + 0.75rem);
        background-color: var(--bg);
        padding: 0.75em;
        border-radius: 5px;
        pointer-events: none;
        opacity: 0;
        transform: translateY(-10px);
        transition: 0.3s ease-in-out;

        >.menuContent{
            display: grid;
            grid-auto-flow: row;
            row-gap: 25px;

            >.contentWrapper{
                display: grid;
                align-items: center;
                >.menuText{
                    display: grid;
                    align-items: center;
                    >.menuTag{
                        margin-top: 5px;
                        margin-bottom: 5px;
                        padding-top: 5px;
                        padding-bottom: 5px;
                        padding-left: 8.5px;
                        padding-right: 8.5px;
                        cursor: pointer;
                        color: var(--highlight);
                        font-weight: 500;
                    }
                }
                >.menuSubHeader{
                    display: grid;
                    align-items: center;
                    text-align: center;
                    >h4{
                        color: var(--bg);
                        background-color: var(--dark);
                        border-radius: 5px;
                        margin-bottom: 5px;
                        padding-left: 7.5px;
                        padding-right: 7.5px;
                        padding-top: 5.5px;
                        padding-bottom: 5.5px;

                    }
                }
            }
        }
    }

    >.menuBox.isActive{
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0px);
        transition: 0.3s ease-in-out;
    }
}
</style>



<template>
    <header class="pageHeader">
        <page-header></page-header>
    </header>
        <main class="pageMain">
            <section class="keyGen">
                <article>
                    <profile-page-info></profile-page-info>
                </article>
            </section>
            <section class="ProfileInfo">
                <article>
                    <profile-page-generate></profile-page-generate>
                </article>
            </section>
        </main>
    <footer class="pageFooter">
        <page-footer></page-footer>
    </footer>
</template>

<script>
import ProfilePageInfo from '../components/ProfilePageInfo.vue';
import ProfilePageGenerate from '../components/ProfilePageGenerate.vue';
import PageHeader from '../components/PageHeader.vue';
import PageFooter from '../components/PageFooter.vue';
import Cookies from 'vue-cookies';
    export default {
        components:{
            PageHeader,
            PageFooter,
            ProfilePageGenerate,
            ProfilePageInfo
        },
        data() {
            return {
                clientSession : false
            }
        },
        methods:{
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
        created(){
            if(this.CookieExists('clientSession')){
                const checker = Cookies.get('clientSession');
                const clientBool = this.checkIfNull(checker);
                 if(clientBool === false){
                    this.clientSession = true;
                 } else {
                    this.$router.push('/');
                 }
            }
        }
    }
</script>

<style lang="scss" scoped>
.pageMain{
    min-height: 100vh;
    display: grid;
    align-items: center;
    margin-top: 25px;
    margin-bottom: 25px;
}
    .pageHeader{
    display: grid;
    align-items: center;
    min-height: 150px;
    }
    .pageFooter{
        display: grid;
        align-items: center;
        min-height: 175px;
    }
</style>
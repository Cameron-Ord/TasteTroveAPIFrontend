<template>
    <header class="pageHeader">
        <page-header></page-header>
    </header>
    <main class="pageMain">
        <section class="sectionLogin">
            <login-component></login-component>
        </section>
    </main>
    <footer class="pageFooter">
        <page-footer></page-footer>
    </footer>
</template>

<script>
import PageHeader from '../components/PageHeader.vue';
import PageFooter from '../components/PageFooter.vue';
import LoginComponent from '../components/LoginComponent.vue';
    export default {
        data() {
            return {
            }
        },

        methods:{

        },

        components:{
            PageHeader,PageFooter, LoginComponent
        },
    
        created(){
        }
    }

</script>

<style lang="scss" scoped>

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
.pageMain{
    display: grid;
    min-height: 100vh;
    align-items: center;

    >.sectionLogin{
        display: grid;
        align-items: center;
    }
}
</style>
<template>
    <header class="pageHeader">
        <page-header></page-header>
    </header>
    <main class="pageMain" ref="pageMain">
        <section class="docsBody" v-if="gotoChoice !== undefined">
            <article class="DocsInfo" v-if="gotoChoice === 'API_keys'">
                <docs-apikey></docs-apikey>
            </article>
            <article class="DocsInfo" v-if="gotoChoice === 'GET_by_Cuisine'">
                <docs-getcuisine></docs-getcuisine>
            </article>
            <article class="DocsInfo" v-if="gotoChoice === 'GET_by_Name'">
                <docs-name></docs-name>
            </article>
            <article class="DocsInfo" v-if="gotoChoice === 'GET_recipe_ID'">
                <docs-id></docs-id>
            </article>
            <article class="DocsInfo" v-if="gotoChoice === 'GET_Nutrition'">
                <docs-nutrition></docs-nutrition>
            </article>
            <article class="DocsInfo" v-if="gotoChoice === 'GET_Instructions'">
                <get-instructions></get-instructions>
            </article>
        </section>
        <section class="docsNavigation">
            <article class="docsNav">
                <docs-scroller @showChoice="handleChoice"></docs-scroller>
            </article>
        </section>
    </main>
    <footer class="pageFooter">
        <page-footer></page-footer>
    </footer>
</template>

<script>
import Cookies from 'vue-cookies';
import GetInstructions from '../components/GetInstructions.vue';
import DocsNutrition from '../components/DocsNutrition.vue';
import DocsId from '../components/DocsId.vue';
import DocsName from '../components/DocsName.vue';
import DocsGetcuisine from '../components/DocsGetcuisine.vue';
import DocsApikey from '../components/DocsApikey.vue';
import DocsScroller from '../components/DocsScroller.vue';
import PageHeader from '../components/PageHeader.vue';
import PageFooter from '../components/PageFooter.vue';

    export default {

        data() {
            return {
                gotoChoice : undefined
            }
        },

        methods:{
            modifyLayout(mainRef){
                mainRef.style.gridTemplateRows='1fr 0.5fr';
            },
            handleChoice(){
                this.gotoChoice = Cookies.get('docsGoto');
                this.modifyLayout(this.$refs.pageMain);
            }
        },

        components:{
            GetInstructions,
            DocsNutrition,
            DocsId,
            DocsGetcuisine,
            DocsApikey,
            DocsScroller,
            PageHeader,
            PageFooter,
            DocsName,
        }
      }
</script>

<style lang="scss" scoped>

    .pageMain{
        margin-top: 25px;
        margin-bottom: 25px;
        display: grid;
        min-height: 100vh;
        align-items: center;
        grid-template-rows: 1fr;
        >.docsBody{
            display: grid;
            align-items: center;
            >.DocsInfo{
                transition: 0.3s ease-in-out;
                padding-top: 20px;
                padding-bottom: 20px;
                display: grid;
                justify-items: center;

            }
        }
        >.docsNavigation{
            display: grid;
            align-items: center;
            >.docsNav{
                display: grid;
                justify-items: center;
            }
        
        }
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
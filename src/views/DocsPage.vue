<template>
    <header class="pageHeader">
        <page-header></page-header>
    </header>
    <main class="pageMain">
        <section class="docsBody">
            <article class="docsNav">
                <docs-scroller></docs-scroller>
            </article>
            <article class="DocsInfo">
                <docs-apikey></docs-apikey>
            </article>
            <article class="DocsInfo">
                <docs-getcuisine></docs-getcuisine>
            </article>
            <article class="DocsInfo">
                <docs-name></docs-name>
            </article>
            <article class="DocsInfo">
                <docs-id></docs-id>
            </article>
            <article class="DocsInfo">
                <docs-random></docs-random>
            </article>
            <article class="DocsInfo">
                <docs-nutrition></docs-nutrition>
            </article>
            <article class="DocsInfo">
                <docs-ishealthy></docs-ishealthy>
            </article>
            <article class="DocsInfo">
                <get-instructions></get-instructions>
            </article>
        </section>
    </main>
    <footer class="pageFooter">
        <page-footer></page-footer>
    </footer>
</template>

<script>
import GetInstructions from '../components/GetInstructions.vue';
import DocsIshealthy from '../components/DocsIshealthy.vue';
import DocsNutrition from '../components/DocsNutrition.vue';
import DocsRandom from '../components/DocsRandom.vue';
import DocsId from '../components/DocsId.vue';
import DocsName from '../components/DocsName.vue';
import DocsGetcuisine from '../components/DocsGetcuisine.vue';
import DocsApikey from '../components/DocsApikey.vue';
import DocsScroller from '../components/DocsScroller.vue';
import PageHeader from '../components/PageHeader.vue';
import PageFooter from '../components/PageFooter.vue';

    export default {

        components:{
            DocsIshealthy,
            GetInstructions,
            DocsNutrition,
            DocsRandom,
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
        display: grid;
        min-height: 100vh;
        align-items: center;
        >.docsBody{
            display: grid;
            align-items: center;
            >.docsContent{
                display: grid;
                justify-items: center;
                
            }
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
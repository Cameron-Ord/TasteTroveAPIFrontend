<template>
        <header class="pageHeader">
            <page-header @handle-response="sendToPreview"></page-header>
        </header>
        <main class="pageMain">
            <section class="heroSection">
                <article class="heroArticle">
                    <hero-text></hero-text>
                    <hero-image></hero-image>
                </article>
            </section>
            <section class="featuresSection">
                <article class="featuresArticle">
                    <recipes-block></recipes-block>
                    <ingredients-block></ingredients-block>
                    <nutrition-block></nutrition-block>
                </article>
            </section>
        </main>
        <footer class="pageFooter">
            <page-footer></page-footer>
        </footer>
</template>

<script>
import NutritionBlock from '../components/NutritionBlock.vue';
import IngredientsBlock from '../components/IngredientsBlock.vue';
import RecipesBlock from '../components/RecipesBlock.vue';
import HeroText from '../components/HeroText.vue';
import HeroImage from '../components/HeroImage.vue';
import PageFooter from '../components/PageFooter.vue';
import PageHeader from '../components/PageHeader.vue';
    export default {

        components:{
            NutritionBlock,RecipesBlock,IngredientsBlock,HeroText,HeroImage,PageFooter,PageHeader
        },

        methods:{
            sendToPreview(){

            }
        },

        data() {
            return {

            }
        },
    }
</script>

<style lang="scss" scoped>
    .pageMain{
        display: grid;
        align-items: center;
        min-height: 100vh;
        grid-auto-flow: row;
        row-gap: 25px;
        margin-top: 25px;
        margin-bottom: 25px;

        >.featuresSection{
            display: grid;
            align-items: center;
            >.featuresArticle{
                display: grid;
                justify-items: center;
                grid-auto-flow: row;
                row-gap: 25px;
            }
        }

        >.heroSection{
            display: grid;
            align-items: center;

            >.heroArticle{
                display: grid;
                grid-auto-flow: row;
                row-gap: 25px;
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
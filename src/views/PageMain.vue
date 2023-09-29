<template>
    <div class="pageWrapper">
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
            <section class="recipePreview" ref="recipePreviewSection">
                <article class="recipeArticle">
                    <recipe-preview ref="recipePreview"></recipe-preview>
                </article>
            </section>
            <section class="aboutSection">
                <article class="aboutArticle">

                </article>
            </section>
        </main>
        <footer class="pageFooter">
            <page-footer></page-footer>
        </footer>
    </div>
</template>

<script>

import RecipePreview from '../components/RecipePreview.vue';
import HeroText from '../components/HeroText.vue';
import HeroImage from '../components/HeroImage.vue';
import PageFooter from '../components/PageFooter.vue';
import PageHeader from '../components/PageHeader.vue';
    export default {

        components:{
            RecipePreview,HeroText,HeroImage,PageFooter,PageHeader
        },

        methods:{
            sendToPreview(response){
                let recipeElement = this.$refs.recipePreviewSection;
                recipeElement.style.display="grid";
                this.$refs.recipePreview.handleData(response);
            }
        },

        data() {
            return {

            }
        },
    }
</script>

<style lang="scss" scoped>
.pageWrapper{

    display: grid;
    align-items: center;

    >.pageMain{
        display: grid;
        align-items: center;
        min-height: 100vh;

        >.heroSection{
            display: grid;
            align-items: center;

            >.heroArticle{
                display: grid;
            }
        }
        >.recipePreview{
            display: none;
            align-items: center;
            >.recipeArticle{
                display: grid;

            }
        }
    }
    >.pageHeader{
    display: grid;
    align-items: center;
    min-height: 150px;
    }
    >.pageFooter{
        display: grid;
        align-items: center;
        min-height: 175px;
    }
}
</style>
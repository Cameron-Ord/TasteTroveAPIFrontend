<template>
  <header class="pageHeader">
    <page-header></page-header>
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
import NutritionBlock from '../components/NutritionBlock.vue'
import IngredientsBlock from '../components/IngredientsBlock.vue'
import RecipesBlock from '../components/RecipesBlock.vue'
import HeroText from '../components/HeroText.vue'
import HeroImage from '../components/HeroImage.vue'
import PageFooter from '../components/PageFooter.vue'
import PageHeader from '../components/PageHeader.vue'
export default {
  components: {
    NutritionBlock,
    RecipesBlock,
    IngredientsBlock,
    HeroText,
    HeroImage,
    PageFooter,
    PageHeader
  },

  methods: {},

  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.pageMain {
  display: grid;
  align-items: center;
  min-height: 100vh;
  grid-auto-flow: row;
  row-gap: 25px;
  margin-top: 25px;
  margin-bottom: 25px;

  > .featuresSection {
    display: grid;
    align-items: center;
    > .featuresArticle {
      display: grid;
      justify-items: center;
      grid-auto-flow: row;
      row-gap: 25px;
    }
  }

  > .heroSection {
    display: grid;
    align-items: center;

    > .heroArticle {
      display: grid;
      grid-auto-flow: row;
      row-gap: 25px;
    }
  }
}
@media only screen and (min-width: 770px) {
  .pageMain {
    > .featuresSection {
      > .featuresArticle {
        row-gap: 25px;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      }
    }

    > .heroSection {
      > .heroArticle {
      }
    }
  }
}
@media only screen and (min-width: 1024px) {
  .pageMain {
    > .featuresSection {
      padding-top: 50px;
      padding-bottom: 50px;
      > .featuresArticle {
        grid-template-columns: repeat(auto-fit, minmax(550px, 1fr));
        row-gap: 50px;
      }
    }

    > .heroSection {
      height: 850px;
      > .heroArticle {
        grid-template-columns: 1fr 1fr;
      }
    }
  }
}
</style>

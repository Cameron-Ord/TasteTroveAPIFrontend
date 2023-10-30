<template>
  <span class="headerSpan">
    <nav class="headerNav">
      <menu-element></menu-element>
      <div class="logoContainer">
        <h3 class="headerIcon" @click="goToHome">Home</h3>
      </div>
    </nav>
    <nav class="desktopNav">
      <div class="siteNav">
        <menu-desktop></menu-desktop>
      </div>
      <div class="logoContainer">
        <h3 class="headerIcon" @click="goToHome">Home</h3>
      </div>
    </nav>
    <div class="searchBar" v-if="clientSession === true">
      <recipe-search></recipe-search>
    </div>
  </span>
</template>

<script>
import MenuDesktop from './MenuDesktop.vue'
import Cookies from 'vue-cookies'
import MenuElement from './MenuElement.vue'
import RecipeSearch from './RecipeSearch.vue'
export default {
  components: {
    RecipeSearch,
    MenuElement,
    MenuDesktop
  },

  data() {
    return {
      clientSession: false
    }
  },

  methods: {
    checkIfNull(cookie) {
      if (cookie !== null) {
        return false
      } else {
        return true
      }
    },
    CookieExists(Cookie) {
      return document.cookie.split(';').some((cookie) => cookie.trim().startsWith(Cookie + '='))
    },
    goToHome() {
      if (this.$route.path === '/') {
        this.$router.go()
      } else {
        this.$router.push('/')
      }
    }
  },
  computed: {},
  created() {
    if (this.CookieExists('clientSession')) {
      const checker = Cookies.get('clientSession')
      const clientBool = this.checkIfNull(checker)
      if (clientBool === false) {
        this.clientSession = true
      }
    }
  },
  mounted() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {}
}
</script>

<style lang="scss" scoped>
.headerSpan {
  display: grid;
  align-items: center;
  grid-auto-flow: row;
  row-gap: 15px;

  > .desktopNav {
    display: none;
  }
  > .searchBar {
    display: grid;
    justify-items: center;
  }
  > .headerNav {
    align-items: center;
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr 1fr;
    > .logoContainer {
      display: grid;
      justify-items: center;

      > .headerIcon {
        padding-left: 5px;
        padding-right: 5px;
        padding-top: 2.5px;
        padding-bottom: 2.5px;
        cursor: pointer;
      }
    }
  }
}
@media only screen and (min-width: 770px) {
}
@media only screen and (min-width: 1024px) {
  .headerSpan {
    row-gap: 75px;

    > .desktopNav {
      display: grid;
      align-items: center;
      grid-template-columns: 1fr 1fr;

      > .siteNav {
      }

      > .logoContainer {
        display: grid;
        justify-items: center;
        > .headerIcon {
          padding-left: 5px;
          padding-right: 5px;
          padding-top: 2.5px;
          padding-bottom: 2.5px;
          cursor: pointer;
        }
      }
    }
    > .searchBar {
    }
    > .headerNav {
      display: none;
    }
  }
}
</style>

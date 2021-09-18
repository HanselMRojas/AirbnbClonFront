<template>
  <v-app>
    <ui-app-drawer />
    <ui-app-bar />

    <v-main id="main">
      <v-slide-y-transition mode="out-in">
        <router-view />
      </v-slide-y-transition>
    </v-main>

    <v-footer app>
      <p>&copy; 2021 - Alejandra Rocha. Todos los derechos reservados</p>
    </v-footer>
  </v-app>
</template>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>

<script>
import UiAppBar from '@/components/UiAppBar/UiAppBar.vue'
import UiAppDrawer from '@/components/UiAppDrawer/UiAppDrawer.vue'

export default {
  components: {
    UiAppBar,
    UiAppDrawer
  }
}
</script>

<template>
  <section class="home" id="home">

    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <v-btn @click="cambiarEstadoDrawer">Abrir menu</v-btn>
    <v-btn @click="cambiarEstadoCorazon">Cambiar color corazon</v-btn>
  </section>
</template>

<script>
import { mapActions } from 'vuex'
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    ...mapActions('ui', [
      'cambiarEstadoDrawer',
      'cambiarEstadoCorazon'
    ])
  }
}
</script>

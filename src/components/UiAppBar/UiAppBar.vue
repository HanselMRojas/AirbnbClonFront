<template>
  <v-app-bar
    app
    color="white"
    elevate-on-scroll
    scroll-target="#main"
  >
    <v-app-bar-nav-icon @click="cambiarEstadoDrawer"></v-app-bar-nav-icon>

    <v-toolbar-title>Airbnb Clone</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>

    <v-btn icon @click="cambiarEstadoCorazon">
      <v-icon :color="ui.corazon ? 'red' : 'grey'">favorite</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script src="./UiAppBar.js"></script>

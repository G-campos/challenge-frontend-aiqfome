<template>
  <div class="container bg-blackout">
    <v-app-bar
        app
        color="shape_dark"
        dark
    >
      <div class="d-flex align-center">
        <v-img
            alt="Star Wars Logo"
            class="shrink mr-2"
            contain
            min-width="100"
            src="https://www.citypng.com/public/uploads/preview/-51608495204iyvpoqgita.png"
            transition="scale-transition"
            width="100"
        />

        <span class="title">
          <strong>
            CASTING
          </strong>
        </span>
      </div>

      <v-spacer></v-spacer>

      <v-btn
          href="https://github.com/vuetifyjs/vuetify/releases/latest"
          target="_blank"
          text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main class="bg">
      <router-view />
    </v-main>
  </div>
</template>

<script>
export default {
  name: "MyLayout"
}
</script>

<style scoped>
.container {
  margin: 0;
  border: 0;
}
</style>

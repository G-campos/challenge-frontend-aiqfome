<template>
  <div class="container bg-blackout">
    <v-app-bar
        app
        color="shape_dark"
        dark
        class="justify-space-between"
    >
      <div
          @click="$router.push('/')"
          class="d-flex align-center"
      >
        <v-img
            alt="Star Wars Logo"
            class="shrink mr-2"
            contain
            min-width="100"
            src="https://www.citypng.com/public/uploads/preview/-51608495204iyvpoqgita.png"
            transition="scale-transition"
            width="100"
        />

        <span class="font-tittle">
          CASTING
        </span>
      </div>

      <v-btn
        rounded
        @click="$router.push('/characters')"
      >
        <span class="text">
          <strong>PERSONAGENS</strong>
        </span>
      </v-btn>

      <v-btn
          rounded
          @click="$router.push('/films')"
      >
        <span class="text">
          <strong>FILMES</strong>
        </span>
      </v-btn>

      <v-btn
          @click="$router.push('/casting')"
          class="bordered-custom"
      >
        <span class="text">
          CADASTRAR-SE
        </span>
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

<style lang="scss" scoped>
@import "@/assets/my-styles.scss";

.container {
  margin: 0;
  border: 0;
}

.bordered-custom {
  border: solid 2px $title !important;
}

.font-tittle {
  font-family: 'StarJedi', Roboto, sans-serif;
  font-size: 20px;
  color: $title;
}
</style>

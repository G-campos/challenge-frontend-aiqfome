<template>
  <div class="container bg-blackout">
    <v-app-bar
        app
        color="shape_dark"
        dark
        class="navbar-container"
    >
      <div class="navbar">
        <div
            @click="$router.push('/')"
            class="mavbar__logo"
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

          <h1 class="font-tittle">
            CASTING
          </h1>
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
      </div>
    </v-app-bar>

    <v-main class="bg">
      <router-view />
    </v-main>
  </div>
</template>

<script>
export default {
  name: "MyLayout",

  mounted() {
    console.log('this.$router.currentRoute.path === \'/films\' => ',this.$router.currentRoute.path === '/films')
    console.log('this.$router.currentRoute.path === \'/characters\' => ',this.$router.currentRoute.path === '/characters')
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/my-styles.scss";

.container {
  margin: 0;
  border: 0;
}

.navbar-container{
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  justify-items: center;
}

.navbar {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  justify-items: center;
}

.mavbar__logo {
  display: flex;
  flex-direction: row;
  justify-content: space-around;

}

.font-tittle {
  font-family: 'StarJedi', Roboto, sans-serif;
  font-weight: bold;
  color: $title;
  padding-right: 2rem;
  justify-self: center;
}

.bordered-custom {
  border: solid 2px $title !important;
}
</style>

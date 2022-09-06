<template>
  <v-container class="container">
    <section class="characters__row-title">
      <h1 class="characters__title">PERSONAGENS</h1>
    </section>
    <section class="characters__row-input">
      <v-input
          class="characters__search"
          prepend-icon="mdi-search"
      >
        FILTRE POR NOME DO PERSONAGEM
      </v-input>
    </section>
    <section class="characters__row-characters"></section>
  </v-container>
</template>

<script>
export default {
  name: 'HomePage',

  data: () => ({
    listCharacters: [],
    nextPage: '',
    prevPage: '',
  }),

  mounted() {
    this.getCharacters()
  },

  methods: {
    async getCharacters() {
      await this.http.get('people/')
          .then((r) => {
              this.listCharacters = r.data.results
              console.log(this.listCharacters)
          })
    }
  },
}
</script>
<style lang="scss">
@import "@/assets/my-styles.scss";
.container{
  min-width: 100%;
  min-height: 100%;

  display: flex;

  flex-direction: row;
  justify-content: space-around;
}

.characters__row-title{
  justify-items: center;
}

.characters__tittle {
  font-family: 'StarJedi';
  font-size: 20px;
  font-weight: bold;
  color: $title;
  padding-right: 2rem;
  text-align: center;
  letter-spacing: 1.6px;
  opacity: 1;
}

.characters__search{
  color: $text;
  background: $shape;
}
</style>

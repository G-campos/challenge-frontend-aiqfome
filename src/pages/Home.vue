<template>
  <v-container class="container">
    <v-row class="characters__row-characters">

      <v-col cols="12">
        <h1 class="characters__title">PERSONAGENS</h1>
      </v-col>

      <v-col cols="12">
        <v-text-field
            v-model="searchCharacter"
            class="characters__search"
            dense
        >
          <template v-slot:prepend>
            <v-icon
                @click="getCharacters(searchCharacter)"
                class="characters__search-icon">
              mdi mdi-magnify
            </v-icon>
          </template>
          <template v-slot:label>
            <span class="characters__search-label">
              FILTRE POR NOME DO PERSONAGEM
            </span>
          </template>
        </v-text-field>
      </v-col>

      <characters-card
        v-for="(character, index) in listCharacters"
        :key="index + 'character'"
        :character="character"
      />
    </v-row>
  </v-container>
</template>

<script>
import CharactersCard from "@/components/CharactersCard";
export default {
  name: 'HomePage',
  components: {CharactersCard},
  data: () => ({
    listCharacters: [],
    nextPage: '',
    prevPage: '',
    searchCharacter: '',
    mesage: '',
    debouncedGetAnswer: ''
  }),


  mounted() {
    this.getCharacters()
  },

  methods: {
    async getCharacters(search) {
      let uri = search ? `/people&name=${search}` : '/people'

      await this.http.get(`${uri}`)
          .then((r) => {
            this.listCharacters = r.data.results
            return console.log('listCharacters=> ',this.listCharacters)
          }).catch((e) => {
            console.error(e)
          }).finally(() => {
              return this.mesage = ''
          })
    }
  },
}
</script>
<style lang="scss">
@import "@/assets/my-styles.scss";
.container{
  min-width: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.characters__title {
  font-family: 'StarJedi';
  font-weight: bold;
  color: $title;
  padding-right: 2rem;
  text-align: center;
  letter-spacing: 1.6px;
  opacity: 1;
}

.characters__search{
  background: $shape;
  max-width: 570px;
  border: solid 2px #606060 !important;
  color: $text;

  .characters__search-icon{
    color: $text;
  }

  .characters__search-label{
    color: $text;
  }
}

</style>

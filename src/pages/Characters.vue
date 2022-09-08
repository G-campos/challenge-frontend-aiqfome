<template>
  <v-container class="container">
    <v-row class="characters__row-sub-container">

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

      <v-row>
        <characters-card
            v-for="(character, index) in listCharacters"
            :key="index + 'character'"
            :character="character"

        />
      </v-row>

      <v-col cols="12">
        <div class="text-center">
          <v-pagination
              v-model="pagination.page"
              :length="pagination.count"
              :total-visible="4"
              color="#FFE81F"
              dark
              @previous="getCharacters(pagination.prevPage)"
              @next="getCharacters(pagination.nextPage)"
          ></v-pagination>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

import CharactersCard from "@/components/CharactersCard";
export default {
  name: 'HomePage',
  components: { CharactersCard },
  data: () => ({
    listCharacters: [],

    searchCharacter: '',
    mesage: '',
    debouncedGetAnswer: '',
    pagination:{
      page: 1,
      count: 0,
      nextPage: '',
      prevPage: '',
    }
  }),

  watch: {

  },
  mounted() {
    this.getCharacters('https://swapi.dev/api/people')
  },

  methods: {
    async getCharacters(search) {
      await axios.get(search)
          .then((r) => {
            this.listCharacters = r.data.results
            this.pagination.count = r.data.count
            this.pagination.nextPage = r.data.next
            this.pagination.prevPage = r.data.previous

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
  padding-right: 5vw;
  padding-left: 5vw;
}

.characters__row-sub-container{
  max-width: 60vw;
}

.characters__title {
  font-family: 'StarJedi';
  font-weight: bold;
  color: $title;
  text-align: center;
  opacity: 1;
}

.characters__search{
  background: $shape;
  max-width: 570px;
  border: solid 2px #606060 !important;
  color: $text;
  align-content: center;
  align-items: center;

  .characters__search-icon{
    color: $text;
  }

  .characters__search-label{
    color: $text;
  }
}

</style>

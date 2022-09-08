<template>
  <v-container class="container">
    <v-row class="films__row-sub-container">

      <v-col cols="12">
        <h1 class="films__title">FILMES</h1>
      </v-col>

      <v-col cols="12">
        <v-text-field
            v-model="searchCharacter"
            class="films__search"
            dense
        >
          <template v-slot:prepend>
            <v-icon
                @click="getCharacters(searchCharacter)"
                class="films__search-icon">
              mdi mdi-magnify
            </v-icon>
          </template>
          <template v-slot:label>
            <span class="films__search-label">
              FILTRE POR NOME DO FILME
            </span>
          </template>
        </v-text-field>
      </v-col>

      <v-row>
        <films-card
            v-for="(film, index) in listFilms"
            :key="index + 'film'"
            :film="film"

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
              @previous="getFilms(pagination.prevPage)"
              @next="getFilms(pagination.nextPage)"
          ></v-pagination>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

import FilmsCard from "@/components/FilmsCard";
export default {
  name: 'FilmsPage',
  components: { FilmsCard },
  data: () => ({
    listFilms: [],

    searchFilms: '',
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
    this.getFilms('https://swapi.dev/api/films')
  },

  methods: {
    async getFilms(search) {
      await axios.get(search)
          .then((r) => {
            this.listFilms = r.data.results
            if (r.data.next) {
              this.pagination.count = r.data.count / 5
            }
            this.pagination.nextPage = r.data.next
            this.pagination.prevPage = r.data.previous

            return console.log('getFilms=> ',this.listFilms)
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

.films__row-sub-container{
  max-width: 60vw;
}

.films__title {
  font-family: 'StarJedi';
  font-weight: bold;
  color: $title;
  text-align: center;
  opacity: 1;
}

.films__search{
  background: $shape;
  max-width: 570px;
  border: solid 2px #606060 !important;
  color: $text;
  align-content: center;
  align-items: center;

  .films__search-icon{
    color: $text;
  }

  .films__search-label{
    color: $text;
  }
}

</style>

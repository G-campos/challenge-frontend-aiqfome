<template>
  <div class="card-film__container">
    <v-row>
      <v-col cols="12">
        <h3 class="card-film__title">{{ film.title }}</h3>
        <sub>Episódio {{ convertToRoman(film.episode_id) }}</sub>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h3 class="card-film__info">INFORMAÇÕES</h3>
        <span class="card-film__info-release">LANÇADO EM: {{ film.release_date }}</span> <br>
        <span  class="card-film__info-director">DIRIGIDO POR: {{ film.director.toUpperCase() }}</span>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-btn
            @click="setCharacterState(character)"
            class="bordered-custom"
            dark
        >
        <span class="text">
          VER DETALHES
        </span>
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
/*
import axios from "axios";
import {mapActions, mapState, mapStores} from "pinia";
import {useCharacterStore} from "@/state/character";
*/

export default {
  name: "CharactersCard",
  props: {
    film: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    homeworld: {},
    listVehicles: []
  }),

  /*computed: {
    ...mapStores(useCharacterStore, useUserStore),
    // gives read access to this.count and this.double
    ...mapState(useCharacterStore, ['count', 'double']),
  },*/

  /*mounted() {
    this.getHomeworld(this.character.homeworld)

    if (this.character.vehicles.length() < 1) {
      this.getVehicle(this.character.vehicles)
    } else {
      for (const vehicle in this.character.vehicles) {
        console.log('vehicle =>', vehicle)
        this.getVehicle(vehicle)
      }
    }
  },*/

  methods: {
    // ...mapActions(useCharacterStore, ['increment']),
    convertToRoman(num) {
      const romanMatrix = [
        [9, 'IX'],
        [8, 'VIII'],
        [7, 'VII'],
        [6, 'VI'],
        [5, 'V'],
        [4, 'IV'],
        [3, 'III'],
        [2, 'II'],
        [1, 'I'],
      ];
      if (num === 0) {
        return '';
      }
      for (let i = 0; i < romanMatrix.length; i++) {
        if (num >= romanMatrix[i][0]) {
          return romanMatrix[i][1] + this.convertToRoman(num - romanMatrix[i][0]);
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/my-styles.scss";

.card-film__container{
  background: $shape;
  max-width: 570px;
  min-width: 273px;
  border: solid 2px #606060 !important;
  color: $text;
  padding: 10px;
}

.card-film__title{
  color: $title;
  opacity: 1;
}

.card-film__info{
  text-align: left;
  font: normal normal normal 18px/30px;
  letter-spacing: 0px;
  color: #FAFAFA;
  opacity: 1;
}

.card-film__info-release, .card-film__info-director {
  text-align: left;
  font: normal normal normal 14px/30px Roboto;
  letter-spacing: 0px;
  color: #FAFAFA;
  opacity: 1;
}


.bordered-custom {
  width: 100%;
  border: solid 2px $title !important;
}
</style>

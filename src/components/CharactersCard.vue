<template>
  <div class="card-character__container">
    <v-row>
      <v-col cols="12">
        <h3 class="card-character__name">{{ character.name }}</h3>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h3 class="card-character__birth">NASCIMENTO</h3>
        <span>DATA: {{ character.birth_year }}</span> <br>
        <span>PLANETA: {{ homeworld.name }}</span>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h3 class="card-character__description-physical">DESCRIÇÃO FISICA</h3>
        <span>ESPÉCIE: {{ character.birth_year }}</span> <br>
        <span>ALTURA: {{ character.height }} CENTIMETRO</span>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h3 class="card-character__vehicles">VEÍCULOS USADOS</h3>
        <span
            v-for="(vehicle, index) in listVehicles"
            :key="index + 'character'"
        >
          {{ vehicle }}
        </span> <br>
        {{ listVehicles }}
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CharactersCard",
  props: {
    character: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    homeworld: {},
    listVehicles: []
  }),

  mounted() {
    this.getHomeworld(this.character.homeworld)

    if (this.character.vehicles.length() < 1) {
      this.getVehicle(this.character.vehicles)
    } else {
      for (const vehicle in this.character.vehicles) {
        console.log('vehicle =>', vehicle)
        this.getVehicle(vehicle)
      }
    }
  },

  methods: {
    async getHomeworld(search) {
      await axios.get(`${search}`)
          .then((r) => {
            this.homeworld = r.data
            return console.log('homeworld=> ', this.homeworld)
          }).catch((e) => {
            console.error(e)
          }).finally(() => {
            return this.mesage = ''
          })
    },
    async getVehicle(search) {
      console.log('getVehicle search=> ', search)
      await axios.get(`${search}`)
          .then((r) => {
            this.listVehicles.push(r.data)
            return console.log('listVehicle=> ', this.listVehicles)
          }).catch((e) => {
            console.error(e)
          }).finally(() => {
            return this.mesage = ''
          })
    }
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/my-styles.scss";

.card-character__container{
  background: $shape;
  max-width: 570px;
  border: solid 2px #606060 !important;
  color: $text;
  padding: 10px;
}
</style>

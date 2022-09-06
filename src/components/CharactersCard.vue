<template>
  <v-card>

    {{ character }}
  </v-card>
</template>

<script>
export default {
  name: "CharactersCard",
  props: {
    character: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>

</style>

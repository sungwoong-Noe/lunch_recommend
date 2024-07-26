<script setup lang="ts">

</script>

<template>

  <v-dialog v-bind="$attrs" max-width="500px">
    <v-card>
      <v-card-actions>
        <v-btn color="primary" @click.stop="$emit('close')">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

</template>

<style scoped>

</style>
<script setup lang="ts">
import {useModal} from '@/composable/useModal';
const modal = useModal();

</script>

<template>

  <v-dialog
      v-model="modal.show.value"
      :persistent="true"
  >
    <v-card title="Dialog">
      <v-card-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
            text="Close Dialog"
            @click="$emit('close')"
        ></v-btn>
      </v-card-actions>
    </v-card>

  </v-dialog>

</template>

<style scoped>

</style>
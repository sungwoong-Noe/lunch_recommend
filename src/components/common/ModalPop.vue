<script setup lang="ts">

</script>

<template>

<!--    <v-dialog-->
<!--        width="auto"-->
<!--    >-->
<!--      <v-card-->
<!--          max-width="400"-->
<!--          prepend-icon="mdi-update"-->
<!--          text="Your application will relaunch automatically after the update is complete."-->
<!--          title="Update in progress"-->
<!--      >-->
<!--        <template v-slot:actions>-->
<!--          <v-btn-->
<!--              class="ms-auto"-->
<!--              text="Ok"-->
<!--              @click="dialog = false"-->
<!--          ></v-btn>-->
<!--        </template>-->
<!--      </v-card>-->
<!--    </v-dialog>-->
  <v-dialog v-bind="$attrs" max-width="500px">
    <v-card>
      <v-card-actions>
        <v-btn color="primary" text @click.stop="$emit('close')"
        >Close</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>

</template>

<style scoped>

</style>
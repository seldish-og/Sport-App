<template>
  <YandexMap :coordinates="map_coordinates">
    <YandexMarker :coordinates="marker_coordinates" :marker-id="123">
      <template #component>
        <MarkerDescription v-model="name" />
      </template>
    </YandexMarker>
  </YandexMap>
</template>

<script setup>
import { YandexMap, YandexMarker } from 'vue-yandex-maps'
import MarkerDescription from './components/MarkerDescription.vue';

const map_coordinates = [54.512680, 36.271831];
let marker_coordinates = [54, 36]
</script>

<style>
.yandex-container {
  height: 400px;
}

.yandex-balloon {
  height: 200px;
  width: 200px;
}
</style>
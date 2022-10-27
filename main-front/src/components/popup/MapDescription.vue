<template>
    <div>
        Команда: {{ teamValue }}
        Мероприятие: {{ eventValue }}

    </div>
  </template>
  
  <script setup>
  import defineProps from 'vue-yandex-maps'
  defineProps({
    teamValue: {
      type: String,
      default: '',
    },
    eventValue: {
        type: String,
        default: '',
    }
  });
  
  </script>
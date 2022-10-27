import { createApp } from 'vue'
import App from './App.vue'
import YmapPlugin from 'vue-yandex-maps'

const settings = {
    apiKey: '87e6da73-a03b-4f5a-8085-daa19d2357ed', // Индивидуальный ключ API
    lang: 'ru_RU', // Используемый язык
    coordorder: 'latlong', // Порядок задания географических координат
    debug: false, // Режим отладки
    version: '2.1' // Версия Я.Карт
  }

createApp(App).use(YmapPlugin, settings).mount('#app')

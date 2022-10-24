import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// global styles
import "@/assets/sass/global.sass"


// !!!!!!!!global components!!!!!!!!!!!!
import HighBtn from "@/components/button/HighBtn"
import MediumBtn from "@/components/button/MediumBtn"
import LowBtn from "@/components/button/LowBtn"


const app = createApp(App)

app.component("HighBtn", HighBtn)
app.component("MediumBtn", MediumBtn)
app.component("LowBtn", LowBtn)

app.use(router)

app.mount('#app')

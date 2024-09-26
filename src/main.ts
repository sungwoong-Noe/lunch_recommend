import '@mdi/font/css/materialdesignicons.css'
import 'reflect-metadata'

import {createApp} from 'vue'
import {createPinia} from 'pinia'

import App from './App.vue'
import router from './router'

// Vuetify
import vuetify from "@/plugins/vuetify";
import 'vuetify/styles'
import {VueQueryPlugin} from "@tanstack/vue-query";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.use(VueQueryPlugin)

app.mount('#app')

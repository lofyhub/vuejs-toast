import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
//import the Toast library here
import Toast from "vue-toastification"
import "vue-toastification/dist/index.css";


import App from './App.vue'
import router from './router'

const ToastOptions = {
    // your default options goes here
};

const app = createApp(App)

app.use(createPinia())
app.use(router)
//register the Toast plugin for global use in the application.
app.use(Toast, ToastOptions)

app.mount('#app')

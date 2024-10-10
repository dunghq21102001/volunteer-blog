import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { CoFacebookF, BiTwitter, HiMenu, BiSearch, BiCaretDownFill } from "oh-vue-icons/icons";

addIcons(CoFacebookF, BiTwitter, HiMenu, BiSearch, BiCaretDownFill);


const app = createApp(App)

app.component("v-icon", OhVueIcon);

app.use(createPinia())
app.use(router)

app.mount('#app')

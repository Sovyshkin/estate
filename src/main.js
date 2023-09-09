import './assets/base.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'


import axios from 'axios';
axios.defaults.baseURL = 'http://31.172.67.138/';

const app = createApp(App)

app.use(router)

app.mount('#app')

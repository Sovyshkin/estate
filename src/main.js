import './assets/base.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'


import axios from 'axios';
axios.defaults.baseURL = 'http://sneg-info:80';

const app = createApp(App)

app.use(router)

app.mount('#app')

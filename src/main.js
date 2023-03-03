import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import './assets/main.css'
import './index.css'
import 'tw-elements';

import 'bootstrap/dist/css/bootstrap.css'
import 'jquery/dist/jquery.min'
import 'popper.js/dist/popper.min'

import axios from "axios"


axios.defaults.baseURL = 'http://0.0.0.0:1313/api/';
axios.defaults.headers['Accept'] = 'application/json';

const app = createApp(App)

app.use(router)

app.mount('#app')

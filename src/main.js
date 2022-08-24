import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import firebase from "firebase"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCDuVTPzQy0YkOXvIAe6WCoFxec8jZMsiQ",
    authDomain: "supermarket-screep.firebaseapp.com",
    projectId: "supermarket-screep",
    storageBucket: "supermarket-screep.appspot.com",
    messagingSenderId: "146405965707",
    appId: "1:146405965707:web:8114dcb5d05a7c0d62398e"
  };

// Initialise Firebase
firebase.initializeApp(firebaseConfig);

createApp(App).use(store).use(router).mount('#app')

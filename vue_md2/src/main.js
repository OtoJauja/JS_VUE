import './assets/main.css'
import App from './App.vue'

import { createApp } from "vue";
import LandingComponent from "./components/LandingComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import NavComponent from "./components/NavComponent.vue";
import HomeComponent from "./components/HomeComponent.vue";
import SongListComponent from "./components/SongListComponent.vue";
import SongFilterComponent from "./components/SongFilterComponent.vue";
import AboutMeComponent from "./components/AboutMeComponent.vue";
import FormComponent from "./components/FormComponent.vue";

// Globally register all components
Vue.component("LandingComponent", LandingComponent);
Vue.component("HeaderComponent", HeaderComponent);
Vue.component("NavComponent", NavComponent);
Vue.component("HomeComponent", HomeComponent);
Vue.component("SongListComponent", SongListComponent);
Vue.component("SongFilterComponent", SongFilterComponent);
Vue.component("AboutMeComponent", AboutMeComponent);
Vue.component("FormComponent", FormComponent);

const app = createApp({});
app.mount("#app");
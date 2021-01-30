<template>
  <div class="div-cont-nav">
    <nav class="nav">
      <div class="lado1">
        <div class="div-cont-logo">
          <router-link class="nav-link-logo" to="/">
            <img class="logo" src="../assets/img/Logo2.svg" alt="Logo" />
          </router-link>
        </div>
      </div>

      <div class="navbar-div-cont-lado2">
        <div class="navbar-div-cont-pages">
          <router-link class="link" to="/">
            <img class="nav-icon" :src="iconHome" alt="icono-home" />
            Inicio
          </router-link>
          <router-link class="link" to="/about">
            <img class="nav-icon" :src="iconAbout" alt="icono-about" />
            Info
          </router-link>
          <div class="link">
            <img class="nav-icon" :src="iconOpt" alt="icono-options" />
            Opciones
          </div>
        </div>

        <div
          @click="displaySet"
          class="nav_settings_boton"
        >
          <img
            :class="'nav_set_icon nav-icon-'+sttingsDisplay"
            :src="iconSettings"
            alt="icono-ajustes"
          />
          <h3 class="nav-text-set">Settings</h3>
        </div>

        <div :class="'nav_div_cont_settings nav-hide-' + sttingsDisplay">
          <div @click="muteSound" :class="'nav_boton_set '+'navopt_pressed_'+ muted">
            <svg class="nav_set_icon" alt="icono-mute"  viewBox="0 0 20 20"><path d="M 15 8.59 l -2.12 -2.13 l -1.42 1.42 L 13.6 10 l -2.13 2.12 l 1.42 1.42 L 15 11.4 l 2.12 2.13 l 1.42 -1.42 L 16.4 10 l 2.13 -2.12 l -1.42 -1.42 L 15 8.6 Z M 4 7 H 0 v 6 h 4 l 5 5 V 2 L 4 7 Z" /></svg>
            <h6 class="nav_set_text">Mute</h6>
          </div>
          <div @click="storeHideRomaji" :class="'nav_boton_set '+'navopt_pressed_'+ hidenRomaji">
            <svg class="nav_set_icon" alt="icono-ocultarR"  viewBox="0 0 20 20"><path d="M 0 10 a 10 10 0 1 1 20 0 a 10 10 0 0 1 -20 0 Z m 16.32 -4.9 L 5.09 16.31 A 8 8 0 0 0 16.32 5.09 Z m -1.41 -1.42 A 8 8 0 0 0 3.68 14.91 L 14.91 3.68 Z" /></svg>
            <h6 class="nav_set_text">Romaji</h6>
          </div>
        </div>

        <div class="div-cont-displayopt">
          <div :class="'nav-div-drop ' + this.drop">
            <Dropdown></Dropdown>
          </div>

          <img
            :class="'nav-icono-menu-' + this.drop"
            :src="menu"
            alt="icono-menu"
            @click="displayDrop"
          />
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
//imports
import Dropdown from "../components/Dropdown.vue";
import { mapState,  mapMutations } from "vuex";

export default {
  name: "Navbar",
  components: {
    Dropdown,
  },
  data() {
    return {
      sttingsDisplay: false,
      drop: true,
      
      menu: require("../assets/img/icons/menu.svg"),
      iconHome: require("../assets/img/icons/home.svg"),
      iconAbout: require("../assets/img/icons/information-solid.svg"),
      iconOpt: require("../assets/img/icons/cheveron-outline-down.svg"),
      iconSettings: require("../assets/img/icons/wrench.svg"),
      mutedSound: require("../assets/img/icons/volume-off.svg"),
      hideRomaji: require("../assets/img/icons/minus-solid.svg"),
    };
  },
  computed: {
    ...mapState(['muted', 'hidenRomaji']),
  },
  methods: {
    ...mapMutations(['muteSound','storeHideRomaji']),
    dropit() {
      let aux = this.drop;
    },
    displayDrop(){
      this.drop = !this.drop
      if(this.sttingsDisplay == true) this.sttingsDisplay = false;
    },
    displaySet(){
      this.sttingsDisplay = !this.sttingsDisplay
      if(this.drop == false) this.drop = true;
    }
  },
};
</script>
<template>
  <div class="div-cont-nav">
    <nav class="nav">
      <div class="lado1">
        <div class="div-cont-logo">
          <img class="logo" src="../assets/img/Logo2.svg" alt="Logo" />
        </div>
        
      </div>


      <div class="navbar-div-cont-lado2">

        <div class="navbar-div-cont-pages">
          <router-link class="link" to="/">
          <img class="nav-icon" :src="iconHome" alt="icono-home">
          Inicio
          </router-link>
          <router-link class="link" to="/about">
          <img class="nav-icon" :src="iconAbout" alt="icon-about">
          Info
          </router-link>
          <div class="link" >
            <img class="nav-icon" :src="iconOpt" alt="icono-options">
            Opciones
            </div>
        </div>

      <div class="div-cont-displayopt">
        
        <div :class="'nav-div-drop ' + this.drop">

        <Dropdown></Dropdown>
        </div>
      
        <img :class="'nav-icono-menu-'+this.drop" :src="menu" alt="icono-menu" @click="drop = !drop">
      </div>
      </div>


    </nav>
  </div>
</template>

<script>
//imports
import Dropdown from "../components/Dropdown.vue";

export default {
  name: "Navbar",
  components: {
    Dropdown
  },
  data() {
    return {
      drop:true,
      menu: require('../assets/img/icons/menu.svg'),
      iconHome: require('../assets/img/icons/home.svg'),
      iconAbout: require('../assets/img/icons/information-solid.svg'),
      iconOpt: require('../assets/img/icons/cheveron-outline-down.svg'),
    }
  },
  methods: {
    dropit(){
      let aux = this.drop;

    }
  },
};
</script>
<template>
<div class="home-div-cont-home">
  <Navbar></Navbar>
  <div class="home-parte1">
    <div class="home-div-cont-menu">
      <div class="home-div-cont-title">
        <h2 class="home-title">Menu de practicas</h2>
      </div>
      <div class="home-div-cont-modelos">
        
        <router-link class="link-pagina" to="/model1">
        <div class="home-div-cont-modelo1 modelos">
          <div class="home-modelo-head">
            <h3 class="home-modelo-title model-text">Modelo 1</h3>
            <p class="home-modelo-related model-text">Sonido y Romaji</p>
          </div>
          <p class="home-modelo-description model-text">
            Se reproducirá la pronunciación de la letra y/o se mostrara el
            character en romaji Escriba en su cuaderno el character y presione
            revelar para comprobar su respuesta.
          </p>
        </div>
        </router-link>

        <router-link class="link-pagina" to="/model1">
        <div class="home-div-cont-modelo1 modelos">
          <div class="home-modelo-head">
            <h3 class="home-modelo-title model-text">Modelo 1</h3>
            <p class="home-modelo-related model-text">Sonido y Romaji</p>
          </div>
          <p class="home-modelo-description model-text">
            Se reproducirá la pronunciación de la letra y/o se mostrara el
            character en romaji Escriba en su cuaderno el character y presione
            revelar para comprobar su respuesta.
          </p>
        </div>
        </router-link>

        <router-link class="link-pagina" to="/model1">
        <div class="home-div-cont-modelo1 modelos">
          <div class="home-modelo-head">
            <h3 class="home-modelo-title model-text">Modelo 1</h3>
            <p class="home-modelo-related model-text">Sonido y Romaji</p>
          </div>
          <p class="home-modelo-description model-text">
            Se reproducirá la pronunciación de la letra y/o se mostrara el
            character en romaji Escriba en su cuaderno el character y presione
            revelar para comprobar su respuesta.
          </p>
        </div>
        </router-link>
      </div>
    </div>

    <div class="home-div-cont-advertaisment">Advertisment</div>
  </div>
  <Cfooter></Cfooter>
</div>
</template>

<script>
// @ is an alias to /src

import Navbar from "../components/Navbar.vue";
import Cfooter from "../components/Cfooter";

export default {
  name: "Home",
  components: {
    Navbar,
    Cfooter,
  },
};
</script>

<template>
  <div class="home-div-cont-home">
    <Navbar></Navbar>
    <div class="home-parte1">
      <div class="home-div-cont-menu">
        <div class="titulo-principal">
          <h1 class="title">Practica de Hiragana</h1>
        </div>
        <div class="model1-div-cont-adver">
          <div class="home-div-cont-modelos">
            <router-link class="link-pagina" to="/model1">
              <div class="home-div-cont-modelo1 modelos">
                <div class="home-modelo-head">
                  <h3 class="home-modelo-title model-text">Modelo 1</h3>
                  <p class="home-modelo-related model-text">Pronunciación y Romaji</p>
                </div>
                <p class="home-modelo-description model-text">
                  <ul>
                    <li>Practica de la escritura </li><br>
                    
                    <li>En su cuaderno escriba la letra correspondiente</li><br>
                    <li>Compare respuesta con la visualiuzacion</li>
                  </ul>
                </p>
              </div>
            </router-link>

            <router-link class="link-pagina" to="/model2">
              <div class="home-div-cont-modelo1 modelos">
                <div class="home-modelo-head">
                  <h3 class="home-modelo-title model-text">Modelo2</h3>
                  <p class="home-modelo-related model-text">Stylus y Romaji</p>
                </div>
                <p class="home-modelo-description model-text">
                  <ul>
                    <li>Practica de la escritura</li><br>
                    <li>Campo de escritura en pantalla</li><br>
                    <li>Con Stylus mouse o touch </li><br>
                    
                  </ul>
                </p>
              </div>
            </router-link>

            <router-link class="link-pagina" to="/model3">
              <div class="home-div-cont-modelo1 modelos">
                <div class="home-modelo-head">
                  <h3 class="home-modelo-title model-text">Modelo 3</h3>
                  <p class="home-modelo-related model-text">Target y Romaji</p>
                </div>
                <p class="home-modelo-description model-text">
                  <ul>
                    <li>Selecciona el caracter correcto</li><br>
                    <li>3 opciones para elegir</li><br>
                    <li>Compruebe su respuesta </li><br>
                    
                  </ul>
                </p>
              </div>
            </router-link>
          </div>
          <div class="home-div-cont-advertaisment">Advertisment</div>
        </div>
      </div>
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

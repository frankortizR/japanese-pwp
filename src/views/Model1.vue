<template>
  <Navbar></Navbar>
  <div class="model1-div-cont-part1">
    <div class="model1-div-cont-modelo1 modelos">
      <div class="model1-modelo-head">
        <h3 class="model1-modelo-title model1-text">Modelo 1</h3>
        <p class="model1-modelo-related model1-text">Sonido y Romaji</p>
      </div>
      <p class="modelo1-modelo-description model1-text-description">
        Se reproducirá la pronunciación de la letra y/o se mostrara el character
        en romaji Escriba en su cuaderno el character y presione revelar para
        comprobar su respuesta.
      </p>
    </div>

    <div class="model1-div-cont-separator"><hr class="model1-separator" /></div>

    <div class="model1-div-cont-practice">
      <div class="model1-div-cont-play">
        <div class="model1-icono-play" v-on:click="playSound">P</div>
        <h3 class="model1-reproducir">Reproducir pronunciacion</h3>
      </div>
      <div class="model1-div-cont-practica-conromaji">
        <div class="model1-boton-practica-conromaji">Practicar con Romaji</div>
        <h3 class="model1-texto-practica">abc</h3>
      </div>
    </div>

    <div class="model1-div-cont-separator"><hr class="model1-separator" /></div>

    <div class="model1-div-cont-answer">
      <div class="model1-div-cont-show">
        <div class="model1-texto-show">Mostrar la respuesta</div>
        <div class="model1-icono-show">?</div>
      </div>
      <div class="model1-boton-next">
          <p class="model1-boton-next-text">Next</p>
      </div>
    </div>
    <div class="home-div-cont-advertaisment">Advertisment</div>
    <Cfooter></Cfooter>
  </div>
</template>

<script>
//imports
import Navbar from "../components/Navbar.vue";
import Cfooter from "../components/Cfooter.vue"

export default {
  name: "Model1",
  components: {
    Navbar,
    Cfooter
  },
  data() {
    return {
      audioSrc:{
        uno: "../assets/audio/hiragana/a.mp3"
      },
      hiragana: [
        require('../assets/audio/hiragana/a.mp3'),
        require('../assets/audio/hiragana/i.mp3'),
        require('../assets/audio/hiragana/u.mp3'),
        require('../assets/audio/hiragana/e.mp3'),
        require('../assets/audio/hiragana/o.mp3'),
        require('../assets/audio/hiragana/ka.mp3'),
        require('../assets/audio/hiragana/ki.mp3'),
        require('../assets/audio/hiragana/ku.mp3'),
        require('../assets/audio/hiragana/ke.mp3'),
        require('../assets/audio/hiragana/ko.mp3'),
        require('../assets/audio/hiragana/sa.mp3'),
        require('../assets/audio/hiragana/shi.mp3'),
        require('../assets/audio/hiragana/su.mp3'),
        require('../assets/audio/hiragana/se.mp3'),
        require('../assets/audio/hiragana/so.mp3'),
        require('../assets/audio/hiragana/ta.mp3'),
        require('../assets/audio/hiragana/chi.mp3'),
        require('../assets/audio/hiragana/tsu.mp3'),
        require('../assets/audio/hiragana/te.mp3'),
        require('../assets/audio/hiragana/to.mp3'),
        require('../assets/audio/hiragana/na.mp3'),
        require('../assets/audio/hiragana/ni.mp3'),
        require('../assets/audio/hiragana/nu.mp3'),
        require('../assets/audio/hiragana/ne.mp3'),
        require('../assets/audio/hiragana/no.mp3'),
        require('../assets/audio/hiragana/ha.mp3'),
        require('../assets/audio/hiragana/hi.mp3'),
        require('../assets/audio/hiragana/fu.mp3'),
        require('../assets/audio/hiragana/he.mp3'),
        require('../assets/audio/hiragana/ho.mp3'),
        require('../assets/audio/hiragana/ma.mp3'),
        require('../assets/audio/hiragana/mi.mp3'),
        require('../assets/audio/hiragana/mu.mp3'),
        require('../assets/audio/hiragana/me.mp3'),
        require('../assets/audio/hiragana/mo.mp3'),
        require('../assets/audio/hiragana/ia.mp3'),
        require('../assets/audio/hiragana/iu.mp3'),
        require('../assets/audio/hiragana/io.mp3'),
        require('../assets/audio/hiragana/ra.mp3'),
        require('../assets/audio/hiragana/ri.mp3'),
        require('../assets/audio/hiragana/ru.mp3'),
        require('../assets/audio/hiragana/re.mp3'),
        require('../assets/audio/hiragana/ro.mp3'),
        require('../assets/audio/hiragana/wa.mp3'),
        require('../assets/audio/hiragana/wo.mp3'),
        require('../assets/audio/hiragana/n.mp3'),
      ],
      player: new Audio(),
      index:0
      
    }
  },
  methods: {
    playSound(){
      this.index = Math.round(Math.random()*(1+46-0)+0)
      console.log('aqui se reproduce el sonido');
      this.player.src = this.hiragana[this.index];
      this.player.play();
      console.log(this.hiragana.length);
    }
  }
};
</script>
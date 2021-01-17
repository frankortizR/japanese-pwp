<template>
  <Navbar></Navbar>
  <div class="model1-div-cont-part1">
    <div class="model1-div-cont-modelo1 modelosm">
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
        <div :class="'model1-boton-practica-conromaji ' + this.empty" v-on:click="pRomaji">
          Practicar con Romaji
        </div>
        <div class="model1-div-cont-practica">
          <div class="model1-texto-practica" :class="this.showRs">
            <h3 class="model1-texto-practica-static">abc</h3>
          </div>
          <div class="model1-texto-practica-dinamic" :class="this.showRd">
            <h3 id="dinamico-romaji"></h3>
          </div>
        </div>
      </div>
    </div>

    <div class="model1-div-cont-separator"><hr class="model1-separator" /></div>

    <div class="model1-div-cont-answer">
      <div class="model1-div-cont-show">
        <div class="model1-texto-show" v-on:click="showAns">
          Mostrar la respuesta
        </div>
        <div :class="'model1-icono-show ' + this.showAs" >
          <h3 class="model-icono-noshow">?</h3>
        </div>
        <div :class="'model1-div-imagen-answear ' + this.showAd">
          <img
            class="model1-imagen-answear"
            :src="this.hiraganaC[index]"
            alt="letra-a-hiragana"
          />
        </div>
      </div>
      <div class="model1-boton-next" v-on:click="nextOne">
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
import Cfooter from "../components/Cfooter.vue";

export default {
  name: "Model1",
  components: {
    Navbar,
    Cfooter,
  },
  data() {
    return {
      showRd: "hide",
      showRs: "",
      showAd: "hide",
      showAs: "",
      pressed: "pressed",
      empty: "",
      hiraganaS: [
        require("../assets/audio/hiragana/a.mp3"),
        require("../assets/audio/hiragana/i.mp3"),
        require("../assets/audio/hiragana/u.mp3"),
        require("../assets/audio/hiragana/e.mp3"),
        require("../assets/audio/hiragana/o.mp3"),
        require("../assets/audio/hiragana/ka.mp3"),
        require("../assets/audio/hiragana/ki.mp3"),
        require("../assets/audio/hiragana/ku.mp3"),
        require("../assets/audio/hiragana/ke.mp3"),
        require("../assets/audio/hiragana/ko.mp3"),
        require("../assets/audio/hiragana/sa.mp3"),
        require("../assets/audio/hiragana/shi.mp3"),
        require("../assets/audio/hiragana/su.mp3"),
        require("../assets/audio/hiragana/se.mp3"),
        require("../assets/audio/hiragana/so.mp3"),
        require("../assets/audio/hiragana/ta.mp3"),
        require("../assets/audio/hiragana/chi.mp3"),
        require("../assets/audio/hiragana/tsu.mp3"),
        require("../assets/audio/hiragana/te.mp3"),
        require("../assets/audio/hiragana/to.mp3"),
        require("../assets/audio/hiragana/na.mp3"),
        require("../assets/audio/hiragana/ni.mp3"),
        require("../assets/audio/hiragana/nu.mp3"),
        require("../assets/audio/hiragana/ne.mp3"),
        require("../assets/audio/hiragana/no.mp3"),
        require("../assets/audio/hiragana/ha.mp3"),
        require("../assets/audio/hiragana/hi.mp3"),
        require("../assets/audio/hiragana/fu.mp3"),
        require("../assets/audio/hiragana/he.mp3"),
        require("../assets/audio/hiragana/ho.mp3"),
        require("../assets/audio/hiragana/ma.mp3"),
        require("../assets/audio/hiragana/mi.mp3"),
        require("../assets/audio/hiragana/mu.mp3"),
        require("../assets/audio/hiragana/me.mp3"),
        require("../assets/audio/hiragana/mo.mp3"),
        require("../assets/audio/hiragana/ia.mp3"),
        require("../assets/audio/hiragana/iu.mp3"),
        require("../assets/audio/hiragana/io.mp3"),
        require("../assets/audio/hiragana/ra.mp3"),
        require("../assets/audio/hiragana/ri.mp3"),
        require("../assets/audio/hiragana/ru.mp3"),
        require("../assets/audio/hiragana/re.mp3"),
        require("../assets/audio/hiragana/ro.mp3"),
        require("../assets/audio/hiragana/wa.mp3"),
        require("../assets/audio/hiragana/wo.mp3"),
        require("../assets/audio/hiragana/n.mp3"),
      ],
      hiraganaR: [
        "a",
        "i",
        "u",
        "e",
        "o",
        "Ka",
        "Ki",
        "Ku",
        "Ke",
        "Ko",
        "Sa",
        "Shi",
        "Su",
        "Se",
        "So",
        "Ya",
        "Chi",
        "Tsu",
        "Te",
        "To",
        "Na",
        "Ni",
        "Nu",
        "Ne",
        "No",
        "Ha",
        "Hi",
        "Fu",
        "He",
        "Ho",
        "Ma",
        "Mi",
        "Mu",
        "Me",
        "Mo",
        "ia",
        "iu",
        "io",
        "Ra",
        "Ri",
        "Ru",
        "Re",
        "Ro",
        "Wa",
        "Wo",
        "n",
      ],
      hiraganaC: [
        require("../assets/img/hiragana/a.svg"),
        require("../assets/img/hiragana/i.svg"),
        require("../assets/img/hiragana/u.svg"),
        require("../assets/img/hiragana/e.svg"),
        require("../assets/img/hiragana/o.svg"),
        require("../assets/img/hiragana/ka.svg"),
        require("../assets/img/hiragana/ki.svg"),
        require("../assets/img/hiragana/ku.svg"),
        require("../assets/img/hiragana/ke.svg"),
        require("../assets/img/hiragana/ko.svg"),
        require("../assets/img/hiragana/sa.svg"),
        require("../assets/img/hiragana/shi.svg"),
        require("../assets/img/hiragana/su.svg"),
        require("../assets/img/hiragana/se.svg"),
        require("../assets/img/hiragana/so.svg"),
        require("../assets/img/hiragana/ta.svg"),
        require("../assets/img/hiragana/chi.svg"),
        require("../assets/img/hiragana/tsu.svg"),
        require("../assets/img/hiragana/te.svg"),
        require("../assets/img/hiragana/to.svg"),
        require("../assets/img/hiragana/na.svg"),
        require("../assets/img/hiragana/ni.svg"),
        require("../assets/img/hiragana/nu.svg"),
        require("../assets/img/hiragana/ne.svg"),
        require("../assets/img/hiragana/no.svg"),
        require("../assets/img/hiragana/ha.svg"),
        require("../assets/img/hiragana/hi.svg"),
        require("../assets/img/hiragana/fu.svg"),
        require("../assets/img/hiragana/he.svg"),
        require("../assets/img/hiragana/ho.svg"),
        require("../assets/img/hiragana/ma.svg"),
        require("../assets/img/hiragana/mi.svg"),
        require("../assets/img/hiragana/mu.svg"),
        require("../assets/img/hiragana/me.svg"),
        require("../assets/img/hiragana/mo.svg"),
        require("../assets/img/hiragana/ia.svg"),
        require("../assets/img/hiragana/iu.svg"),
        require("../assets/img/hiragana/io.svg"),
        require("../assets/img/hiragana/ra.svg"),
        require("../assets/img/hiragana/ri.svg"),
        require("../assets/img/hiragana/ru.svg"),
        require("../assets/img/hiragana/re.svg"),
        require("../assets/img/hiragana/ro.svg"),
        require("../assets/img/hiragana/wa.svg"),
        require("../assets/img/hiragana/wo.svg"),
        require("../assets/img/hiragana/n.svg"),
      ],
      player: new Audio(),
      index: Math.round(Math.random() * (1 + 45 - 0) + 0),
    };
  },
  methods: {
    playSound() {
      console.log("aqui se reproduce el sonido");
      this.player.play();
    },

    nextOne() {
      this.index = Math.round(Math.random() * (1 + 45 - 0) + 0);
      this.asignIndex();
      this.showAd = "hide";
      this.showAs = "";
      this.player.play();
      //this.player.src = this.hiraganaS[this.index];
    },

    pRomaji() {
      let aux;
      aux = this.showRs;
      this.showRs = this.showRd;
      this.showRd = aux;
      console.log(this.showRs);
      aux = this.pressed;
      this.pressed = this.empty;
      this.empty = aux;
    },
    asignIndex() {
      this.player.src = this.hiraganaS[this.index];
      let conRomaji = document.getElementById("dinamico-romaji");
      conRomaji.innerHTML = this.hiraganaR[this.index];
      console.log(conRomaji.innerHTML);
      console.log("created");
    },

    showAns() {
      let aux;
      aux = this.showAs;
      this.showAs = this.showAd;
      this.showAd = aux;
      console.log("mostrar respuesta");
    },
  },
  mounted() {
    this.asignIndex();
  },
};
</script>
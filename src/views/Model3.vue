<template>
  <Navbar></Navbar>
  <div class="model3-div-cont-part1">
    <div class="model3-div-cont-beforeadver">

      <div class="titulo-principal">
        <h1 class="title">Práctica de Hiragana</h1>
      </div>

      <div class="model3-div-cont-modelo1 ">
        <div class="model3-div-cont-info">
          <div class="model3-modelo-head">
            <h3 class="model3-modelo-title model3-text">Modelo B</h3>
            <img class="model3-icon-target" :src="targetmodelIcon" alt="">
          </div>
          <p class="modelo1-modelo-description model3-text-description">
            <ul>
              <li>Selecciona el caracter correcto</li><br>
              <li>3 opciones para elegir</li><br>
              <li>Compruebe su respuesta </li><br>
            </ul>
          </p>
        </div>
        <div class="model3-div-cont-configs">
          <div :class="'model3-boton-practica-auto' + this.emptyA" v-on:click="autoPressed">
            <strong>
            Start Auto
            </strong>
          </div>
          <!-- <div :class="'model3-boton-practica-mute opt' + this.mute" v-on:click="mute = !mute">
            Mute
          </div> -->
        </div>
      </div>

      <div class="model3-div-cont-separator">
        <hr class="model3-separator" />
      </div>

      <div class="model3-div-cont-practice">
        <div class="model3-div-cont-practice-content">
          <div class="model3-div-cont-practica-conromaji">
           <!--  <div :class="'model3-boton-practica-conromaji ' + this.emptyR" v-on:click="pRomaji">
              Ocultar Romaji
            </div> -->
            <div class="model3-div-cont-practica">
              <div class="model3-texto-practica" :class="this.showRs">
                <h3 class="model3-texto-practica-static">abc</h3>
              </div>
              <div class="model3-texto-practica-dinamic" :class="this.showRd">
                <h3 id="dinamico-romaji"></h3>
              </div>
            </div>
            
          </div>
          <div class="model3-div-cont-play">
            <img class="model3-icono-play" v-on:click="playSound" :src="iconPlay" alt="icono-play">
            <h3 class="model3-reproducir">Pronunciación</h3>
          </div>
        </div>

        <div class="model3-div-cont-selectorchar">
          <img @click="selectedChar(0)" :src="this.hiraganaC[charsOpt[0]]" id="model3_char1"
            :class="'model3-div-cont-char ' +'char-select-'+ select[0] +' char-right-'+ answear[0]" />
          <img @click="selectedChar(1)" :src="this.hiraganaC[charsOpt[1]]" id="model3_char2"
            :class="'model3-div-cont-char ' +'char-select-'+ select[1] +' char-right-'+ answear[1]" />
          <img @click="selectedChar(2)" :src="this.hiraganaC[charsOpt[2]]" id="model3_char3"
            :class="'model3-div-cont-char ' +'char-select-'+ select[2] +' char-right-'+ answear[2]" />
        </div>
      </div>

      <div class="model3-div-cont-separator">
        <hr class="model3-separator" />
      </div>

      <div class="model3-div-cont-answer">
        <div class="model3-div-cont-show">
          <div class="model3-texto-show" v-on:click="showAnsPressed">
            Mostrar respuesta
          </div>
          <div :class="'model3-icono-show ' + this.showAs">
            <h3 class="model-icono-noshow">?</h3>
          </div>
          <div :class="'model3-div-imagen-answear ' + this.showAd">
            <img class="model3-imagen-answear" :src="this.hiraganaC[index]" alt="letra-a-hiragana" />
          </div>
        </div>

        <div class="model3-div-cont-progresbar">
          <span :class="progres"></span>
        </div>

        <div class="model3-boton-next" v-on:click="nextOnePressed">
          <p class="model3-boton-next-text">Next</p>
        </div>
      </div>
    </div>

    <div class="home-div-cont-advertaisment">Advertisment</div>
  </div>
  <Cfooter></Cfooter>
</template>

<script>
//imports
import Navbar from "../components/Navbar.vue";
import Cfooter from "../components/Cfooter.vue";
import { mapState } from "vuex";

export default {
  name: "model3",
  components: {
    Navbar,
    Cfooter,
  },
  data() {
    return {
      charRight: Number,
      answear: ["false", "false", "false"],
      selected: Number,
      select: [],
      showRd: "",
      showRs: "hide",
      showAd: "hide",
      showAs: "",
      pressedR: "model3-pressed",
      emptyR: "",
      pressedA: "model3-pressed",
      emptyA: "",
      auto: false,
      progres: "model3-start",
      mute: false,
      interval: Number,
      canvas_with: 120,
      canvas_height: 120,
      charsOpt: [3],
      iconPlay: require("../assets/img/icons/play.svg"),
      targetmodelIcon: require("../assets/img/icons/target.svg"),
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
      index: Math.floor(Math.random() * (1 + 45 - 0) + 0),
    };
  },
  computed: {
    ...mapState(["muted", "hidenRomaji"]),
  },
  watch: {
    hidenRomaji: function (val) {
      this.romajiChecker(val);
    },
  },
  methods: {
    playSound() {
      if (this.muted == true) {
      } else this.player.play();
    },

    nextOnePressed() {
      if (this.auto == false) this.nextOneEx();
    },

    nextOneEx(control) {
      this.index = Math.floor(Math.random() * (1 + 45 - 0) + 0);
      this.asignIndex();
      this.select[0] = false;
      this.select[1] = false;
      this.select[2] = false;
      this.answear[0] = false;
      this.answear[1] = false;
      this.answear[2] = false;
      this.selected = null;
      this.showAd = "hide";
      this.showAs = "";
      if (control === true) {
        setTimeout(() => {
          let autowasactive = true;
          this.showAnsEx(autowasactive);
        }, 2000);
      }
      if (this.muted == true) {
      } else this.player.play();
    },

    asignIndex() {
      this.player.src = this.hiraganaS[this.index];
      let conRomaji = document.getElementById("dinamico-romaji");
      conRomaji.innerHTML = this.hiraganaR[this.index];
      this.insertChars();
    },

    showAnsPressed() {
      if (this.auto == false) this.showAnsEx();
    },

    showAnsEx(control) {
      let aux;
      aux = this.showAs;
      this.showAs = this.showAd;
      this.showAd = aux;
      if (control == true) this.progres = "model3-start";
      if (this.selected == this.charRight) {
        this.answear[this.selected] = "true";
      } else {
        this.answear[this.selected] = "wrong";
      }
    },
    autoPressed() {
      this.auto = !this.auto;
      // para cambiar estilo del boton
      let aux = this.pressedA;
      this.pressedA = this.emptyA;
      this.emptyA = aux;
      //intervalo
      if (this.auto == false) {
        clearInterval(this.interval);
        return false;
      }
      if (this.auto == true) {
        this.progres = "model3-end";
        let wasactivated = true;
        this.nextOneEx(wasactivated);
        this.interval = setInterval(() => {
          this.progres = "model3-end";
          this.nextOneEx(wasactivated);
        }, 4000);
      }
    },
    insertChars() {
      let indexchar1 = Math.floor(Math.random() * (1 + 2 - 0) + 0);
      let indexchar2;
      let indexchar3;
      do {
        indexchar3 = Math.floor(Math.random() * (1 + 2 - 0) + 0);
        indexchar2 = Math.floor(Math.random() * (1 + 2 - 0) + 0);
      } while (
        indexchar1 == indexchar2 ||
        indexchar1 == indexchar3 ||
        indexchar2 == indexchar3
      );
      this.charsOpt[indexchar1] = this.index;
      this.charRight = indexchar1;
      do {
        this.charsOpt[indexchar2] = Math.floor(
          Math.random() * (1 + 45 - 0) + 0
        );
        this.charsOpt[indexchar3] = Math.floor(
          Math.random() * (1 + 45 - 0) + 0
        );
      } while (
        this.charsOpt[indexchar1] == this.charsOpt[indexchar2] ||
        this.charsOpt[indexchar2] == this.charsOpt[indexchar3] ||
        this.charsOpt[indexchar1] == this.charsOpt[indexchar3]
      );
    },
    selectedChar(index) {
      this.select[0] = false;
      this.select[1] = false;
      this.select[2] = false;
      this.select[index] = !this.select[index];
      this.selected = index;
    },
    romajiChecker(val){
      if (val == false) {
        this.showRs = "hide";
        this.showRd = "";
      } else {
        this.showRs = "";
        this.showRd = "hide";
      }
    }
  },
  mounted() {
    this.asignIndex();
    this.romajiChecker(this.hidenRomaji);
    
  },
  beforeUnmount() {
    clearInterval(this.interval);
    clearInterval(this.interval - 1);
  },
};
</script>
<template>
  <div class="about-div-cont-padre">
    <Navbar/>
    <div class="about-div-cont-info">
      <h1>Acerca de nosotros</h1>
      <div class="about-div-cont-mision">
        <h2>Misión</h2>
        <p>
          El aprendizaje del idioma Japonese presenta una dificultad extra muy peculiar de pocos idiomas. <br>
          Nos presenta el reto de aprender todo un diferente sistema de escritura junto con sus reglas gramaticales como de caligracia. Este reto requiere de la primordial memorización de los caracteres pretinentes. <br>
          Comenzando con el hiragana, que es donde nuestra plataforma se enfoca.  
        </p>
        <br>
        <ul>
          <li>Se refuerza la escritura de los caracteres del Hiragana mediante un modelo donde se escucha la pronunciación
            de los caractes y se le solicita al estudiante escribir en su instrumento de escritura.
          </li><br>
          <li>Se pretende reforzar la asociacion de la pronunciación estrictamente con los caractes del Hiragana</li><br>
          <li>Se ofrece un sistema de reproducción automático para mayor comodidad. <br>
          Dispondra de 4 segundos para escribir el caracter y duramte 2 segundos se presentara la respuesta correcta</li><br>
          <li>Se ofrecen diferentes modelos de memorización para incrementar la eficiencia de cada uno, donde se recomienda utilizarlos de manera interpolada</li>
        </ul>
      </div>
      <div class="about-div-cont-vision">
        <h2>Visión</h2>
      </div>
    </div>
    <cfooter/> 
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Cfooter from "../components/Cfooter.vue";

export default {
  name:"About",
  components:{
    Navbar,
    Cfooter
  }
}
</script>

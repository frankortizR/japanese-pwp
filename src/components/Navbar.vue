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
          <router-link class="link" to="/">Inicio</router-link>
          <router-link class="link" to="/about">Info</router-link>
          <div class="link" >Opciones</div>
        </div>

      <div class="div-cont-displayopt" style="display:none;">
        <button class="displayopt-boton">B</button>
      </div>
      </div>


    </nav>
  </div>
</template>

<script>
//imports

export default {
  name: "Navbar",
  components: {},
};
</script>
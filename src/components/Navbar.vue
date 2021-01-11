<template>
    <div class="div-cont-nav">
        <nav class="">
            <Logo></Logo>
            <div class="div-cont-title">
            <h1 class="titulo">Rath-japanese practice</h1>
            </div>
            <DisplayOpt class="displayopt"></DisplayOpt>
        </nav>
    </div>
</template>

<script>
//imports
import DisplayOpt from './DisplayOpt';
import Logo from './Logo';

export default {
    name: 'Navbar',
    components: {
        DisplayOpt,
        Logo
    }
}
</script>
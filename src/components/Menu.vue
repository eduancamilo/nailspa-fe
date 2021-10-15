<template>
    <div id="contenido">
        <nav class="navbar navbar-light" style="background-color: #ffc6c7;">
            <a class="navbar-brand mb-0 h1" href="#">
                <img src="@/assets/loto.svg" alt="" width="40" height="30">Tú NailSpaWeb
            </a>
                <div id="seccion_menu">
                    <table id="navBar">
                        <tr>
                            <th><a><router-link to="/">Home</router-link></a></th>
                            <th><a><router-link to="/cliente">Cliente</router-link></a></th>
                            <th><a><router-link to="/servicios">Servicios</router-link></a></th>
                            <th><a><router-link to="/login">Login</router-link></a></th>
                        </tr>
                    </table>
                </div>
        </nav>
    </div> 
      
    
</template>
<script>
export default {
    name: 'menu'
}
</script>
<style scoped>
    .titulos {
        font-family: verdana;
        font-size: 60px;
    }
</style>
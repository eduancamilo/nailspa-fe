<template>
    <div id="contenido">
        <form class="formulario" @submit.prevent="login()" ref="loginForm">
            <h1>Login</h1>
                <div class="contenedor">
                    <div class="input-contenedor">
                        <i class="fas fa-envelope icon"></i>
                        <input type="email" id="mail" name="mail" placeholder="Correo Electronico" v-model="user.email">
                    </div>
                    <div class="input-contenedor">
                        <i class="fas fa-key icon"></i>
                        <input type="password" placeholder="Contraseña" v-model='user.password'>
                    </div>
                    <input type="submit" value="Login" class="button">
                    <p>Login para ingreso de personal TúNailSpaWeb</p>
                    <p>¿No puedes ingresar? Contacta al Adminitrador del sitio</p>
                </div>
        </form>
    
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3" 
                style="background-color: #ffc6c7;">
              <div class="col-md-4 d-flex align-items-center">
                <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                  <svg class="bi" width="30" height="24"><use xlink:href="#bootstrap"/></svg>
                </a>
                <span class="text-muted">&copy; 2021 MisionTic2022, Grupo13</span>
              </div>
          
              <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"/></svg></a></li>
                <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"/></svg></a></li>
                <li class="ms-3"><a class="text-muted" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"/></svg></a></li>
              </ul>
            </footer>
    </div>
</template>
<script>
 export default{
     data:()=>({
         user: {email:'',password:''}
     }),
     methods:{
            async login(){
             console.log(this.user);
             try {
                 const res = await this.axios.post('/login', this.user);
                 console.log(res);
    
             } catch (error) {
                 console.log('error')
                 }
         }

     }
     
    

};
</script>
<style scoped>
    .titulos {
        font-family: verdana;
        font-size: 60px;
    }
    input[type="email"],
    input[type="password"]{
        font-size: 16px;
        width: 82%;
        padding: 10px;
        border: none;
    }
    footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60px;
 
  
}
</style>

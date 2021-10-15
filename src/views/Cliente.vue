<template>
    <div id="contenido">
        <div class="container"><br>
            <h2>Agendar Citas</h2>
        </div>
                
        <div class="container">
            <div class="row">
                <div id="formulario" class="col-lg-6 col-md-6 col-sm-6 col-xs-12" @submit.prevent="citas()"> 
                    
                    <form action="https://www.w3schools.com/action_page.php" method="POST" target="_blank">
                        
                        <div class="campos-formulario form-group">
                            <label>Nombres (*)</label>
                            <input type="text" class="form-control" id="nombre" name="nombre" placeholder="Ingrese su nombre" required v-model="cita.cli_name">
                        </div>
                        <div class="campos-formulario form-group">
                            <label>Apellidos (*)</label>
                            <input type="text" class="form-control" id="apellidos" name="apellidos" placeholder="Ingrese su apellido" required v-model="cita.cli_lastname">
                        </div>
                        <div class="campos-formulario form-group">
                            <label>Fecha de cita (*)</label>
                            <input type="text" class="form-control" id="Fecha de cita" name="Fecha de cita"  v-model="cita.c_date">
                        </div>
                        <div class="campos-formulario form-group">
                            <label>Hora de cita (*)</label>
                            <input type="text" class="form-control" id="Hora de cita" name="Hora de cita" placeholder="Ingrese hora de cita" required v-model="cita.c_time">
                        </div>
                        <div class="campos-formulario form-group">
                            <label>Correo electrónico (*)</label>
                            <input type="email" class="form-control" id="mail" name="mail" placeholder="Correo electrónico" required v-model="cita.email">
                        </div>
                        <div class="campos-formulario form-group">
                            <label>Dirección (*)</label>
                            <input type="text" class="form-control" id="direccion" name="direccion" placeholder="Ingrese su dirección" required v-model="cita.cli_address">
                        </div>
                        <div class="campos-formulario form-group">
                            <label>Telefono</label>
                            <input type="text" class="form-control" id="telefono" name="telefono" placeholder="Telefono"  v-model="cita.cli_telephone">
                        </div> 
                        <div class="campos-formulario form-group">
                            <label>Estilo No.</label>
                            <input type="text" class="form-control" id="estilo" name="estilo" placeholder="Digite No. del Estilo encontrado en Servicios" v-model="cita.c_s_id" >
                        </div> 
                        <div class="campos-formulario form-group">
                            <label>Si deseas adjunta tu diseño en formato .PNG &nbsp;</label>
                            <input type="file" class="form-control-file" id="foto" name="foto" accept=".png">
                        </div>
                        <div class="campos-formulario form-group">
                            <div class="form-check">
                                <label>He leído y acepto el tratamiento de mis datos</label>
                                <input type="checkbox" class="form-check-input is-invalid" id="tratamiento_datos" name="tratamiento_datos" required>
                                <div class="invalid-feedback">
                                    Campos con (*) son oligatorios                                    
                                </div>
                            </div>
                        </div>
                        <div class="campos-formulario form-group">
                            <input type="submit" class="btn btn-primary" value="Registrar">
                            <br><br>
                        </div>
                    </form>
                </div>
            </div>
        </div>

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

export default {
  data:()=>({

      cita:{cli_name:'',cli_lastname:'',c_date:'',c_time:'',email:'',cli_address:'',cli_telephone:'',c_s_id:'',c_u_id:'2',c_cli_id:'104'}

  }),
  methods:{
       async citas(){
           try {
                 const res = await this.axios.post('aliado/cita',this.cita);
                 console.log(res);
            
             } catch (error) {
                 console.log('error')
                 
             }
      }
      
  }
}
</script>
<style scoped>
    .campos-formulario {
        margin-bottom: 10px;
        margin-top: 10px;
        margin-left: 30px;
        
    }
    
</style>
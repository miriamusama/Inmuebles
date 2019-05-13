
class Programa{
    
    static main(){
        document.querySelector("#ConsultarBoton").setAttribute("onclick","Programa.consultarInmueble()");
        
               
    }
    
    static consultarInmueble(){
        console.log("Se está ejecutando una consulta");
        fetch("ConsultaInmuebles",{"method":"GET"});
                 
    }
  
}

Programa.main();


//validación en javascript


function validarForm(){

    var expRegNombre=/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var expRegCorreo=/^\w+@(\w+\.)+\w{2,4}$/; 
  
  
    var nombre = document.getElementById("nombre");
    var correo = document.getElementById("correo");

    //Campo nombre
    if(!nombre.value)
    {
    alert("El campo nombre es requerido");
    nombre.focus();
    return false;
    }
    if (!expRegNombre.exec(nombre.value))
    {
        alert("El campo nombre solo admite letras y espacios.")
        nombre.focus();
        return false;
    }
       
  
       //campo email
       if(!correo.value)
       {
        alert("El campo correo es requerido");
        correo.focus();
        return false;
       }
       if(!expRegCorreo.exec(correo.value))
       {
         alert("El campo correo no tiene el formato correcto.")
         correo.focus();
         return false;
       }
 
}
    
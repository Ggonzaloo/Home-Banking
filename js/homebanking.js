//Declaración de variables

var nombreUsuario = prompt("Bienvenido! ¿Cómo te llamas?")
var saldoDisponible = 10000;
var limiteExtraccion = 3000;
var codigoDeSeguridad = 1234;


//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
  cargarNombreEnPantalla();
  actualizarSaldoEnPantalla();
  actualizarLimiteEnPantalla();
  iniciarSesion();
}



function iniciarSesion() {

    if (nombreUsuario !== null && nombreUsuario !== "") {
      var codigoUsuario = parseInt(prompt("Por favor " + nombreUsuario + " ingrese su código de seguridad"));
      if (codigoUsuario == codigoDeSeguridad) {
        alert("Bienvenido/a " + nombreUsuario + " ya puedes comenzar a realizar operaciones.");
        return true;
      } else {
        alert("Código incorrecto." + "\n" + "Por favor ingrese su código nuevamente");
        return false;
      }
      return true;
    } else {
      alert("Por favor ingrese su usuario para iniciar sesion");
      nombreUsuario = prompt("Bienvenido! ¿Cómo te llamas?");
      return false;
    }

}





if (iniciarSesion() === true) {

  function extraerDinero(dineroAExtraer) {

    function restarSaldo(dineroResta) {

      saldoDisponible = saldoDisponible - dineroResta;
      saldoAnterior = saldoDisponible + dineroResta;
      return saldoAnterior;

    }

    function haySaldoDisponible(dineroAExtraer) {
      if ((dineroAExtraer <= saldoDisponible) && (dineroAExtraer <= limiteExtraccion) && (dineroAExtraer % 100 == 0) && (dineroAExtraer > 0)) {
        return true;
      } else {
        return false;
      }
    }

      var dineroAExtraer = parseInt(prompt("¿Cuanto dinero quieres extraer?"));
      if (esNumero(dineroAExtraer)) {
        dineroAExtraer = parseInt(dineroAExtraer);
        if(haySaldoDisponible(dineroAExtraer) == true){
          restarSaldo(dineroAExtraer);
          actualizarSaldoEnPantalla();
          alert("Has extraido: $" + dineroAExtraer + "\n" + "Tu saldo anterior es de: $" + saldoAnterior + "\n" +
            "Tu saldo actual es de: $" + saldoDisponible);
        } else if (dineroAExtraer > saldoDisponible){
          alert("No posee suficiente dinero en la cuenta");
        } else if (dineroAExtraer > limiteExtraccion) {
          alert("Ha sobrepasado el limite de extracción permitido");
        } else if (dineroAExtraer % 100 != 0) {
          alert("solo es posible billetes de 100");
        } else if (dineroAExtraer <= 0) {
          alert("No es posible realizar la operacion. Por favor verifique que el valor ingresado no sea un número negativo");
        }
      }

  }

  function depositarDinero(dineroADepositar) {

    function sumarSaldo(dineroSuma) {
      saldoDisponible = saldoDisponible + dineroSuma;
      saldoAnterior = saldoDisponible - dineroSuma;
      return saldoAnterior;
    }

    var dineroADepositar = parseInt(prompt("¿Cuanto dinero quieres depositar?"));
    if (esNumero(dineroADepositar) && (dineroADepositar > 0)) {
      dineroADepositar = parseInt(dineroADepositar);
      sumarSaldo(dineroADepositar);
      actualizarSaldoEnPantalla();
      alert("Has depositado: $" + dineroADepositar +
      " \n" + "Tu saldo anterior es de: $" + saldoAnterior +
      "\n" + "Tu saldo actual es de: $" + saldoDisponible);
    } else if (dineroADepositar <= 0) {
      alert("No es posible realizar la operacion. Por favor verifique que el valor ingresado no sea un número negativo");
    }

  }

  function pagarServicio() {
      var precio = 0;
      var agua = 350;
      var teléfono = 425;
      var luz = 210;
      var internet = 570;
      var servicios = parseInt(prompt("Ingrese el numero que corresponde con el servicio que desea pagar:\n 1.Agua \n 2.Luz \n 3.Internet \n 4.Teléfono"));

      if (esNumero(servicios)) {
        switch (servicios) {
          case 1:
          precio = agua; servicio = "Agua";
            break;
          case 2:
            precio = luz; servicio = "Luz";
            break;
          case 3:
            precio = internet; servicio = "Internet";
            break;
          case 4:
            precio = teléfono; servicio = "Teléfono";
            break;
            default:
              alert("Ha ingresado un valor incorrecto. Por favor vuelva a intentarlo e ingrese el número del servicio que desea pagar");
        }
        if (agua <= saldoDisponible) {
          saldoDisponible = saldoDisponible - precio;
          saldoAnterior = saldoDisponible + precio;
          actualizarSaldoEnPantalla();
          alert("Has pagado el serivio de "+servicio+"." + "\n" + "Has extraido: $" + precio + "\n" + "Tu saldo anterior es de: $" + saldoAnterior + "\n" +
            "Tu saldo actual es de: $" + saldoDisponible);
          } else {
          alert("No posee dinero suficiente para pagar este servicio");
          }
      }



  }

  function cambiarLimiteDeExtraccion(limiteDeExtraccionUsuario) {
    var limiteDeExtraccionUsuario = parseInt(prompt("¿De cuanto deseas que sea tu limite de extracción?"));
    if (esNumero(limiteDeExtraccionUsuario) && (limiteDeExtraccionUsuario > 0)) {
        limiteDeExtraccionUsuario = parseInt(limiteDeExtraccionUsuario);
        limiteExtraccion = limiteDeExtraccionUsuario;
        actualizarLimiteEnPantalla();
        alert("Su nuevo limite de extracción es de: $" + limiteDeExtraccionUsuario);
    } else if (limiteDeExtraccionUsuario < 0) {
      alert("Solo es posible numeros positivos");
    }


  }

  function transferirDinero() {
      var cuentaAmiga1 = 1234567;
      var cuentaAmiga2 = 7654321;
      var montoATransferir = parseInt(prompt("¿Cuánto dinero desea trasferir?"));

      if (esNumero(montoATransferir)) {
        montoATransferir = parseInt(montoATransferir);
        if ((montoATransferir <= saldoDisponible) && (montoATransferir > 0)) {
        var cuentas = parseInt(prompt("Ingrese el número de cuenta al cual desea transferir el dinero" + "\n" + "Cuenta amiga 1: 1234567" + "\n" + "Cuenta amiga 2: 7654321" ));
          if (cuentas == cuentaAmiga1) {
          saldoDisponible = saldoDisponible - montoATransferir;
          saldoAnterior = saldoDisponible + montoATransferir;
          alert("Se han transferido $:" + montoATransferir + "\n" + "Cuenta destino: " + cuentaAmiga1);
          alert("Tu saldo actual es de $: " + saldoDisponible);
          actualizarSaldoEnPantalla();
        } else if (cuentas == cuentaAmiga2) {
          saldoDisponible = saldoDisponible - montoATransferir;
          saldoAnterior = saldoDisponible + montoATransferir;
          alert("Se han transferido $:" + montoATransferir + "\n" + "Cuenta destino: " + cuentaAmiga2);
          alert("Tu saldo actual es de $: " + saldoDisponible);
          actualizarSaldoEnPantalla();
        } else {alert("No es posible transferir dinero a esa cuenta. Por favor ingrese el numero de una cuenta amiga");}

      } else if (montoATransferir > saldoDisponible) {
        alert("No posee ese dinero en la cuenta. Por favor, intentelo nuevamente");
      } else if (montoATransferir <= 0) {
        alert("No es posible realizar la operacion. Por favor verifique que el valor ingresado no sea un número negativo");
      }

      }


  }

} else if (iniciarSesion() !== true) {
  //iniciarSesion();
  saldoDisponible = 0;
  limiteExtraccion = 0;
  nombreUsuario = "Usuario bloqueado";
  alert("Has introducido erroneamente tu codigo de seguridad. Hemos bloqueado su cuenta por razones de seguridad. Por favor intentelo más tarde.");
}




function esNumero(monto) {
  if(monto == null || monto == "") {
    return false;
  } else {
    monto = parseInt(monto);
    if(isNaN(monto)) {
      alert("Solo se admiten valores numéricos positivos.\nOperación cancelada.");
      return false;
    } else {
      return true;
    }
  }
}


//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoDisponible;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}

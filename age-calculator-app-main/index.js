const btnCalcularEdad = document.getElementById("calcular-edad");
btnCalcularEdad.addEventListener("click", calcularEdad);

function calcularEdad() {
    const hoy = new Date();
    const diaNac = document.getElementById("dia").value;
    const mesNac = document.getElementById("mes").value - 1; // mes comienza en 0
    const anioNac = document.getElementById("anio").value;
    
    const fechaNac = new Date(anioNac, mesNac, diaNac);
    
    let edadAnios = hoy.getFullYear() - fechaNac.getFullYear();
    let edadMeses = hoy.getMonth() - fechaNac.getMonth();
    let edadDias = hoy.getDate() - fechaNac.getDate();
    
    if(!diaNac || !mesNac || !anioNac){
        alert("Por favor ingrese la fecha de nacimiento")
        return;   

    }
    // Si aún no ha pasado el cumpleaños, restar un año y ajustar los meses y días
    
    if (edadMeses < 0 || (edadMeses === 0 && edadDias < 0)) {
      edadAnios--;
      edadMeses = 12 + edadMeses;
      if (edadDias < 0) {
        const ultimoDiaMesAnterior = new Date(hoy.getFullYear(), hoy.getMonth(), 0).getDate();
        edadDias = ultimoDiaMesAnterior + edadDias;
      }
    }

    document.getElementById("anios").innerHTML = `${edadAnios} <span style="color: black;">años</span>`;
    document.getElementById("meses").innerHTML = `${edadMeses} <span style="color: black;">meses</span>`;
   document.getElementById("dias").innerHTML = `${edadDias} <span style="color: black;">días</span>`;   
    
    
    //Limpiar los input
    document.querySelectorAll('input').forEach(input => input.value = '');
}



  
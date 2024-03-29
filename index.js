function calcular() {
  const total = document.getElementById("total").value;
  const hombre = document.getElementById("hombre").value;
  const mujer = document.getElementById("mujeres").value;

  if (!validar(total, hombre, mujer)) {
    return;
  }

  const p1 = hombre / total;
  const p2 = mujer / total;

  const q1 = 1 - p1;
  const q2 = 1 - p2;

  const largaNegativa =
    p1 - p2 - 1.64 * Math.sqrt((p1 * q1) / total + (p2 * q2) / total);
  const largaPositiva =
    p1 - p2 + 1.64 * Math.sqrt((p1 * q1) / total + (p2 * q2) / total);

  const redondeo1 = Math.round(largaNegativa * 10000) / 10000;
  const redondeo2 = Math.round(largaPositiva * 10000) / 10000;
  document.getElementById("negativo").value = redondeo1;
  document.getElementById("positivo").value = redondeo2;

  document.getElementById("negativo2").value = redondeo1;
  document.getElementById("positivo2").value = redondeo2;
}

function validar(total, hombre, mujer) {
  if (!total || !hombre || !mujer) {
    alert("Uno o varios campos estan vacios");
    return false;
  }
  if (isNaN(total) || isNaN(hombre) || isNaN(mujer)) {
    alert("Los datos deben ser numericos");
    return false;
  }
  const totalInput = parseInt(hombre) + parseInt(mujer);
  if (totalInput > total) {
    alert("La suma de hombres y mujeres es mayor al total");
    return false;
  }
  return true;
}

const doctores = [
  "Lozano",
  "Pérez",
  "Mascanfroni",
  "Langoni",
  "Huergo",
  "López",
  "Iga",
  "Kanemann",
  "Huespe",
  "Troglio",
];

const hora = [
  "08:00 hs",
  "09:00 hs",
  "10:00 hs",
  "11:00 hs",
  "12:00 hs",
  "13:00 hs",
  "14:00 hs",
  "15:00 hs",
  "16:00 hs",
  "17:00 hs",
  "18:00 hs",
  "19:00 hs",
  "20:00 hs",
];
const fecha = [
  "14/06/2023",
  "15/06/2023",
  "16/06/2023",
  "17/06/2023",
  "18/06/2023",
  "19/06/2023",
  "20/06/2023",
  "21/06/2023",
  "22/06/2023",
  "23/06/2023",
  "24/06/2023",
  "25/06/2023",
  "26/06/2023",
  "27/06/2023",
  "28/06/2023",
  "29/06/2023",
  "30/06/2023",
];

let card = document.querySelector("#card");

const generarTurno = document.querySelector(".generarTurno");

generarTurno.addEventListener("click", (e) => {
  e.preventDefault();

  let doctorRandom = Math.floor(Math.random() * doctores.length);
  let horaRandom = Math.floor(Math.random() * hora.length);
  let fechaRandom = Math.floor(Math.random() * fecha.length);
  let turnoCreado = {
    doctor: doctores[doctorRandom],
    hora: hora[horaRandom],
    fecha: fecha[fechaRandom],
  };

  const resultadoTurno = document.getElementById("resultadoTurno");
  resultadoTurno.innerHTML = `<h3>Doctor: ${turnoCreado.doctor}</h3> <h3>Hora: ${turnoCreado.hora} </h3><h3>Fecha: ${turnoCreado.fecha}</h3> <input class=btnAgenda type=button value=Agendar turno>`;

  resultadoTurno.style.display="block";

  let turnosGuardados = localStorage.getItem("turnos");
  if (turnosGuardados) {
    turnosGuardados = JSON.parse(turnosGuardados);
  } else {
    turnosGuardados = [];
  }

  turnosGuardados.push(turnoCreado);

  localStorage.setItem("turnos", JSON.stringify(turnosGuardados));
});

function excuseGenerator() {
  let who = ["Mi perro", "Mi vecina", "Mi pc", "Mi loro"];
  let action = ["rayó", "se comió", "rompió", "borró"];
  let what = ["mi tarea", "mi trabajo", "el informe", "las llaves"];
  let when = [
    "justo antes de la clase",
    "cuando iba saliendo",
    "al terminar ",
    "mientras fui a comprar",
    "antes de levantarme"
  ];

  let a = Math.floor(Math.random() * who.length);
  let b = Math.floor(Math.random() * action.length);
  let c = Math.floor(Math.random() * what.length);
  let d = Math.floor(Math.random() * when.length);

  return `${who[a]} ${action[b]} ${what[c]} ${when[d]} !`;
}

window.onclick = function() {
  document.querySelector("#excusa").innerHTML = excuseGenerator();
};

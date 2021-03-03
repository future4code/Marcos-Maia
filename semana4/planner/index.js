let criarTarefa = () => {
  let novaTarefa = document.querySelector("#tarefa");
  let seletorDiaDaSemana = document.querySelector("#dias-semana");
  let divSemana = document.querySelector(`#${seletorDiaDaSemana.value}`);
  divSemana.innerHTML += "<p>" + novaTarefa.value + "</p>";

  novaTarefa.value = "";

  let p = document.querySelectorAll("p");

  for (let item of p) {
    item.addEventListener("click", event => {
      item.style.textDecoration = "line-through";
    });
  }
  let p2 = document.getElementsByTagName("p");

  for (let item of p) {
    item.addEventListener("click", (event) => {
      item.style.color = "red";
    });
  }
};

let limparTarefa = () => {
  let p = document.querySelectorAll("p");

  p.forEach(event => {
      event.remove()
  });

//   for (item of p) {
    // item.textContent = ''
//     item.remove();
//   }
};

//???selecionar msm elmto pra funcoes dif.

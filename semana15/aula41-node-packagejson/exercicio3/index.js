
/*
Crie uma aplicação Node que receba uma string representando
 **uma tarefa.** O programa deve adicionar a **nova tarefa** 
 em uma variável que represente uma **lista de tarefas.** 
 A lista de tarefas pode estar criada antes da execução do código. 
 Após adicionar o item à lista, exiba a lista atualizada.  
*/


console.log(`Insira npm run start "tarefa" a ser inserida à lista`)

let tarefas = ["banana"]

tarefas.push(process.argv[2])

console.log(tarefas)
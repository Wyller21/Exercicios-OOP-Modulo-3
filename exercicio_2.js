/*Dando seguimento ao primeiro desafio, usando o THIS programe:

Se a pessoa ingerir (comer) mais de 7.000 kcal engorda 1 kg. Mande ela treinar!
Se a pessoa gastar (treinar) mais de 7.000 kcal emagrece 1 kg. 
*/

const pessoa = {

nome: "Wyller Faria",
peso: 98,
pizza: 0.5,
bk: 0.3,
tapioca: 0.1,
andar: 0.25,
caminhar_uma_semana: 1,

comer: function(alimento) {
    this.peso += alimento
    if (this.peso <= 80) {    
    return "Novo peso é:" + this.peso.toFixed(2);
    }

    else {
        return "Vai treinar! " + this.peso.toFixed(2);
    }
},

treinar: function(exercicio) {
    this.peso -= exercicio
    return "Após o exercício o novo peso é: " + this.peso.toFixed(2);
},

}


console.log(pessoa);
console.log(pessoa.comer(pessoa.pizza));
console.log(pessoa.treinar(pessoa.andar));






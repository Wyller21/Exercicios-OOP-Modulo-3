console.log("Calculadora");

const CALCULADORA = (function () {

    var calculadora = {
        resultado: 0,
        historico: [],

    }

    calculadora.soma = function(num1, num2) {    
        calculadora.resultado =  (num1 + num2)
        calculadora.historico.push(`${num1} + ${num2} = ${calculadora.resultado}`)
        return `A soma de: ${num1} + ${num2} = ${calculadora.resultado}`;   
    }

    calculadora.subtracao = function(num1, num2) {    
        calculadora.resultado =  (num1 - num2)
        calculadora.historico.push(`${num1} - ${num2} = ${calculadora.resultado}`)
        return `A subtração de: ${num1} - ${num2} = ${calculadora.resultado}`;   
    }


    calculadora.multiplicacao = function(num1, num2) {    
         calculadora.resultado =  (num1 * num2)
         calculadora.historico.push(`${num1} * ${num2} = ${calculadora.resultado}`)
         return `A multiplicação de: ${num1} * ${num2} = ${calculadora.resultado}`;       
    }
    
    
    calculadora.divisao = function(num1, num2) {
        if (num1 == 0 || num2 == 0) {
            return "Operação inválida."
        } else {
            calculadora.resultado =  (num1 / num2)
            calculadora.historico.push(`${num1} / ${num2} = ${calculadora.resultado}`)
            return `A divisão de: ${num1} / ${num2} = ${calculadora.resultado}`;       
        }
    }
        
    return {
        
        historico: calculadora.historico,
        resultado: calculadora.resultado,
        soma: calculadora.soma,
        subtracao: calculadora.subtracao,
        multiplicacao: calculadora.multiplicacao,
        divisao: calculadora.divisao,
    }
  
})();

console.log(CALCULADORA);








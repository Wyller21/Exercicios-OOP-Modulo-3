console.log("Exercício conta banco.");

//Objeto;

function Conta(agencia=0, numero=0, saldo=0, cpf=0, nome=null, tipo="cc") {
this.nome = nome;
this.cpf = cpf;
this.agencia = agencia;
this.saldo = saldo;
this.numero = numero;
this.tipo = tipo;
this.lancamento = [];
}

//Metodos;

Conta.prototype.extrato = function() {
    return this.lancamento;
}

Conta.prototype.saldoAtual = function() {
    return this.saldo;
}
  
Conta.prototype.depositar = function(valor) {
    this.lancamento.push(valor);
    return "Depósito: " + (this.saldo += valor);
}
  
Conta.prototype.sacar = function(valor) {
    if (this.saldo >= valor) {
        this.lancamento.push(valor);
        return "Saque: " + (this.saldo -= valor);
    }
  
    return "Saldo Insuficiente!";
}

Conta.prototype.transferir = function(valor, conta) {
    this.lancamento.push(valor);
    this.sacar(valor); // origem
    conta.depositar(valor); // destino
    return "transferência: " + this.saldo;
}

const contaKaren = new Conta(7414, 2122, 100000, 789456, "Karen Jovino", "CC");

console.log(contaKaren);


const contaWyller = new Conta(0001, 0833, 100, 321654, "Wyller Faria", "CC");

console.log(contaWyller);
console.log(contaWyller.saldo);
console.log(contaWyller.depositar(1000));
console.log(contaWyller.sacar(200));
console.log(contaWyller.transferir(250, contaKaren));
console.log(contaWyller.lancamento);





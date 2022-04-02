import { Animal } from "./mundoAnimal.js";

class Papagaio extends Animal {
    constructor (filo = null, classe = null, ordem = null, raca = null, animalDomestico = true, peso = 0, expectativaVida = 0, corPenas = null) {

        super(filo, classe, ordem, raca, animalDomestico, peso, expectativaVida);
        this.corPenas = corPenas;
    }
    
    #corPenas

    som(){
        return "Curupacu! Curupacu! Curupacu!"
    }

    dormir(){
        return "zzzzzzz...";
    }

    comer(){
        return "Nham Nham!"
    }
    
    voar(){
        return "I Believe, I can fly!"
    }

}

export { Papagaio };

class Animal {
    constructor(filo = null, classe = null, ordem = null, raca = null, animalDomestico = true, peso = 0, expectativaVida = 0) {
    this.filo = filo;
    this.classe = classe;
    this.ordem = ordem;
    this.raca = raca;
    this.animalDomestico = animalDomestico;
    this.peso = peso;
    this.expectativaVida = expectativaVida;
    }

    #filo
    #classe
    #ordem
    #raca
    #animalDomestico
    #peso
    #expectativaVida
    
    som(){
        return "Som característico do animal."
    }

    dormir(){
        return "zzzzzzzz";
    }

    comer(){
        return "nham nham!"
    }
        

}

export { Animal };



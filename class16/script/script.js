// Introdução a POO
// atribuir = set / apresentar = get | getters e setters

class Animal {
    constructor() {
        this.nome = '';
        this.idade = '';
    }

    setNome(nome) {
        this.nome = nome;
    }

    setIdade(idade) {
        this.idade = idade;
    }

    getNome() {
        return this.nome;
    }

    getIdade() {
        return this.idade;
    }
}

let animal1 = new Animal();
animal1.setIdade(15);
animal1.setNome('Nino');
animal1.getNome;
animal1.getIdade;

let animal2 = new Animal();
animal2.setIdade(4);
animal2.setNome('Tuc');
animal2.getNome;
animal2.getIdade;

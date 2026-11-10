const prompt = require('prompt-sync')();
class livro {  // classe 
    #titulo;
    #avaliacao;

    constructor(titulo, genero, paginas, emprestimo, avaliacao) {
        
        this.#titulo = titulo
        this.genero = genero;
        this.paginas = paginas;
        this.emprestimo = emprestimo;
        this.disponivel = false; //Estado inicial
        // this.diasAtraso = 0;
        
        this.#avaliacao = avaliacao;
    }

    get titulo() {
        return this.#titulo;
    }

    get avaliacao() {
        return this.#avaliacao;
    }

    set avaliacao(novaNota) {
        if (novaNota >= 0 && novaNota <= 5) {
            this.#avaliacao = novaNota;
            console.log("A nota é " + novaNota + " estrelas!")
        } else {
            console.error("A nota deve ser entre 0 e 5!");
        }
    }

    diasAtraso() {

        // if (this.diasAtraso === true ) { // Condicional
        //     this.diasAtraso += 5;
        //     console.log(` O ${this.nome} está + ${this.diasAtraso} + atrasado`); // entender isso aqui (?)
        // } else {
        //     console.log ();
        // }
    }
    disponibilidade() {
        if (this.disponivel === false) {
            console.log(`O ${this.titulo} está disponível para emprestado!`);
        } else {
            console.log(`O ${this.titulo} está indisponível para empréstimo!`);
        }
    }
}

const meuLivro = new livro("Pequeno Príncipe", "Infantojuvenil", "53", "R$12.00");
console.log(`livro: ${meuLivro.titulo}, gênero: ${meuLivro.genero}, páginas: ${meuLivro.paginas}, empréstimo: ${meuLivro.emprestimo}`);
meuLivro.avaliacao = 4.8;
meuLivro.disponibilidade();
// const meuLivro2 = new livro("Eragon", "Ficção", "468", "R$25.00");
// console.log(`livro: ${meuLivro2.nome}, gênero: ${meuLivro2.genero}, páginas: ${meuLivro2.paginas}, empréstimo: ${meuLivro2.emprestimo}`);


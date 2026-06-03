// class Produto{
//     constructor(nome, preco) {
//         this.nome = nome;
//         this.preco = preco;
//     }



// exibirInfo() {
//     return `${this.nome} custa R$ ${this.preco}`;

// }
// }

// const Camisa = new Produto('Camisapica', 50)
// const avon = new Produto('Perfume', 50)

// console.log(Camisa.exibirInfo())
// console.log(avon.exibirInfo())

// class carrinho{
//     constructor(){
//         this.itens = [];
//     }


// adicionarProduto(Produto){
//     this.itens.push(Produto);
// }

// calcularTotal(){
//     return this.itens.reduce((total, p ) => total + p.preco, 0); 
// }
// }

// const celular = new Produto("Iphone", 5000)
// const meuCarrinho = new carrinho();
// meuCarrinho.adicionarProduto(celular)

// console.log(meuCarrinho)

//imperativo
// let Alunos = [
//   { nome:'Ana', nota: 8 }, { nome:'Bruno', nota: 6 },  { nome:'Carla', nota: 9 }
// ];


// let somaNotas = 0;
// let aprovados = [];


// for (let i = 0; i < Alunos.length; i++) {
//     somaNotas += Alunos[i].nota;

//     if (Alunos[i].nota >= 7) {
//         aprovados.push(Alunos[i])
//     }
// }



//funcional 

class Aluno {
    constructor(nome, nota){
        this._nome = nome;
        this._nota = nota
    }
    estaAprovado(){
        let aprovado = this._nota >= 7;
        return aprovado
    }
}

class Turma {
    constructor(listaDeAlunos = []) {
        this.Alunos = listaDeAlunos;
    }

    gerarRelatorio(){
        return this.Alunos.filter((Aluno) => Aluno.estaAprovado())
    }

    adicionarAluno(Aluno){
        if(typeof Aluno.estaAprovado !== "function"){
            throw new Error("o objeto nao tem o metodo necessario")
        }
        let addAluno = new Aluno
        this.Aluno.push(addAluno)
    }

    adicionarAlunoEmMassa(Aluno){
        alunosEmMassa = new Aluno
        listaAluno.forEach(Aluno => {
        this.adicionarAluno.push(Aluno)  
        });

        
    }
}
    
let listaAluno = [
  { nome: "Flavio", nota: 3.5 },
  { nome: "Patrick",  nota: 5.2 },
  { nome: "Lucas",  nota: 7.0 },
  { nome: "Robson",  nota: 6.9 },
  { nome: "Mario", nota: 9.3 }
]

let novaListaAlunos = []
listaAluno.forEach((Aluno) => {
    let novoAluno = Aluno(Aluno.nome, Aluno.nota)
    alunosInstanciados.push(addAluno)
})



let addAluno = new Aluno ("vitor", 7)
let cajuhub = new Turma()
cajuhub.adicionarAlunoEmMassa(Aluno)
cajuhub.adicionarAluno(addAluno)
console.log(cajuhub)



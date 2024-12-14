const livros = [
    {
        nome: "Donnie Darko",
        autor: "Richard Kelly",
        genero: "Ficção Científica",
        disponibilidade: true
    },

    {
        nome: "Manifesto Comunista",
        autor: "Karl Marx e Friedrich Engels",
        genero: "Ciência Política",
        disponibilidade: false
    }
];

function buscandoporgenero (livros, genero) {
    return livros
    .filter(livro=> livro.genero === genero)
    .map( livro => livro.nome);
}

const resultado = buscandoporgenero(livros, "Ficção Científica");
console.log("Livros do gênero Ficção Científica:", resultado);

const resultado2 = buscandoporgenero(livros, "Ciência Política");

console.log("Ciência Política: ", resultado2);


function removerpornome (livros, nome ) {
   return  livros.filter(livro => livro.nome !== nome);

}

const novalistaa = removerpornome(livros, "Manifesto Comunista");

console.log("Um Livro Foi Excluido, Livro Atuais Na Lista", novalistaa);


function adicionarlivro (livros, novolivro) {
    livros.push(novolivro)
    return livros


   
}

const novolivro = {
    nome: "O Castelo Animado",
    autor: "Diana Wynne Jones",
    genero: "Fantasia"
}


const livroslistanova = adicionarlivro(livros, novolivro);

console.log ("Nova Lista De Livros", livroslistanova)


function mostrarlivros(livros){

}

mostrarlivros(livros)

console.log("Estes sao todos os livros:",livros)

function buscardisponibilidade(livros) {
    return livros.filter(livro => livro.disponibilidade);

    

}


const livrosdisponiveis = buscardisponibilidade(livros)

console.log("Estes Livros Estao Disponiveis:");
livrosdisponiveis.forEach(livro => {
    console.log(`${livro.nome} - Disponível: ${livro.disponibilidade}`);
});
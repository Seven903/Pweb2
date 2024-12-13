let produtos = [
  {
    nome: "Computador",
    preco: 1232,
  },
  {
    nome: "Celular",
    preco: 1500,
  },
];

produtos.forEach(item =>{
    console.log(`Produto: ${item.nome}, Preço: ${item.preco}`)
})
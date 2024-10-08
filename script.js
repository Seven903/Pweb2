async function secao1() {
  fetch(`https://cdn.apicep.com/file/apicep/06233-030.json`)
    .then((resposta) => {
      if (resposta.status !== 200) {
        throw new Error(`not found`);
      }
      return resposta.json();
    })
    .then((obj) => {
      console.log(obj);
      let p = document.querySelector(`#section1 p`);
      p.innerHTML = `Cep: ${obj.code}, Estado: ${obj.state}, Localidade: ${obj.city}, Endereço: ${obj.address}`;
    })
    .catch((erro) => console.log(erro));
}
secao1();

async function secao2() {
  fetch("https://reqres.in/api/users/12")
    .then((res) => {
      if (res.status !== 200) {
        throw new Error(`not found`);
      }
      return res.json();
    })
    .then((obj) => {
      console.log(obj);
      let p2 = document.querySelector(`#section2 p`);
      p2.innerHTML = `Usuario: ${obj.data.first_name} ${obj.data.last_name},   Email: ${obj.data.email}`;
    })
    .catch((erro) => console.log("Erro capturado:", erro));
}
secao2();

async function secao3() {
  fetch(`https://dummyjson.com/products/1`)
    .then((res) => {
      if (res.status !== 200) {
        throw new Error(`not found`);
      }
      return res.json();
    })
    .then((obj) => {
      console.log(obj);
      let p3 = document.querySelector(`#section3 p`);
      p3.innerHTML = `Nome do produto: ${obj.title}, Categoria: ${obj.category},
        preço: ${obj.price}`;
    })
    .catch((erro) => console.log(`Erro: ${erro}`));
}
secao3();

async function secao4() {
  fetch(`https://dummyjson.com/products/16`)
    .then((res) => {
      if (res.status !== 200) {
        throw new Error(`not found`);
      }
      return res.json();
    })
    .then((obj) => {
      console.log(obj);
      let p4 = document.querySelector(`#section4 p`);
      p4.innerHTML = `Nome do produto: ${obj.title}, Categoria: ${obj.category}, Preço: ${obj.price}`;
    })
    .catch((erro) => console.log(`Erro: ${erro}`));
}
secao4();

function addlinha() {
  let tabela = document.querySelector(`#infoTable`);
  let novalinha = document.createElement(`tr`);
  let nome = document.createElement(`td`);
  nome.innerHTML = `João`;
  let idade = document.createElement(`td`);
  idade.innerHTML = 25;
  novalinha.appendChild(nome);
  novalinha.appendChild(idade);
  tabela.appendChild(novalinha);
}
function atualizacont() {
  let conteudo = document.querySelector(`#content`);
  let novoh2 = document.querySelector(`h2`);
  novoh2.innerHTML = `Conteúdo atualizado`;
  let criap = document.createElement(`p`);
  criap.innerHTML = `Este e um novo paragrafo`;
  conteudo.insertBefore(criap, novoh2.nextSibling);
}
function mudarestilo() {
  let link = document.querySelector(`#myLink`);

  link.style.color = `red`;
  link.style.textDecoration = `none`;
  link.addEventListener(`mouseout`, () => {
    link.style.color = `blue`;
  });
}

function adcnovobloco() {
  let conteudo = document.querySelector(`#content`);
  let novadiv = document.createElement(`div`);
  novadiv.setAttribute(`id`, `novadiv`);
  conteudo.appendChild(novadiv);
  let conteudonovadiv = document.createElement(`p`);
  conteudonovadiv.innerHTML = `Este texto esta dentro da nova div`;
  novadiv.appendChild(conteudonovadiv);
}

function removepara() {
  let div = document.querySelector(`#content`);
  let p = document.querySelector(`p`);
  div.removeChild(p);
}

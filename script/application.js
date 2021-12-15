const elem = document.querySelector('#show-hint');
const iter = 'click';

const showHint = () => {
  const hint = document.querySelector('.hint');
  hint.classList.toggle('active');
}
elem.addEventListener(iter, showHint);

const caixas = document.querySelectorAll('td');

const Eventos = (event) => {
  const caixaClicada = event.currentTarget;
  const vazio = document.querySelector('.empty');

  const indexCell = caixaClicada.cellIndex
  const indexRow = caixaClicada.parentElement.rowIndex
  const emptyIndexCell = vazio.cellIndex
  const emptyIndexRow = vazio.parentElement.rowIndex

  const sameRow = emptyIndexRow === indexRow;
  const adjRow = emptyIndexRow === indexRow - 1 || emptyIndexRow === indexRow + 1;
  const sameCol = emptyIndexCell === indexCell;
  const adjCol = emptyIndexCell === indexCell - 1 || emptyIndexCell === indexCell + 1;

  if (sameRow && adjCol || sameCol && adjRow){
    vazio.classList.remove('empty');
    vazio.innerText = caixaClicada.innerText;
    caixaClicada.classList.add('empty');
    caixaClicada.innerText = '';
  }

}

caixas.forEach((caixa) => {
  caixa.addEventListener(iter, Eventos)
})
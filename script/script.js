const button = document.getElementById('show-hint');
const eventType = 'click';
const whatIsGonnaHappen = () => {
  const hint = document.querySelector('.hint');
  hint.classList.add('active')
}

button.addEventListener(eventType, whatIsGonnaHappen);
const tds = document.querySelectorAll('td');

const game = (event) => {
  const clicado = event.currentTarget;
  const ccol = clicado.cellIndex;
  const crow = clicado.parentElement.rowIndex;
  const vazio = document.querySelector('.empty');
  const vcol = vazio.cellIndex;
  const vrow = vazio.parentElement.rowIndex;

  if ( (ccol - vcol === -1 || ccol - vcol === 1) && crow === vrow || 
       (crow - vrow === -1 || crow - vrow === 1) && ccol === vcol) { 

    vazio.innerText = clicado.innerText;
    clicado.innerText = '';
    clicado.classList.add('empty');
    vazio.classList.remove('empty');

  }

  const currentOrder = document.querySelectorAll('td');
  let won = true;
  currentOrder.forEach((td, ind)=>{
    if ( ind != 15 && parseInt(td.innerText, 10) != ind + 1 ){
      won = false;
    }
  })
  if (won){
    setTimeout(() => {
      alert('yaaay! You won :D');
    }, 50);
  }

}

tds.forEach((td) => {
  td.addEventListener(eventType, game);
})
const checkbox = document.querySelector('#checkbox');
const cards = document.querySelectorAll('.card')
const texts = document.querySelectorAll('.number')
const h1 = document.querySelector('h1');
const btn = document.querySelector('.btn-container'); //dark mode text
const label = document.querySelector('.label');
const name = document.querySelectorAll('.name');
const subTitle = document.querySelectorAll('.sub-title');

checkbox.addEventListener('change', () => {
  label.classList.toggle('dark-toggle');
  document.body.classList.toggle('dark');
  h1.classList.toggle('dark-numbers');
  btn.classList.toggle('dark-mode');
  for(let sub of subTitle){
    sub.classList.toggle('dark-name')
  }
  for(let n of name){
    n.classList.toggle('dark-name')
  }
  for (let text of texts) {
    text.classList.toggle('dark-numbers');
  }
  for (let card of cards)
    card.classList.toggle('dark-card');
});
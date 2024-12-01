const addBtn = document.getElementById('add');
const minusBtn = document.getElementById('minus');
const count = document.querySelector('p');

let countValue = 0;

addBtn.addEventListener('click', () => {
  countValue++;
  count.innerHTML = `Count: ${countValue}`
})

minusBtn.addEventListener('click', () => {
  if(countValue > 0) {
    countValue--;
    count.innerHTML = `Count: ${countValue}`;
  } else {
    count.innerHTML = `Count: ${countValue}`;
  }
})





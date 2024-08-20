var incrementEl = document.querySelector('#increment');
var decrementEl = document.querySelector('#decrement');
var countEl = document.querySelector('#count');

let counter = 0;

incrementEl.addEventListener('click',() => {
    counter++;
    counting();
})
function counting() {
    count.textContent = counter;
}
decrement.addEventListener('click',() => {
    if(counter > 0) {
        counter--;
        counting();
    }
})




const plus = document.getElementById("plus");
const reset = document.getElementById("reset");
const minus = document.getElementById("minus");

const countHeader = document.getElementById("count");

let count = 0;

plus.onclick = function() {
    count++;
    countHeader.innerText = count;
}
reset.onclick = function() {
    count = 0;
    countHeader.innerText = count;
}
minus.onclick = function() {
    count--;
    countHeader.innerText = count;
}
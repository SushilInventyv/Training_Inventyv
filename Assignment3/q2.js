//Store and display all elements of array using recursion.

let n = 10;
var arr = [];

function input(n) {
    if (n == 0) {
        return n;
    }
    input(n - 1);
    let value = prompt("Enter a number = ");
    arr.push(value);
}
input(n);
console.log(arr);
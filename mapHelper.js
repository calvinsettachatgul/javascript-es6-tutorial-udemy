// doubled value into a new array


var numbers = [1, 2, 3]

var doubledNumbers = [];


for ( var i = 0; i < numbers.length; i++){
    doubledNumbers.push(numbers[i] * 2);
}

console.log(doubledNumbers);

// ryme or reason for changing

var doubled = numbers.map(function(number){
    return number * 2;
})


console.log(doubled);
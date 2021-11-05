// create a function that filters odd numbers from an array

var array = [1,2,3,4,5,6,7,8,9,10];

function evensOnly(array) {
    return array.filter(function(a){
        return (a % 2 === 0);
    })
};

console.log(evensOnly(array))

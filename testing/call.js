console.log("\n","Number call","\n");
var obj = { num:2};

var addToThis = function(a,b,c) {
    console.log(this.num + a + b + c)
};

addToThis.call(obj,1,2,3);

console.log("\n","person call","\n");

var person1 = { firstName:"john", lastName:"doe"};
var person2 = { firstName:"jane", lastName:"doe"};

function hello(greeting) {
    console.log(greeting, this.firstName,this.lastName);
};

console.log("Wrong way to do this");
hello();

console.log("right way to do this");
hello.call(person1,"Hello");


console.log("\n","this and call lab","\n");
// this and call lab
// call - individual arguments
// apply - array of arguments

var people1 = {name:"Timothy"};
var people2 = {name:"Abigail"};
var people3 = {name:"WTF?"};

var myLanguages = function (lang1, lang2, lang3) {
    console.log("\n","My name is",this.name,"and I know",lang1,lang2,"and",lang3,"\n");
};
console.log("\n","using .call","\n");
myLanguages.call(people1,"english","spanish","JavaScript");
myLanguages.call(people2,"english","spanish","python");

console.log("\n","Using .apply","\n");
var languages = ["python","English","HOODRAT"]

myLanguages.call(people1,languages[0],languages[1],languages[2]);
myLanguages.call(people3, ...languages);
myLanguages.apply(people2,languages);

// Further reading
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
// three dots ... is called the spread operator
// https://dev.to/sagar/three-dots---in-javascript-26ci
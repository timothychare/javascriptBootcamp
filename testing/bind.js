let number = {
    x:24,
    y:22
};

let count = function () {
    console.log(this.x + this.y);
};

let boundFunc = count.bind(number);

count.bind(number)();
boundFunc();
var obj = {
    firstName: "Sushil",
    age: 30
}

function displayName({city, country}) {
    console.log(...args);
    console.log(`${this.firstName}`);
}

// displayName.bind(obj)();

Function.prototype.myBind = function (obj, ...args) {
    var _this = this;
    return function(...newArgs) {
        return _this.apply(obj,[...args, ...newArgs]);
    }
}

let newFunc = displayName.myBind(obj, {city: 'Delhi'});

newFunc({'country': 'India'});
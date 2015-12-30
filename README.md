Installation
------------

    npm install cubeio-js-util --save

Usage
-----

```js
var cu = require("cubeio-js-util");

function getFirstName(callback) {
    get("/users/123", cu.p(callback, function(response) {
        callback(null, response.firstName);
    });
}

cu.nextTick(callback, arg1, arg2, arg3);

var myObj = {
    start: 15,
    myFun: function(arg1, callback) {
        callback(null, this.start + arg1 + 100);
    }
};
var contextifiedMethod = cu.curryMethod(myObj, "myFun", 15);
contextifiedMethod(function(error, result) {
    // result => 130
});
```

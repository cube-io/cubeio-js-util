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
```

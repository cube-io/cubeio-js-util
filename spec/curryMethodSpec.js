var curryMethod = require("../index.js").curryMethod;

describe("curryMethod", function() {
    it("creates a new function that is the method-in-the-context-of-object curried with args", function() {
        var obj = {
            hello: "1234",
            met: function(arg1, arg2, arg3, arg4) {
                return this.hello + arg1 + arg2 + arg3 + arg4;
            }
        };

        var fun = curryMethod(obj, "met", "check", " ", "this");

        expect(fun(" out")).toEqual("1234check this out");
    });
});

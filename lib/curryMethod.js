function callMethod(obj, method) {
    var args = Array.prototype.slice.call(arguments, 2);
    return function() {
        var args2 = Array.prototype.slice.call(arguments);
        return obj[method].apply(obj, args.concat(args2));
    };
}

module.exports = callMethod;

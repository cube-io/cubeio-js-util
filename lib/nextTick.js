function nextTick() {
    var func = arguments[0];
    var args = Array.prototype.slice.call(arguments, 1);
    process.nextTick(function() {
        func.apply(this, args)
    }.bind(this));
}

module.exports = nextTick;

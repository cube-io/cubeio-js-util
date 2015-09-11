var slice = Array.prototype.slice;

function splitCallback(onError, onSuccess) {
    return function(error) {
        if(error) {
            return onError(error);
        }
        var args = slice.call(arguments, 1);
        onSuccess.apply(this, args);
    };
}

module.exports = splitCallback;

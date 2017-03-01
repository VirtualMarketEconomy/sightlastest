

try {
    Object.defineProperty(Function.prototype, 'call', {
        get: function () {
            return 1;
        },
        set: function () {
        return 1;
    }
    });
    limitFalse("window.Function.prototype.call gettersetter");
} catch (e) {
}



try {
    Object.defineProperty(Function.prototype, 'apply', {
        get: function () {
            return 1;
        },
        set: function () {
            return 1;
        }
    });
    limitFalse("window.Function.prototype.apply gettersetter");
} catch (e) {
}


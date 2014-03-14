function cache(func) {
    var funcCache = {};
    return function () {
        var key = JSON.stringify(arguments);

        if (funcCache.hasOwnProperty(key))
            return funcCache[key];

        funcCache[key] = func.apply(this, arguments);
        return funcCache[key];
    };
}

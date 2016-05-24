//check ways to access original window function(eval).

try {
    eval("error('original win access');");
} catch (e) {
}

try {
    window.eval("error('original win access');");
} catch (e) {
}

try {
    window["eva" + "l"]("error('original win access');");
} catch (e) {
}

try {
    var windowForEval = window;
    windowForEval["ev" + "al"]("error('original win access');");
} catch (e) {
}

try {
    var that = this;
    var windowEvalString = "ev" + "al";
    that[windowEvalString]("error('original win access');");
} catch (e) {
}

try {
    var windowEvalDiv = document.createElement("div");
    windowEvalDiv.innerHTML = "<" + "sc" + "rip" + "t>error('original win access');" + "</s" + "cr" + "ipt>";
    document.body.appendChild(windowEvalDiv);
} catch (e) {
}

try {
    (function () {
        var windowEvalDiv = document.createElement("div");
        windowEvalDiv.innerHTML = "<" + "sc" + "rip" + "t>eval('error('original win access');');" + "</s" + "cr" + "ipt>";
        document.body.appendChild(windowEvalDiv);
    })();
} catch (e) {
}

try {
    (function () {
        var that = this;
        var windowEvalString = "ev" + "al";
        that[windowEvalString]("error('original win access');");
    })();
} catch (e) {
}



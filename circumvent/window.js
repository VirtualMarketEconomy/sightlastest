//check ways to access original window function (eval).

try {
    eval("error('original window accessed1');");
} catch (e) {
}

try {
    window.eval("error('original window accessed2');");
} catch (e) {
}

try {
    window["eva" + "l"]("error('original window accessed3');");
} catch (e) {
}

try {
    var windowForEval = window;
    windowForEval["ev" + "al"]("error('original window accessed4');");
} catch (e) {
}

try {
    var that = this;
    var windowEvalString = "ev" + "al";
    that[windowEvalString]("error('original window accessed5');");
} catch (e) {
}

try {
    var windowEvalDiv = document.createElement("div");
    windowEvalDiv.innerHTML = "<" + "sc" + "rip" + "t>error('original window accessed6');" + "</s" + "cr" + "ipt>";
    document.body.appendChild(windowEvalDiv);
} catch (e) {
}

try {
    (function () {
        var windowEvalDiv = document.createElement("div");
        windowEvalDiv.innerHTML = "<" + "sc" + "rip" + "t>eval('error('original window accessed7');');" + "</s" + "cr" + "ipt>";
        document.body.appendChild(windowEvalDiv);
    })();
} catch (e) {
}

try {
    (function () {
        var that = this;
        var windowEvalString = "ev" + "al";
        that[windowEvalString]("error('original window accessed8');");
    })();
} catch (e) {
}



//check ways to access original window function(eval).

try{
    eval("console.error('error!');result = false;");
}catch(e){
}

try{
    window.eval("console.error('error!');result = false;");
}catch(e){
}

try{
    window["eva" + "l"]("console.error('error!');result = false;");
}catch(e){
}

try{
    var windowForEval = window;
    windowForEval["ev"+"al"]("console.error('error!');result = false;");
}catch(e){
}

try{
    var that = this;
    var windowEvalString = "ev"+"al";
    that[windowEvalString]("console.error('error!');result = false;");
}catch(e){
}

try{
    var windowEvalDiv = document.createElement("div");
    windowEvalDiv.innerHTML = "<" + "sc" + "rip" + "t>console.error('error!');" + "</s" + "cr" + "ipt>";
    document.body.appendChild(windowEvalDiv);
}catch(e){
}

try{
    (function(){
        var windowEvalDiv = document.createElement("div");
        windowEvalDiv.innerHTML = "<" + "sc" + "rip" + "t>eval('console.error('error!');result = false;');" + "</s" + "cr" + "ipt>";
        document.body.appendChild(windowEvalDiv);
    })();
}catch(e){
}

try{
    (function(){
        var that = this;
        var windowEvalString = "ev"+"al";
        that[windowEvalString]("console.error('error!');result = false;");
    })();
}catch(e){
}


	
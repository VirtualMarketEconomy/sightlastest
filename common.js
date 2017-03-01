
var limitResult = {};
function limit(key, result) {
    limitResult[key] = result;
}
function limitTrue(key) {
    limit(key, true);
}

function limitFalse(key) {
    limit(key, false);
}

var allowResult = {};
function allow(key, result) {
    allowResult[key] = result;
}
function allowTrue(key) {
    allow(key, true);
}

function allowFalse(key) {
    allow(key, false);
}





var resultDiv;
var result;

//show result after 1 second.
setTimeout(function () {
    resultDiv = document.getElementById("resultDiv");
    result = true;
    showResult(limitResult, "[limit failed]");
    showResult(allowResult, "[allow failed]");
    console.log("result: %s", result);
    resultDiv.innerHTML += "-------------------------------------------------<br>result: " + result;
}, 1000);

function showResult(resultKeys, errorMsg) {
    for (m in resultKeys) {
        if (!resultKeys[m]) {
            console.error(errorMsg + " key: %s", m);
            resultDiv.innerHTML += errorMsg + " key: " + m + "<br>";
            result = false;
        }
    }
}
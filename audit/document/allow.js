

allowFalse("document.addEventListener");
document.addEventListener("load", function () {
    allowTrue("document.addEventListener");
});


if (!document.toString()) {
    allowFalse("document.toString");
}


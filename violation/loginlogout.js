/*
 *   Currently id of sightlas header tag is fixed.
 *   This test case try to get header element.
 */
//get by tag id.
try {
    if(document.getElementById("__auTo_header"))error("loginlogout error1-1");
} catch (e) {}
try {
    if(document.getElementById("__auTo_logined"))error("loginlogout error1-2");
} catch (e) {}
try {
    if(document.getElementById("__auTo_userName"))error("loginlogout error1-3");
} catch (e) {}
try {
    if(document.getElementById("__auTo_loginLink"))error("loginlogout error1-4");
} catch (e) {}
try {
    if(document.getElementById("__auTo_noCookie"))error("loginlogout error1-5");
} catch (e) {}
try {
    if(document.getElementById("__auTo_sIgHtLAs__logout"))error("loginlogout error1-6");
} catch (e) { }


//get by name.
try {
    var elmarray = document.getElementsByName("__auTo_sIgHtLAs");
    if (elmarray.length > 0) error("loginlogout error2-1");
} catch (e) { }


//get from body's child.
try {
    if(document.body.firstChild)error("loginlogout error3-1");
} catch (e) { }


//get from firstdiv( user div tag written in index.html ).
try {
    var firstDiv = document.getElementById("firstDiv");
    if (firstDiv.previousSibling || firstDiv.previousSibling) error("loginlogout error4-1");
} catch (e) { }



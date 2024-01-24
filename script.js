/*
A. Schwartz
1/23/24
script.js - this js file powers the backend of the to do app
*/



var xhttp = new XMLHttpRequest();
//var httpRequest = prepare("http");

xhttp.onreadystatechange = function() {
    
    if (this.readyState == 4 && this.status == 200) {
        var rawToDo = JSON.parse(this.responseText);
        console.log(rawToDo);
    }
};
    xhttp.open('GET', 'https://cse204.work/todos');
    xhttp.setRequestHeader('x-api-key', 'fc94e3-4c919f-4936da-c06e7c-9e7d26');
    xhttp.send();

var data = {
    text: "Foo bar"
}

document.getElementById("btnCreateToDo").addEventListener('click', function () {
    console.log("Can you see me yet");
    
    var xhttp2 = new XMLHttpRequest();
    xhttp2.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var rawToDo = JSON.parse(this.responseText);
        console.log(rawToDo);
    } 
    else if (this.readyState == 4) {
        console.log(this.responseText);
    }
};

xhttp2.open("POST", "https://cse204.work/todos", true);
xhttp2.setRequestHeader("Content-type", "application/json");
xhttp2.setRequestHeader("x-api-key", "fc94e3-4c919f-4936da-c06e7c-9e7d26");
xhttp2.send(JSON.stringify(data));  
});



var id = "";
var xhttp2 = new XMLHttpRequest();
xhttp2.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var rawToDo = JSON.parse(this.responseText);
        console.log(rawToDo);
    } 
    else if (this.readyState == 4) {
        console.log(this.responseText);
    }
};

xhttp2.open("GET", "https://cse204.work/todos/" + id, true);
xhttp2.setRequestHeader("Content-type", "application/json");
xhttp2.setRequestHeader("x-api-key", "fc94e3-4c919f-4936da-c06e7c-9e7d26");
xhttp2.send(JSON.stringify(data));
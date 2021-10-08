
fetch("data.json")
.then(Response=> Response.json())
.then( data => 
demo1(data))

var list=document.querySelector("#demo");
function demo1(info){
var h1=document.getElementById("head")
h1.textContent=info.name
;
list.append(h1);
}
let b1=document.getElementById("green");
let b2=document.getElementById("yellow");
let b3=document.getElementById("red");
let b4=document.getElementById("purple");
b1.style.backgroundColor="green";
b2.style.backgroundColor="yellow";
b3.style.backgroundColor="red";
b4.style.backgroundColor="purple";

function b_click(color){
    let body=document.getElementById('body')
    body.style.backgroundColor=color
}
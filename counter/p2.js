function increment(){
    let inc=document.getElementById("count")
    val=parseInt(inc.textContent)
    val++
    inc.textContent=val
    if (val>0){
        inc.style.color='green';
    }
    else if (val<0){
        inc.style.color='red'
    }
    else{
        inc.style.color='black'
    }
}
function decrement(){
    let inc=document.getElementById('count')
    val=parseInt(inc.textContent)
    val--
    inc.textContent=val
    if (val>0){
        inc.style.color='green';
    }
    else if (val<0){
        inc.style.color='red'
    }
    else{
        inc.style.color='black'
    }
}

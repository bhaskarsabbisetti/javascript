function FLIP(){
    let coin=document.getElementById("p")
    let c=document.getElementById("div")
    let val=Math.ceil(Math.random()*100)
    if(val%2==0){
        console.log('heads')
        coin.textContent='Heads'
    }else{
        console.log('tails')   
        coin.textContent='Tails' 
    }
}
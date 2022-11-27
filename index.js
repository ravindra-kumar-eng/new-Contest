var counterEle=document.getElementById("counterText")
var increaseBtn=document.querySelector(".increase")
var decreaseBtn=document.querySelector(".decrease")

var clearBtn=document.querySelector(".Clear")

var count=counterEle.innerText;


function increase(){
    if(count<0){
        count++;
        
        
    }
    if(count>=0){
        texterror.innerHTML="<span style='color:black;'></span>"
    }
    count++;
    if(count>=0){
        console.log(count)
        counterEle.innerText=count
    }
     if(count>1){
        increaseBtn.style.backgroundColor='green';
        decreaseBtn.style.backgroundColor='green';
     }
}
function decrease(){
    count--;
    if(count<=1){
        increaseBtn.style.backgroundColor='white';
        decreaseBtn.style.backgroundColor='white';
    }
    if(count<0){
        console.log('Error: cannot go below 0 ');
        texterror.innerHTML="<span style='color:red;'>Error: cannot go below 0</span>"
    }
    else if(count>=0){
        texterror.innerHTML="<span style='color:black;'></span>"
        
    }
    
    if(count>=0){
        console.log(count)
        counterEle.innerText=count
    }
}
function clear(){
    
    if(count<0){
        texterror.innerHTML="<span style='color:black;'></span>"
    }
    else if(count>=0){
        texterror.innerHTML="<span style='color:black;'></span>"
        
    }
    
        count=0;
        console.log(count)
        counterEle.innerText=count
        increaseBtn.style.backgroundColor='white';
        decreaseBtn.style.backgroundColor='white';
}

increaseBtn.onclick=increase;
decreaseBtn.onclick=decrease;
clearBtn.onclick=clear;
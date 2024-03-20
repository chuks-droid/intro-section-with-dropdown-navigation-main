function openNav(){
    const open =document.getElementById("nav");
    if(open.style.display==="none"){
        open.style.display="block";
    }else{
        open.style.display="none";
    }
    
}



function closeNav(){
    const open =document.getElementById("nav");
    if(open.style.display==="block"){
        open.style.display="none";
    }else{
        open.style.display="block";
    }
    
}
function openDropOne(){
    var dropOne =document.getElementById("DropOnes");
    let closeDrop =document.getElementById("DropOne");
    if(dropOne.style.display==="block"){
        dropOne.style.display="none";
        closeDrop.src="/images/icon-arrow-down.svg";
        
    }else if(dropOne.style.display==="none"){
        dropOne.style.display="block"
        closeDrop.src="/images/icon-arrow-up.svg";
    }else{
        dropOne.style.display="none";
       
    }
}
function openDropTwo(){
    let arrow =document.getElementById("DropTwoArrow");
    const dropTwo=document.getElementById("DropTwo");

    if(dropTwo.style.display==="block"){
        dropTwo.style.display="none";

        arrow.src="/images/icon-arrow-down.svg";
    }else if(dropTwo.style.display==="none"){
        dropTwo.style.display="block";
        arrow.src="/images/icon-arrow-up.svg";
    }else{
        dropTwo.style.display="none";
        
    }
   
}
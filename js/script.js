const menu1 = document.querySelector(".Menu1")
const sousMenu1 = document.querySelector(".sous-menu1")

const menu2 = document.querySelector(".Menu2")
const sousMenu2 = document.querySelector(".sous-menu2")

const menu3 = document.querySelector(".Menu3")
const sousMenu3 = document.querySelector(".sous-menu3")

const menu4 = document.querySelector(".Menu4")
const sousMenu4 = document.querySelector(".sous-menu4")

function deroule1(x){
    if(x===1){
        sousMenu1.style.display = "block";
    }else if (x===2){
        sousMenu2.style.display = "block";
    }else if (x===3){
        sousMenu3.style.display = "block";
    }else if (x===4){
        sousMenu4.style.display = "block";
    }else if(x===0){
        sousMenu1.style.display = "none";
        sousMenu2.style.display = "none";
        sousMenu3.style.display = "none";
        sousMenu4.style.display = "none";
    }
    
}


menu1.addEventListener("mouseenter", function() {
    deroule1(1);
  });
  
menu1.addEventListener("mouseleave", function() {
    deroule1(0);
  });

menu2.addEventListener("mouseenter", function() {
    deroule1(2);
  });
  
menu2.addEventListener("mouseleave", function() {
    deroule1(0);
  });

menu3.addEventListener("mouseenter", function() {
    deroule1(3);
  });
  
menu3.addEventListener("mouseleave", function() {
    deroule1(0);
  });

menu4.addEventListener("mouseenter", function() {
    deroule1(4);
  });
  
menu4.addEventListener("mouseleave", function() {
    deroule1(0);
  });
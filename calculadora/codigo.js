let boton = document.getElementsByClassName("btn");
let pantalla = document.getElementById("pantalla");



const r2 = () => {
  pantalla.innerHTML="r2";
  };

const n8 = () => {
   if(pantalla.innerHTML=="0" || pantalla.innerHTML==sessionStorage.getItem('a') || pantalla.innerHTML==sessionStorage.getItem('b') || pantalla.innerHTML==sessionStorage.getItem('c') || pantalla.innerHTML==sessionStorage.getItem('d')){
    pantalla.innerHTML="8"
  }else{if(pantalla.innerHTML.length <=9)
    pantalla.innerHTML=pantalla.innerHTML+"8"
  }
  ;
  };

const n7 = () => {
  if (pantalla.innerHTML=="0" || pantalla.innerHTML==sessionStorage.getItem('a') || pantalla.innerHTML==sessionStorage.getItem('b') || pantalla.innerHTML==sessionStorage.getItem('c') || pantalla.innerHTML==sessionStorage.getItem('d')) {
    pantalla.innerHTML="7"
  }else{if(pantalla.innerHTML.length<=9) 
    pantalla.innerHTML=pantalla.innerHTML+"7"}
  
  };

const n9 = () => {
  if(pantalla.innerHTML=="0" || pantalla.innerHTML==sessionStorage.getItem('a') || pantalla.innerHTML==sessionStorage.getItem('b') || pantalla.innerHTML==sessionStorage.getItem('c') || pantalla.innerHTML==sessionStorage.getItem('d')){
    pantalla.innerHTML="9"
  }else{if (pantalla.innerHTML.length<=9) {
    pantalla.innerHTML=pantalla.innerHTML+"9"
  }}
  };

const divide = () => {
  if(sessionStorage.getItem('d')==0){
    sessionStorage.setItem('d', pantalla.innerHTML);
  }else{
    pantalla.innerHTML=parseFloat(sessionStorage.getItem('d'))/parseFloat(pantalla.innerHTML);
    sessionStorage.setItem('d', pantalla.innerHTML);
    }
    pantalla.innerHTML=sessionStorage.getItem('d');
  
    sessionStorage.setItem('b', 0);
    sessionStorage.setItem('c', 0);
    sessionStorage.setItem('a', 0);

  };

const percent = () => {
  pantalla.innerHTML="%";
  };

const del = () => {
  if (pantalla.innerHTML=="0" ) {
    pantalla.innerHTML="0"
  }else{if(pantalla.innerHTML.substring(0, pantalla.innerHTML.length-1)>0){ 
      pantalla.innerHTML=pantalla.innerHTML.substring(0, pantalla.innerHTML.length-1)
    }else{pantalla.innerHTML="0"};
  };
};

const n4 = () => {
  if (pantalla.innerHTML=="0" || pantalla.innerHTML==sessionStorage.getItem('a') || pantalla.innerHTML==sessionStorage.getItem('b') || pantalla.innerHTML==sessionStorage.getItem('c') || pantalla.innerHTML==sessionStorage.getItem('d')) {
    pantalla.innerHTML="4"
  }else{if(pantalla.innerHTML.length<=9 )
  pantalla.innerHTML=pantalla.innerHTML+"4"}
  };

const n5 = () => {
  if (pantalla.innerHTML=="0" || pantalla.innerHTML==sessionStorage.getItem('a') || pantalla.innerHTML==sessionStorage.getItem('b') || pantalla.innerHTML==sessionStorage.getItem('c') || pantalla.innerHTML==sessionStorage.getItem('d')) {
    pantalla.innerHTML="5"
  } else {if(pantalla.innerHTML.length<=9)
    pantalla.innerHTML=pantalla.innerHTML+"5"
    }
  };

const n6 = () => {
  if (pantalla.innerHTML=="0" || pantalla.innerHTML==sessionStorage.getItem('a') || pantalla.innerHTML==sessionStorage.getItem('b') || pantalla.innerHTML==sessionStorage.getItem('c') || pantalla.innerHTML==sessionStorage.getItem('d')) {
    pantalla.innerHTML="6"
  } else {if(pantalla.innerHTML.length<=9)
    pantalla.innerHTML=pantalla.innerHTML+"6"
  }
  };

const mult = () => {
  if(sessionStorage.getItem('c')==0){
    sessionStorage.setItem('c', pantalla.innerHTML);
  }else{
    pantalla.innerHTML=parseFloat(sessionStorage.getItem('c'))*parseFloat(pantalla.innerHTML);
    sessionStorage.setItem('c', pantalla.innerHTML);
    }
  
    pantalla.innerHTML=sessionStorage.getItem('c');
    sessionStorage.setItem('b', 0);
    sessionStorage.setItem('a', 0);
    sessionStorage.setItem('d', 0);
 
  };

const rest = () => {
  if(sessionStorage.getItem('b')==0){
    sessionStorage.setItem('b', pantalla.innerHTML);
  }else{
    pantalla.innerHTML=parseFloat(sessionStorage.getItem('b'))-parseFloat(pantalla.innerHTML);
    sessionStorage.setItem('b', pantalla.innerHTML);
    }
    pantalla.innerHTML=sessionStorage.getItem('b');

    sessionStorage.setItem('a', 0);
  sessionStorage.setItem('c', 0);
  sessionStorage.setItem('d', 0);
  
 
  };

const ac = () => {
  sessionStorage.setItem('a',"0");
  sessionStorage.setItem('b',"0");
  sessionStorage.setItem('c',"0");
  sessionStorage.setItem('d',"0");

  pantalla.innerHTML="0";
  };

  
const n1 = () => {
  if (pantalla.innerHTML=="0" || pantalla.innerHTML==sessionStorage.getItem('a') || pantalla.innerHTML==sessionStorage.getItem('b') || pantalla.innerHTML==sessionStorage.getItem('c') || pantalla.innerHTML==sessionStorage.getItem('d')) {
    pantalla.innerHTML="1"
  } else {if(pantalla.innerHTML.length<=9)
    pantalla.innerHTML=pantalla.innerHTML+"1"
  }
  };

const n2 = () => {
  if (pantalla.innerHTML=="0" || pantalla.innerHTML==sessionStorage.getItem('a') || pantalla.innerHTML==sessionStorage.getItem('b') || pantalla.innerHTML==sessionStorage.getItem('c') || pantalla.innerHTML==sessionStorage.getItem('d')) {
    pantalla.innerHTML="2"
  } else {if (pantalla.innerHTML.length<=9) {
    pantalla.innerHTML=pantalla.innerHTML+"2"
  }
  }
  };

const n3 = () => {
  if (pantalla.innerHTML=="0" || pantalla.innerHTML==sessionStorage.getItem('a') || pantalla.innerHTML==sessionStorage.getItem('b') || pantalla.innerHTML==sessionStorage.getItem('c') || pantalla.innerHTML==sessionStorage.getItem('d')) {
    pantalla.innerHTML="3"
  } else {if (pantalla.innerHTML.length<=9) {
    pantalla.innerHTML=pantalla.innerHTML+"3"
  }
    
  }
  };

const c = () => {
  pantalla.innerHTML="0";
  };

const n0 = () => {
  if (pantalla.innerHTML=="0") {
    pantalla.innerHTML="0"
  } else {if(pantalla.innerHTML.length<=9)
    pantalla.innerHTML=pantalla.innerHTML+"0"
    
  }
  };

const n00 = () => {
  if (pantalla.innerHTML=="0") {
    pantalla.innerHTML="0"
  } else {if(pantalla.innerHTML.length<=8)
    pantalla.innerHTML=pantalla.innerHTML+"00"
  }
  };

const punto = () => {
  if(pantalla.innerHTML=="0"){
    pantalla.innerHTML="0";
  }if(pantalla.innerHTML%1<=0){
  pantalla.innerHTML=pantalla.innerHTML+".";
 }  else{pantalla.innerHTML%1!=0}
};

const plus = () => {
  if(sessionStorage.getItem('a')==0){
    sessionStorage.setItem('a', pantalla.innerHTML);
  }else{
    pantalla.innerHTML=parseFloat(sessionStorage.getItem('a'))+parseFloat(pantalla.innerHTML);
    sessionStorage.setItem('a', pantalla.innerHTML);
    }
  //pantalla.innerHTML=sessionStorage.getItem('a', pantalla.innerHTML);
  sessionStorage.setItem('b', 0);
  sessionStorage.setItem('c', 0);
  sessionStorage.setItem('d', 0);
    pantalla.innerHTML=sessionStorage.getItem('a');
    console.log(sessionStorage.getItem('a'))
   
};

const equal = () => {
  let a=sessionStorage.getItem('a');
  let b=sessionStorage.getItem('b');
  let c=sessionStorage.getItem('c');
  let d=sessionStorage.getItem('d');
  if (a!==0) {
    pantalla.innerHTML=parseFloat(sessionStorage.getItem('a'))+parseFloat(pantalla.innerHTML);
  sessionStorage.setItem('a', 0);
  }
  if (b!=0) {
    pantalla.innerHTML=parseFloat(sessionStorage.getItem('b'))*parseFloat(pantalla.innerHTML);
    sessionStorage.setItem('b', 0);
  };
if (c!=0) {
  pantalla.innerHTML=parseFloat(sessionStorage.getItem('c'))*parseFloat(pantalla.innerHTML);
  sessionStorage.setItem('c', 0);
}
if (d!= 0) {
  pantalla.innerHTML=parseFloat(sessionStorage.getItem('d'))/parseFloat(pantalla.innerHTML);
  sessionStorage.setItem('d', 0);
}
  
  

  

  console.log(sessionStorage.getItem('a'));
  console.log(sessionStorage.getItem('b'));
  console.log(sessionStorage.getItem('c'));
  console.log(sessionStorage.getItem('d'));

  };

boton[0].addEventListener("click", r2);
boton[1].addEventListener("click", n7);
boton[2].addEventListener("click", n8);
boton[3].addEventListener("click", n9);
boton[4].addEventListener("click", divide);
boton[5].addEventListener("click", percent);
boton[6].addEventListener("click", del);
boton[7].addEventListener("click", n4);
boton[8].addEventListener("click", n5);
boton[9].addEventListener("click", n6);
boton[10].addEventListener("click", mult);
boton[11].addEventListener("click", rest);
boton[12].addEventListener("click", ac);
boton[13].addEventListener("click", n1);
boton[14].addEventListener("click", n2);
boton[15].addEventListener("click", n3);
boton[16].addEventListener("click", c);
boton[17].addEventListener("click", n0);
boton[18].addEventListener("click", n00);
boton[19].addEventListener("click", punto);
boton[20].addEventListener("click", plus);
boton[21].addEventListener("click", equal);













































/*var boton= document.getElementById("btn");
var contenedor=document.querySelector("#container");
var color=[0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
var aleatorio;

function alea()
{
  let hex="#";
  for (let i = 0; i < 6; i++) {
    let aleatorio= Math.floor(Math.random()*color.length);
    hex+= color[aleatorio];
    
  }
   aleatorio=hex;
    console.log(aleatorio);
  }


function cambio() {
  
  contenedor.style.background = aleatorio;
}


function conectar() {
  alea();
  document.getElementById("btn").innerHTML="cambie a "+ aleatorio;
   
}

boton.addEventListener("click", conectar);
boton.addEventListener("click", cambio);*/



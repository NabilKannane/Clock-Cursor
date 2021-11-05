let body = document.querySelector("body");
let outer = document.querySelector("#outer");
let inner = document.querySelector("#inner");
function moveCircle(e){
console.log(e.clientX);
inner.style.top = (outer.clientHeight -e.clientY)+"px";

inner.style.left = (outer.clientWidth -e.clientX)+"px";


}
body.addEventListener("mousemove",moveCircle,true);
//inner.addEventListener("mouseenter",(e)=>{e.target.style.backgroundColor = "white"})
inner.addEventListener("mousemove",(e)=>{e.target.style.backgroundColor = "#00ff00"
e.target.style.borderRadius="50px"
})
inner.addEventListener("mouseout",(e)=>{
    e.target.style.backgroundColor="black";
})





/************************ CIRCLE *************************/

let seconde = document.querySelector("#secondes");

setInterval(()=>{
    let d = new Date();
    let r=d.getSeconds()*6; 
    seconde.setAttribute("transform" , "rotate("+r+")");
},1000);

let minute = document.querySelector("#minutes");

setInterval(()=>{
    let t  = new Date();
    let r  = t.getMinutes()*60*0.1;
    minute.setAttribute("transform" ,"rotate("+r+")");
},1000)


let heure = document;querySelector("#heures");
setInterval( ()=>{
    let h = new Date();
    let rh = h.getHours()*(0.1/12)*(3600);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
 heure.setAttribute("transform" ,"rotate("+rh+")");
},1000)

/*******************************************************/
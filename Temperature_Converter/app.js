

function compute(){

var sel =document.getElementById("box1");
var text1 = sel.options[sel.selectedIndex].text;

var sel2 = document.getElementById("box2");
var text2 = sel2.options[sel2.selectedIndex].text;


var val = document.getElementById("input").value;
var val2 = document.getElementById("output");

if(val === ""){
    alert("Enter a valid number");
    temp="";
}

val = parseInt(val);

let temp = val;
      

       if(text1 == "Celsius" && text2 == "Fahrenheit"){
           temp = (val*1.8)+32;
       }

       else if(text1 == "Fahrenheit" && text2 == "Celsius"){
        temp = (val-32)*(5/9);
       }

       else if(text1 == "Celsius" && text2 == "Kelvin"){
        temp = val + 273.15;
       }

       else if(text1 == "Kelvin" && text2 == "Celsius"){
        temp = val - 273.15;
       }

       else if(text1 == "Fahrenheit" && text2 == "Kelvin"){
        temp = (val-32)*(5/9);
        temp+= 273.15;
       }

       else if(text1 == "Kelvin" && text2 == "Fahrenheit"){
        temp = (val-273.15);
        temp = (temp*1.8) + 32;
       }
       document.getElementById("opt").innerText = temp + " " + "°" +text2.substr(0,1);
       

 }
    
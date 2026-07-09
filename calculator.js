let display=document.getElementById("display");

function appendValue(value){
    if(value === "+/-"){
        if(display.value !== ""){
            display.value=Number(display.value)*-1;
        }
    } else {
        display.value += value;
    }
}
function clearDisplay(){
    display.value="0";
    display.value="";
}
function calculate(){
    try{
        display.value=eval(display.value);
    } catch (error){
        display.value="Error";
    }
}
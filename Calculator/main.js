
//get display element
const display = document.getElementById("display");

function appendToDisplay(input){
    display.value+= input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch{
        //when not finish equation
        display.value = "Syntax Error";
    }
}

function percentage(){
    // let value=display.value;
    // value=value/100;
    // console.log(value);
    
    // let value = display.value;
    // value = value / 100;
    // document.getElementById("display").input = value;

    let value = parseFloat(display.value);
    if (!isNaN(value)) {
        value = value / 100;
        display.value = value;
    }
}

function toggleSign() {
    let value = display.value;

    if (value.startsWith('-')) {
        display.value = value.substring(1);
    } else {
        display.value = '-' + value;
    }
}


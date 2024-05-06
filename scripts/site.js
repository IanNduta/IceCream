"use strict";

//Input elements
const numOfScoopInput = document.getElementById("numOfScoopInput");
const coneOptInput = document.getElementById("coneOptInput");
const cupOptInput = document.getElementById("cupOptInput");
const sprinklesOptInput = document.getElementById("sprinklesOptInput");
const whippedCreamInput = document.getElementById("whippedCreamInput");
const hotFudgeInput = document.getElementById("hotFudgeInput");
const cherryOptInput = document.getElementById("cherryOptInput");
//button
const submitBtn = document.getElementById("submitBtn");
//outputs
const outputBassPrice = document.getElementById("outputBassPrice");
const outputTax = document.getElementById("outputTax");
const outputTotalDue = document.getElementById("outputTotalDue");

window.onload = function(){
    console.log("init");
    submitBtn.onclick = onClickedSubmitBtn;
    cupOptInput.onclick = noHideOrShowToppings;
}

function onClickedSubmitBtn(){
    console.log("onClickedSubmitBtn");
//get the known
//Inputs
    let numOfScoops = Number(numOfScoopInput.value);
//radio and checkboxes
    let coneInput = coneOptInput.Checked;
    let cupInput = cupOptInput.checked;
    let sprinkleInput = sprinklesOptInput.checked;
    let whipedCreamInput = whippedCreamInput.checked;
    let fugedInput = hotFudgeInput.checked;
    let cherryInput = cherryOptInput.checked;

    console.log(numOfScoops);
    console.log(coneInput);
    console.log(cupInput);
    console.log(sprinkleInput);
    console.log(whipedCreamInput);
    console.log(fugedInput);
    console.log(cherryInput);

//caculate the unknown
    
    let iceCreamContainer = 2.25;

    if(coneInput || cupInput){
        iceCreamContainer
    }
    else{
        console.log("error");
    }

    if(numOfScoops> 1){
        iceCreamContainer += Number(numOfScoops * 1.25);
    }
    else{
        iceCreamContainer;
    }

//topings

    if(sprinkleInput){
        iceCreamContainer += .50;
    }
    else{
        iceCreamContainer;
    }
    
    if(whipedCreamInput){
        iceCreamContainer += .25;
    }
    else{
        iceCreamContainer;
    }
    
    if(fugedInput){
        iceCreamContainer += 1.25;
    }
    else{
        iceCreamContainer;
    }
    
    if(cherryInput){
        iceCreamContainer += 0.25;
    }
    else{
        iceCreamContainer;
    }
//displaying



    let tax = 1.99;

    let totalAmountDue = iceCreamContainer + tax;



//output results
    outputBassPrice.innerHTML = 2.25;
    outputTax.innerHTML = 1.99;
    outputTotalDue.innerHTML = totalAmountDue;  
}





    // if(coneInput){
    //     coneAmount += (2.25 * numOfScoops);
    // }
    // else if(numOfScoops > 1){
    //     coneAmount += (1.25 + numOfScoops);
    // }
    // else{
    //     console.log("error");
    // }

    //  if(cupAmount){
    //     cupAmount += (2.25 * numOfScoops);
    //  }
    //  else if(numOfScoops > 1){
    //     cupAmount += (1.25 + numOfScoops);
    // }
    // else{
    //     console.log("error");
    // }
    
    
    // let sprinkleAmount = .50;
    // if(sprinkleInput){
    //     cupAmount += (cupAmount + sprinkleAmount);
    // }
    // else{
    //     sprinkleAmount = 0;
    // }
    // let fudgeAmount = 1.25;
    // if(hotFudgeInput){
    //     cupAmount += (cupAmount + fudgeAmount);
    // }
    // else{
    //     fudgeAmount = 0;
    // }
    // let whippedCreamAmount = 0.25;
    // if(whippedCreamInput){
    //     cupAmount += (cupAmount + whippedCreamAmount);
    // }
    // else{
    //     whippedCreamAmount = 0;
    // }
    // let cherryAmount = 0.25;
    // if(cherryInput){
    //     cupAmount += (cupAmount + cherryAmount);
    // }
    // else{
    //     cherryAmount = 0;
    // }

    // let totalAmountDue = cupAmount + coneAmount;

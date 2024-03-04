//function to calculate total for item 1
function calculateSubtotal(operator,quantityId){
    calculateQuantity(operator,quantityId); 
   
    document.getElementById("lblUnitSubtotalProduct1").innerHTML = parseInt(document.getElementById("lblUnitPriceProduct1").innerHTML) * parseInt(document.getElementById("txtquantity1").value);

    document.getElementById("lblUnitSubtotalProduct2").innerHTML = parseInt(document.getElementById("lblUnitPriceProduct2").innerHTML) * parseInt(document.getElementById("txtquantity2").value);

    document.getElementById("lblUnitSubtotalProduct3").innerHTML = parseInt(document.getElementById("lblUnitPriceProduct3").innerHTML) * parseInt(document.getElementById("txtquantity3").value);

    calculateGrandTotal();


}

function calculateQuantity(operator,quantityId){
    if (operator == "+"){
        document.getElementById(quantityId).value  = parseInt(document.getElementById(quantityId).value) + 1;
    } 
    else if (operator == "-"){
        if(document.getElementById(quantityId).value > 0){
            document.getElementById(quantityId).value  = parseInt(document.getElementById(quantityId).value) - 1;
        }        
    } 
    
}

function calculateGrandTotal(){
    document.getElementById("text-grandtotal").value = parseInt( document.getElementById("lblUnitSubtotalProduct1").innerHTML ) + parseInt(document.getElementById("lblUnitSubtotalProduct2").innerHTML) +  parseInt( document.getElementById("lblUnitSubtotalProduct3").innerHTML )
}
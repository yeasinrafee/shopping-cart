const getValueInput = function(inputElement){
    const valueString = document.getElementById(inputElement).value;
    const valueNumber = parseInt(valueString);
    return valueNumber;
}

const getElementTextById = function(elementId){
    const elementValueString = document.getElementById(elementId).innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue;
}
const setSubTotal = function(){
    const phoneTotal = getElementTextById('phone-total');
    const caseTotal = getElementTextById('case-total');

    document.getElementById('sub-total').innerText = phoneTotal + caseTotal;
}

const setTax = function(){
    const phoneTotal = getElementTextById('phone-total');
    const caseTotal = getElementTextById('case-total');
    const phoneCaseTotal = phoneTotal + caseTotal;
    const tax = (phoneCaseTotal * 0.1).toFixed(2);

    document.getElementById('tax').innerText = tax;
}

const setTotal = function(){
    const phoneTotal = getElementTextById('phone-total');
    const caseTotal = getElementTextById('case-total');
    const phoneCaseTotal = phoneTotal + caseTotal;
    const tax = (phoneCaseTotal * 0.1).toFixed(2);
    const total = parseFloat(phoneCaseTotal) + parseFloat(tax);

    document.getElementById('total').innerText = total;
}

document.getElementById('first-plus').addEventListener('click', function(){
    const increaseValue = getValueInput('first-input');
    document.getElementById('first-input').value = increaseValue + 1;
    const phoneTotalPrice = parseInt(document.getElementById('first-input').value) * 1219;
    document.getElementById('phone-total').innerText = phoneTotalPrice;

    setSubTotal();
    setTax();
    setTotal();
})

document.getElementById('first-minus').addEventListener('click', function(){
    const decreaseValue = getValueInput('first-input');
    if(decreaseValue > 1){
        document.getElementById('first-input').value = decreaseValue - 1;
    }
    const phoneTotalPrice = parseInt(document.getElementById('first-input').value) * 1219;
    document.getElementById('phone-total').innerText = phoneTotalPrice;

    setSubTotal();
    setTax();
    setTotal();
})

document.getElementById('second-plus').addEventListener('click', function(){
    const increaseValue = getValueInput('second-input');
    document.getElementById('second-input').value = increaseValue + 1;
    const caseTotalPrice = parseInt(document.getElementById('second-input').value) * 59;
    document.getElementById('case-total').innerText = caseTotalPrice;

    setSubTotal();
    setTax();
    setTotal();
})

document.getElementById('second-minus').addEventListener('click', function(){
    const decreaseValue = getValueInput('second-input');
    if(decreaseValue > 1){
        document.getElementById('second-input').value = decreaseValue - 1;
    }
    const caseTotalPrice = parseInt(document.getElementById('second-input').value) * 59;
    document.getElementById('case-total').innerText = caseTotalPrice;

    setSubTotal();
    setTax();
    setTotal();
})
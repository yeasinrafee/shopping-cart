const getValueInput = function(inputElement){
    const valueString = document.getElementById(inputElement).value;
    const valueNumber = parseInt(valueString);
    return valueNumber;
}

document.getElementById('first-plus').addEventListener('click', function(){
    const increaseValue = getValueInput('first-input');
    document.getElementById('first-input').value = increaseValue + 1;
    const phoneTotalPrice = parseInt(document.getElementById('first-input').value) * 1219;
    document.getElementById('phone-total').innerText = phoneTotalPrice;
})

document.getElementById('first-minus').addEventListener('click', function(){
    const decreaseValue = getValueInput('first-input');
    if(decreaseValue > 1){
        document.getElementById('first-input').value = decreaseValue - 1;
    }
    const phoneTotalPrice = parseInt(document.getElementById('first-input').value) * 1219;
    document.getElementById('phone-total').innerText = phoneTotalPrice;
})

document.getElementById('second-plus').addEventListener('click', function(){
    const increaseValue = getValueInput('second-input');
    document.getElementById('second-input').value = increaseValue + 1;
    const caseTotalPrice = parseInt(document.getElementById('second-input').value) * 59;
    document.getElementById('case-total').innerText = caseTotalPrice;
})

document.getElementById('second-minus').addEventListener('click', function(){
    const decreaseValue = getValueInput('second-input');
    if(decreaseValue > 1){
        document.getElementById('second-input').value = decreaseValue - 1;
    }
    const caseTotalPrice = parseInt(document.getElementById('second-input').value) * 59;
    document.getElementById('case-total').innerText = caseTotalPrice;
})
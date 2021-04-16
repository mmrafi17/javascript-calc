const inputLabel = document.getElementById('inputLabel');

var expression = '';

function press(obj){
    expression += obj;
    inputLabel.value = expression;
}

function pressEqual(){
    inputLabel.value = eval(expression);
    expression = '';
}

function pressAC(){
    expression = '';
    inputLabel.value = expression;
}


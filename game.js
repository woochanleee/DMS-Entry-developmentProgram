var input_number = document.getElementById("input_number");
var result = document.getElementById("result");
var if_correct = document.getElementById("if_correct");

function randomSet() {
    return parseInt(Math.random() * 100);
}

var random_value = randomSet();

function correctReset() {
    result.innerText = "";
    
    var correct_button = document.getElementById("correct_button");
    if_correct.removeChild(correct_button);
}

function checkValue() {
    var inputed_value = input_number.value;
    if(inputed_value > random_value) {
        result.innerText = '미만';
    } else if(inputed_value < random_value) {
        result.innerText = '초과';
    } else {
        result.innerText = '정답!!! 축하드립니당';
        random_value = randomSet();


        var node = document.createElement("button");
        node.id = 'correct_button';
        node.innerText = '다시하기';
        node.onclick = correctReset;
        if_correct.appendChild(node);
    }


}

function onEnterKey (event) {
    if(event.code === "Enter") {
        checkValue();
    }
}


input_number.onkeypress = onEnterKey;
function calculator() {
    // INPUT: Getting the numbers, operator and result that the user has entered and store everyone in a value
    let number1 = parseFloat(document.getElementById('number1').value);
    let operator = document.getElementById('operator').value;
    let number2 = parseFloat(document.getElementById('number2').value);
    let result = parseFloat(document.getElementById('result').value);
    
    /* 
    PROCESSING:
    Checking what operator the user has entered 
    Doing math according to the operator
    Comparing the result entered with the result obtained doing math calculation
    Checking if results match.
    If so, displaying a correct message
    If not, displaying an incorrect message
    */ 
    let math_result;
    let message;

    switch (operator) {
        case "+":
            math_result = number1 + number2;
            break;
        case "-":
            math_result = number1 - number2;
            break;
        case "*":
            math_result = number1 * number2;
            break;
        case "/":
            math_result = number1 / number2;
            break;
    }

    switch (math_result == result) {
        case true:
            message = "Correct! 🏆"
            break;
        case false:
            message = "Incorrect 😢"
            break;            
    } 

    // OUTPUT: Storing the message to the output paragraph
    document.getElementById('output').innerHTML = message; 
}
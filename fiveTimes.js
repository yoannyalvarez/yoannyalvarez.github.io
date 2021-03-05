function display() {
    // INPUT: No input
    
    /* 
    PROCESSING:
    Declaring a variable that holds the result of multiplication amount
    Declaring a variable that holds the output statement
    Creating a loop of 12 iterations of i. 
        calculating the result
        storing the new output statement
    */ 
    let result;
    let output = "";
    for (let i = 1; i <= 12; i++) {
        result = 5 * i;
        output += "5 x " + i + " = " + result + "<br>";
    }


   // OUTPUT: Storing the final output statement to the output div
   document.getElementById('output').innerHTML = output; 
}
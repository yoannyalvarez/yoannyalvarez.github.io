function sum() {
    // INPUT: Getting the ceiling number that the user has entered and store it in a variable.
    let n = parseInt(document.getElementById('number').value);
    
    /* 
    PROCESSING:
    Declaring a variable that holds the total sum.
    Creating a loop that iterates numbers between 1 and ceiling number by two.
    Adding the value of every iteration variable to the sum variable.    
    */
    let sum = 0; 
    for (let i = 1; i <= n; i += 2) {
        sum += i;
    }

    // OUTPUT: Storing the sum value to the output div
    document.getElementById('output').innerHTML = "The sum is: " + sum; 
}
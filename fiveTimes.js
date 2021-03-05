function display() {
    // INPUT: Getting the subtotal, that the user has entered and store it in a variable and using .getDay to get current day.
    
    /* 
    PROCESSING:
    Declaring a variable that holds the total amount
    Checking day and amount to calculate totalamount:
        if subtotal is greater than $50 and is Tuesday or Wednesday:
            totalamount will be the subtotal - discount + tax
        if not: totalamount will be the subtotal + tax
    */ 
    let result;
    let output = "";
    for (let i = 1; i <= 12; i++) {
        result = 5 * i;
        output += "5 x " + i + " = " + result + "<br>";
    }


   // OUTPUT: Storing the totalamount value  to the output div
   document.getElementById('output').innerHTML = output; 
}
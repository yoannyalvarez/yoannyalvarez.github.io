function sum() {
    // INPUT: Getting the subtotal, that the user has entered and store it in a variable and using .getDay to get current day.
    let n = parseInt(document.getElementById('number').value);
    let sum = 0;
    /* 
    PROCESSING:
    Declaring a variable that holds the total amount
    Checking day and amount to calculate totalamount:
        if subtotal is greater than $50 and is Tuesday or Wednesday:
            totalamount will be the subtotal - discount + tax
        if not: totalamount will be the subtotal + tax
    */ 
    for (let i = 1; i <= n; i += 2) {
        sum += i;
    }

    // OUTPUT: Storing the totalamount value  to the output div
    document.getElementById('output').innerHTML = "The sum is: " + sum; 
}
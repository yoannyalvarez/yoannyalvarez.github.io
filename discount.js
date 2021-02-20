function calculator() {
    // INPUT: Getting the subtotal, that the user has entered and store it in a variable and using .getDay to get current day.
    let subtotal = parseFloat(document.getElementById('subtotal').value);
    let dayOfWeek = new Date().getDay();
    /* 
    PROCESSING:
    Declaring a variable that holds the total amount
    Checking day and amount to calculate totalamount:
        if subtotal is greater than $50 and is Tuesday or Wednesday:
            totalamount will be the subtotal - discount + tax
        if not: totalamount will be the subtotal + tax
    */ 
    let totalAmount;

   if (subtotal > 50 && dayOfWeek == 2 || subtotal > 50 && dayOfWeek == 3) {
       totalAmount = subtotal - (0.1 * subtotal) + (0.06 * subtotal) 
   } else {
       totalAmount = subtotal + (0.06 * subtotal) 
   }

   // OUTPUT: Storing the totalamount value  to the output div
   document.getElementById('output').innerHTML = "$" + totalAmount.toFixed(2); 
}
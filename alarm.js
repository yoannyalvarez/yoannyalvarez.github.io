//if monday to friday and not holiday
  //Get up!

//if weekend or holiday
  //Sleep in.

//holidays:
  //January 1 : New Years Day
  //July 4 : U.S. Independence Day
  //December 25 : Christmas

  function checkdate() {
    // INPUT: Storing actual date into separate variables for day of month, month, day of week and date.
    let now = new Date();
    let month = now.getMonth(); 
    let dayOfMonth = now.getDate();
    let dayOfWeek = now.getDay();
    
    /* 
    PROCESSING:
    Declare a variable that holds the message to output 
    Checking date:
        If holiday or not weekend: message sleep in
        If not: message get up
    */ 
    let message;
    if (dayOfMonth == 1 && month == 0 || dayOfMonth == 4 && month == 6 || dayOfMonth == 25 && month == 11 || dayOfWeek == 0 || dayOfWeek == 6) {
        message = "Sleep in...";
    } else {
        message = "Get up!";
    }

    // OUTPUT: Storing the current date and message to the outputs divs
    document.getElementById('output').innerHTML = "TODAY IS: " + now;
    document.getElementById('message').innerHTML = message; 
}
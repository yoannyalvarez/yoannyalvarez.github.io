/* Defining Table
 * Input: no user input
 * Processing: Test the addEnds and getMiddle functions by calling them.
 * Output: The values returned from the addEnds and getMiddle functions.
 */

function addEnds(list) {
    //returns the sum of the first and the last value of an array
    let first = list[0];
    let last = list[list.length - 1];
    let sum = first + last;
    return sum;
}

function getMiddle(list) {
    /*return the value of the middle number in an array. 
     *if the length of the array is an even numbers, returns the average of the two middle numbers.
     */
    let middle = 0;
    if (list.length % 2 == 0) {
        middle = parseInt((list[list.length/2] + list[list.length/2 - 1]) / 2);
    } else {
        middle = list[parseInt(list.length/2)];
    }
    return middle;
}

function test() {
    let list1 = [ 17, 8, 9, 5, 20 ];
    let list2 = [ 12, 4, 8, 15, 17, 5, 20, 11 ];

    // Test the addEnds function by calling it two times.
    let sum1 = addEnds(list1);
    let sum2 = addEnds(list2);

    // Test the getMiddle function by calling it two times.
    let mid1 = getMiddle(list1);
    let mid2 = getMiddle(list2);

    // Build a string to display to the user.
    let output =
            sum1 + '<br>' +
            sum2 + '<br>' +
            mid1 + '<br>' +
            mid2;

    // Display the output string for the user to see.
    document.getElementById('output').innerHTML = output;
}
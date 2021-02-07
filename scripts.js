function converter() {
    // INPUT: Gets the value of the weight in pounds that the user has inputed.
    let pounds = parseFloat(document.getElementById('pounds').value);
    // PROCESSING: Creates a variales called kilograms that holds the value of the input multipliyed by his value per kilograms that the weight has in pounds.
    let kilograms = pounds * 0.453592;
    // OUTPUT: Display the value of the weight in kilograms with its respective kilograms sign. 
    document.getElementById('output').innerHTML = kilograms.toFixed(1) + " kg";
}
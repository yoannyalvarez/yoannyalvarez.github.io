function converter() {
    // INPUT: 
    let pounds = parseFloat(document.getElementById('pounds').value);
    // PROCESSING:
    let kilograms = pounds * 0.453592;
    // OUTPUT: 
    document.getElementById('output').innerHTML = kilograms.toFixed(1) + " kg";
}
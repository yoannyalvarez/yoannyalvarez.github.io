function doFV () {
    let principal = parseFloat(document.getElementById('principal').value);
    let annualRate = parseFloat(document.getElementById('annualRate').value);
    let years = parseInt(document.getElementById('years').value);
    let periods = parseInt(document.getElementById('periods').value);
    let futureValue = computeFutureValue(principal, annualRate, years, periods);
    document.getElementById('output').innerHTML = "$" + futureValue.toFixed(2);
}

function computeFutureValue(principal, annualRate, years, periodsPerYear) {
    let ratePerPediod = annualRate / periodsPerYear;
    let totalPeriods = years * periodsPerYear;
    let futureValue = principal * ((1 + ratePerPediod) ** totalPeriods);
    return futureValue;
}
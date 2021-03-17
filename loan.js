function doPayment () {
    let principal = parseFloat(document.getElementById('principal').value);
    let annualRate = parseFloat(document.getElementById('annualInterestRate').value);
    let years = parseInt(document.getElementById('years').value);
    let payments = parseInt(document.getElementById('payments').value);
    let payment = computePayment(principal, annualRate, years, payments);
    document.getElementById('output1').innerHTML = "$" + payment.toFixed(2);
}

function doBalance () {
    let principal = parseFloat(document.getElementById('principal').value);
    let annualRate = parseFloat(document.getElementById('annualInterestRate').value);
    let years = parseInt(document.getElementById('years').value);
    let payments = parseInt(document.getElementById('payments').value);
    let paidPayments = parseInt(document.getElementById('paidPayments').value);
    let balance = computeBalance(principal, annualRate, years, payments, paidPayments);
    document.getElementById('output2').innerHTML = "$" + balance.toFixed(2);
}

function computePayment (principal, annualRate, years, periodsPerYear) {
    let ratePerPediod = annualRate / periodsPerYear;
    let totalPeriods = years * periodsPerYear;
    let paymentPerPeriod = principal * ratePerPediod / (1 - (1 + ratePerPediod) ** (-1 * totalPeriods));
    return paymentPerPeriod;
}

function computeBalance (principal, annualRate, years, periodsPerYear, numberOfPaymentPaidToDate) {
    let ratePerPediod = annualRate / periodsPerYear; //0.004167
    let payment = computePayment(principal, annualRate, years, periodsPerYear);
    let value = (1 + ratePerPediod) ** numberOfPaymentPaidToDate //169 106.4185754727 
    let balance = principal * value - payment.toFixed(2) * (value - 1) / ratePerPediod;
    return balance;                                                              
}
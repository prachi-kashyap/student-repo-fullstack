function reverse() {
    let number = document.getElementById('input').value;
    let originalNumber = number;
    if (number < 10000000 || number > 99999999) {
        document.getElementById('reversedNumber').innerHTML =
            'Error: Please input an 8 digit number!';
        document.getElementById('reversedNumber').style.color = '#aa3333';
    } else {
        let remainder = 0;
        let reverse = 0;
        while (number != 0) {
            remainder = number % 10;
            reverse = reverse * 10 + remainder;
            number = Math.floor(number / 10);
        }
        document.getElementById('reversedNumber').innerHTML = originalNumber + ' --> ' + reverse;
        document.getElementById('reversedNumber').style.color = '#338833';
    }
}

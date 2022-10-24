function reverse() {
    let number = document.getElementById('input').value;
    if (number.toString().length != 8) {
        document.getElementById('reversedNumber').innerHTML =
            'Error: Please input an 8 digit number!';
        document.getElementById('reversedNumber').style.color = '#aa3333';
    } else {
        let reverse = number.split('').reverse().join('');
        document.getElementById('reversedNumber').innerHTML = number + ' --> ' + reverse;
        document.getElementById('reversedNumber').style.color = '#338833';
    }
}

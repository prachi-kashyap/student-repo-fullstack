function handleSubmit(event) {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let feedback = document.getElementById('feedback').value;
    let checkVal = document.getElementById('checkVal').checked;
    let checkBoxResp = '';
    if (checkVal === true) checkBoxResp = 'Yes, I would like to join the newsletter.';
    else checkBoxResp = 'No, thank you.';
    if (name === '' || email === '') alert('Please fill the required fields');
    else {
        console.group('======== Form Submission ========');
        console.log('Name: ' + name);
        console.log('Email: ' + email);
        console.log('Feedback: ' + feedback);
        console.log('Newsletter: ' + checkBoxResp);
        console.groupEnd();
    }
}

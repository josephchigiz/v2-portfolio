//! Email.js
const btn = document.getElementById('send_email');

document.getElementById('form')
    .addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'service_adhk7oz';
    const templateID = 'template_53hzn2b';

    emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
        btn.value = 'Send Email';
        alert('Sent Successfully!');
        document.getElementById('form').reset();
    }, (err) => {
        btn.value = 'Send it';
        alert(JSON.stringify(err));
    });
});

// function sendEmail() {
//     const form = document.getElementById('form');
//     const btn = form.querySelector('[type="submit"]');
    
//     form.addEventListener('submit', function(event) {
//         event.preventDefault();

//         btn.value = 'Sending...';

//         const serviceID = 'service_adhk7oz';
//         const templateID = 'template_53hzn2b';

//         emailjs.sendForm(serviceID, templateID, this)
//         .then(() => {
//             btn.value = 'Send Email';
//             alert('Sent Successfully!');
//             form.reset();
//         }, (err) => {
//             btn.value = 'Send it';
//             alert(JSON.stringify(err));
//         });
//     });
// }

// cursor
const cursor = document.getElementById("cursor");
const inner = document.getElementById("inner");

let mouseX = 0,
  mouseY = 0;
let cursorX = 0,
  cursorY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.pageX;
  mouseY = e.pageY;
});

function animate() {
  cursorX += (mouseX - cursorX) * 0.1;
  cursorY += (mouseY - cursorY) * 0.1;

  cursor.style.left = cursorX + "px";
  cursor.style.top = cursorY + "px";

  requestAnimationFrame(animate);
}

animate();

// center circle on link hover
document.addEventListener("mouseover", (e) => {
  if (e.target.tagName === "A") {
    cursor.style.height = "45px";
    cursor.style.width = "45px";
    inner.style.height = "35px";
    inner.style.width = "35px";
  }
});

document.addEventListener("mouseout", (e) => {
  if (e.target.tagName === "A") {
    cursor.style.height = "35px";
    cursor.style.width = "35px";
    inner.style.height = "0px";
    inner.style.width = "0px";
  }
});

//! Email.js
const btn = document.getElementById("send_email");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Sending...";

  const serviceID = "service_adhk7oz";
  const templateID = "template_im542yk";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Send Email";
      alert("Sent Successfully!");
      document.getElementById("form").reset();
    },
    (err) => {
      btn.value = "Send it";
      alert(JSON.stringify(err));
    },
  );
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

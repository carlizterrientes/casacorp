
document.addEventListener('DOMContentLoaded', () => {

    const tabs = document.querySelectorAll('.nav-item');

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            let current = document.querySelector(".active");
            current.className = current.className.replace(" active", "");
            current.className = current.className.replace(" border-bottom", "");
            tab.className += " active border-bottom";
        })
    });

}); // end of dom content loaded

function sendEmail() {
    let fullName = document.getElementById('full-name').value ?? "No full name entered";
    let address = document.getElementById('address').value ?? "No address entered";
    let phone = document.getElementById('phone').value ?? "No phone entered";
    let email = document.getElementById('email').value ?? "No email entered";
    let askingPrice = document.getElementById('asking-price').value ?? "No asking price entered";
    let reason = document.getElementById('reason').value ?? "No reason entered";

    let subject = `${fullName}, ${address}`;
    let body = `Full name: ${fullName}%0D%0AAddress: ${address}%0D%0APhone: ${phone}%0D%0AEmail: ${email}%0D%0AAsking: ${askingPrice}%0D%0AReason: ${reason}`;
    window.open(`mailto:info@casacorp.ca?subject=${subject}&body=${body}`);
}
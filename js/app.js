
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
    let body = `Full name: ${fullName} <br/> address: ${address} <br/> phone: ${phone} <br/> email: ${email} <br/> asking: ${askingPrice} <br/> reason: ${reason}`;
    window.open(`mailto:test@example.com?subject=${subject}&body=${body}`);
}
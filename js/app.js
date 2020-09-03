
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
    let subject = "This is a test subject";
    let body = "This is a test body";
    window.open(`mailto:test@example.com?subject=${subject}&body=${body}`);
}
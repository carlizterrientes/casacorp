
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
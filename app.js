document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {

            const title =
                button.parentElement.querySelector("h2").innerText;

            alert(title + " feature coming soon 🚀");

        });
    });

});

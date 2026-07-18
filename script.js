const themeButton = document.getElementById("themeToggle");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    console.log("button clicked");

    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "Light Mode";
    } else {
        themeButton.textContent = "Dark Mode";
    }
});
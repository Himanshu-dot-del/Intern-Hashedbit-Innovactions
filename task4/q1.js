function swapTheme() {
    let appDiv = document.getElementById("app");
    let button = document.getElementById("swap");

    if (appDiv.classList.contains("day")) {
        appDiv.classList.replace("day", "night"); // Change div to night theme
        button.classList.replace("button_day", "button_night"); // Change button to night theme
    } else {
        appDiv.classList.replace("night", "day"); // Change div back to day theme
        button.classList.replace("button_night", "button_day"); // Change button back to day theme
    }
}

const display = document.getElementById("display");
const buttons = document.querySelectorAll("span");

buttons.forEach(button => {
    button.addEventListener("click", function() {
        if (this.id === "clear") {
            display.innerText = "";
        } else if (this.id === "equals") {
            display.innerText = eval(display.innerText);
        } else {
            display.innerText += this.textContent;
        }
    });
});

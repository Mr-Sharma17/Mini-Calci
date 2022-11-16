//by default '0' will be displayed in display screen
document.getElementById('display').innerText='0';

//catching the keys
let keys = document.querySelectorAll("#keyboard>div");
let out = ""; //initilization of an empty string for output

//adding the click event to all the keys
for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener("click", handleCalculations);
};

//code to handle the calculations
function handleCalculations() {

    let x = event.target.innerText;
    if (out === "" && x === "=") {
        document.querySelector("#display").innerText = "0";
        out = "";
        return;
    }
    if (x === "C") {
        document.querySelector("#display").innerText = "0";
        out = "";
        return;
    }
    else if (x === "=") {
        document.querySelector("#display").innerText = (eval(out));
        out = "";
    }
    else {
        out = out + x;
        document.querySelector("#display").innerText = out;
    }
};
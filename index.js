
document.getElementById('display').innerText='0'; //at begning '0' will be displayed

let keys = document.querySelectorAll("#keyboard>div"); //catching the keys

let out = ""; //initilization of an empty string for output

//listening click event to keys
for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener("click", handleCalculations);
};

//handling the calculations
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
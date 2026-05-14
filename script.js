function addNumbers() {
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;
    if (a === "" || b === "") {
        alert("Please enter both numbers");
        return;
    }
    let sum = parseFloat(a) + parseFloat(b);
    document.getElementById("result").innerText = "Result: " + sum;
}

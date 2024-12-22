const input = document.getElementById("input");

function check() {
    const value = input.value.trim().toLowerCase().replace(/[^a-z0-9]/g, '');
    const palindrome = value.split('').reverse().join('');

    if (value === "") {
        const resultDiv = document.getElementById("result");
        resultDiv.textContent = "Please enter a word.";
        resultDiv.style.color = "orange";
        return;
    }

    document.getElementById("result").classList.remove("hidden");
    document.getElementById("history-title").classList.remove("hidden");
    document.getElementById("history").classList.remove("hidden");
    document.getElementById("reset-button").classList.remove("hidden");

    const resultDiv = document.getElementById("result");
    const historyList = document.getElementById("history");
    input.value = "";

    const historyItem = document.createElement("li");
    if (palindrome === value) {
        historyItem.textContent = `${value} - Palindrome`;
        resultDiv.textContent = `"${value}" is a palindrome!`;
        resultDiv.style.color = "green";
    } else {
        historyItem.textContent = `${value} - Not a palindrome`;
        resultDiv.textContent = `"${value}" is not a palindrome.`;
        resultDiv.style.color = "red";
    }
    historyList.appendChild(historyItem);
}

input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        check();
    }
});

function reset() {
    input.value = "";
    document.getElementById("result").textContent = "";
    document.getElementById("result").classList.add("hidden");
    document.getElementById("history").innerHTML = "";
    document.getElementById("history-title").classList.add("hidden");
    document.getElementById("history").classList.add("hidden");
    document.getElementById("reset-button").classList.add("hidden");
}
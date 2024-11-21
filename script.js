let multiplier = 1.0;
let interval;
let isRunning = false;

document.getElementById("start").addEventListener("click", () => {
    if (isRunning) return;
    isRunning = true;
    multiplier = 1.0;
    document.getElementById("result").innerText = "";

    interval = setInterval(() => {
        multiplier += 0.1;
        document.getElementById("multiplier").innerText = multiplier.toFixed(2) + "x";

        if (Math.random() < 0.01 * multiplier) {
            clearInterval(interval);
            document.getElementById("result").innerText = "Crashed at " + multiplier.toFixed(2) + "x!";
            isRunning = false;
        }
    }, 100);
});

document.getElementById("cashout").addEventListener("click", () => {
    if (!isRunning) return;

    clearInterval(interval);
    const bet = parseFloat(document.getElementById("bet").value);
    const winnings = (bet * multiplier).toFixed(2);
    document.getElementById("result").innerText = "You cashed out at " + multiplier.toFixed(2) + "x! Winnings: ₹" + winnings;
    isRunning = false;
});
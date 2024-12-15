let bakiye = 0;

function updateBalanceDisplay() {
  document.getElementById("user-balance").innerText = `$${bakiye}`;
}

function showDepositModal() {
  document.getElementById("deposit-modal").style.display = "block";
}

function showWithdrawModal() {
  document.getElementById("withdraw-modal").style.display = "block";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

function deposit() {
  const amount = parseFloat(document.getElementById("deposit-amount").value);
  if (!isNaN(amount) && amount > 0) {
    bakiye += amount;
    alert(`You have successfully loaded ${amount} $!`);
    updateHistory(`Balance Loaded- ₺${amount}`, "incoming");
    updateBalanceDisplay();
    closeModal("deposit-modal");
  } else {
    alert("Please enter a valid amount.");
  }
}

function withdraw() {
  const amount = parseFloat(document.getElementById("withdraw-amount").value);
  if (!isNaN(amount) && amount > 0) {
    if (amount <= bakiye) {
      bakiye -= amount;
      alert(`You have successfully withdrawn ${amount} $!`);
      updateHistory(`Balance Withdrawn - $ ${amount}`);
      updateBalanceDisplay();
      closeModal("withdraw-modal");
    } else {
      alert("Insufficient funds!");
    }
  } else {
    alert("Please enter a valid amount.");
  }
}

function updateHistory(action, type = "outgoing") {
  const historyContainer = document.querySelector(".modal-history-content");
  const historyItem = document.createElement("div");
  historyItem.className = `history-item ${type}`;
  historyItem.innerText = action;
  historyContainer.insertBefore(historyItem, historyContainer.children[1]);
}

function showHistory() {
  document.getElementById("history-modal").style.display = "block";
}

function closeHistory() {
  document.getElementById("history-modal").style.display = "none";
}

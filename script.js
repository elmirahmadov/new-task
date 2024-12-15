//*********************************** */
let currentUser = JSON.parse(localStorage.getItem("currentUser"));

window.onload = function () {
  if (currentUser) {
    showUserInfo(currentUser);
  }
};

function showSignupForm() {
  document.getElementById("signup-form").style.display = "block";
  document.getElementById("login-form").style.display = "none";
}

function showLoginForm() {
  document.getElementById("login-form").style.display = "block";
  document.getElementById("signup-form").style.display = "none";
}

function closeSignupForm() {
  document.getElementById("signup-form").style.display = "none";
}

function closeLoginForm() {
  document.getElementById("login-form").style.display = "none";
}

function signup() {
  const fullname = document.getElementById("signup-fullname").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  if (fullname && email && password) {
    const user = {
      fullname: fullname,
      email: email,
      password: password,
    };

    localStorage.setItem("currentUser", JSON.stringify(user));

    alert("Registration successful! Please log in.");
    closeSignupForm();
    showLoginForm();
  } else {
    alert("Please fill in all fields!");
  }
}

function login() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  const user = JSON.parse(localStorage.getItem("currentUser"));

  if (user && user.email === email && user.password === password) {
    alert("Login successful!");
    closeLoginForm();
    showUserInfo(user);
  } else {
    alert("The account is not registered or the information is incorrect.");
  }
}

function showUserInfo(user) {
  document.getElementById("auth-links").style.display = "none";
  document.getElementById("user-info").style.display = "block";
  document.getElementById("user-name").innerText = `Welcome, ${user.fullname}`;

  document.getElementById("card-name").textContent = user.fullname;
}

function logout() {
  document.getElementById("auth-links").style.display = "block";
  document.getElementById("user-info").style.display = "none";
  document.getElementById("card-name").textContent = "Kapital Bank";
  localStorage.removeItem("currentUser");
  showLoginForm();
}

function generateCardNumber() {
  let cardNumber = "";
  for (let i = 0; i < 4; i++) {
    cardNumber +=
      Math.floor(Math.random() * 10000)
        .toString()
        .padStart(4, "0") + " ";
  }
  return cardNumber.trim();
}

window.onload = function () {
  const cardNumber = generateCardNumber();
  document.getElementById("card-number").textContent = cardNumber;
  document.getElementById("card-expiry").textContent = "12/33";
  document.getElementById("card-cvc").textContent = "202";

  currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (currentUser) {
    showUserInfo(currentUser);
  }
};
//*********************************** */

function showDepositForm() {
  document.getElementById("deposit-modal").style.display = "block";
}

function closeDepositForm() {
  document.getElementById("deposit-modal").style.display = "none";
}

function showWithdrawForm() {
  document.getElementById("withdraw-modal").style.display = "block";
}

function closeWithdrawForm() {
  document.getElementById("withdraw-modal").style.display = "none";
}

function showHistory() {
  document.getElementById("history-modal").style.display = "block";
}

function closeHistory() {
  document.getElementById("history-modal").style.display = "none";
}

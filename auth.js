function checkPassword() {
  const pass = document.getElementById("passwordInput").value;
  if (pass === "darkaccess2025") {
    localStorage.setItem("auth", "true");
    window.location.href = "protected.html";
  } else {
    alert("Wrong Password!");
  }
}

function forgotPass() {
  const email = "sohamchakraborty909@gmail.com";
  alert(`Please contact admin.\nA reset link will be sent to:\n${email}`);
}
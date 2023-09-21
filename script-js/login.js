//  Step-1: add click event handler with the submit btn.
document.getElementById("btn-submit").addEventListener("click", function () {
  // Step-2: get the email address inside the html element.
  // always remember to use .value to get text from an input filed
  const emailField = document.getElementById("user-email");
  const email = emailField.value;
  // Step-3: get password
  // 3.1 set id on the html element
  // 3.2 get the element
  // 3.3 get the value from the element
  const passField = document.getElementById("user-password");
  const password = passField.value;

  // DANGER : Do not email verify email password on the client side
  // Step-4: verify email and password
  if (email === "faisal@gmail.com" && password === "12345") {
    window.location.href = "http://127.0.0.1:5500/bank.html";

    /* Simulate a mouse click:
    window.location.href = "http://www.w3schools.com";
    // window.location.pathname = "../bank.html";
    // window.location.replace("http://127.0.0.1:5500/bank.html");
    // Simulate an HTTP redirect:
    window.location.replace("http://www.w3schools.com"); */
  } else {
    alert("Your password is wrong");
  }
});

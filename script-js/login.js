//  Step-1: add click event handler with the submit btn.
document.getElementById("btn-submit").addEventListener("click", function () {
  // Step-2: get the email address inside the html element.
  // always remember to use .value to get text from an input filed
  const emailField = document.getElementById("user-email");
  const email = emailField.value;
  const passField = document.getElementById("user-password");
  const password = passField.value;
  console.log(email, password);

  if (email === "faisal@gmail.com" && password === "12345") {
    console.log("btn clicked");
    window.location.href = "../bank.html";
  }
  // Step-3: get password
  // 3.1 set id on the html element
  // 3.2 get the element
  // 3.3 get the value from the element
});

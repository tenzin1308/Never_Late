export default function validateForm(event, state) {
  // clear all error messages
  const inputs = document.getElementsByClassName("is-danger");
  for (let i = 0; i < inputs.length; i++) {
    if (!inputs[i].classList.contains("error")) {
      inputs[i].classList.remove("is-danger");
    }
  }
  // check if the input username is empty string
  if (state.hasOwnProperty("username") && state.username === "") {
    document.getElementById("username").classList.add("is-danger");
    return { blankfield: true };
  }
  // check if the input firstname is empty string
  if (state.hasOwnProperty("firstname") && state.firstname === "") {
    document.getElementById("firstname").classList.add("is-danger");
    return { blankfield: true };
  }
  // check if the input lastname is empty string
  if (state.hasOwnProperty("lastname") && state.lastname === "") {
    document.getElementById("lastname").classList.add("is-danger");
    return { blankfield: true };
  }
  // check if the input email is empty string
  if (state.hasOwnProperty("email") && state.email === "") {
    document.getElementById("email").classList.add("is-danger");
    return { blankfield: true };
  }
  // check if the input verificationcode is empty string
  if (state.hasOwnProperty("verificationcode") && state.verificationcode === "") {
    document.getElementById("verificationcode").classList.add("is-danger");
    return { blankfield: true };
  }
  // check if the input password is empty string
  if (state.hasOwnProperty("password") && state.password === "") {
    document.getElementById("password").classList.add("is-danger");
    return { blankfield: true };
  }
  // check if the input oldpassword is empty string
  if (state.hasOwnProperty("oldpassword") && state.oldpassword === "") {
    document.getElementById("oldpassword").classList.add("is-danger");
    return { blankfield: true };
  }
  // check if the input newpassword is empty string
  if (state.hasOwnProperty("newpassword") && state.newpassword === "") {
    document.getElementById("newpassword").classList.add("is-danger");
    return { blankfield: true };
  }
  // check if the input confirmpassword is empty string
  if (state.hasOwnProperty("confirmpassword") && state.confirmpassword === "") {
    document.getElementById("confirmpassword").classList.add("is-danger");
    return { blankfield: true };
  }
  // check if the input password and confirmpassword match or not
  if (
    state.hasOwnProperty("password") &&
    state.hasOwnProperty("confirmpassword") &&
    state.password !== state.confirmpassword
  ) {
    document.getElementById("password").classList.add("is-danger");
    document.getElementById("confirmpassword").classList.add("is-danger");
    return { passwordmatch: true };
  }
  // check if the input newpassword and confirmpassword match or not
  if (
    state.hasOwnProperty("newpassword") &&
    state.hasOwnProperty("confirmpassword") &&
    state.newpassword !== state.confirmpassword
  ) {
    document.getElementById("newpassword").classList.add("is-danger");
    document.getElementById("confirmpassword").classList.add("is-danger");
    return { passwordmatch: true };
  }
  return;
}
const email = document.getElementById("email");
const password = document.getElementById("password");

let newUsers = JSON.parse(localStorage.getItem("newUsers"));

loadProfile.addEventListener("click", () => {
  if (email.value == "" || password.value == "") {
    alert("all fields are mandatory");
  } else if (
    newUsers.find(
      (data) => data.email === email.value && data.password !== password.value
    )
  ) {
    alert("incorrect email or password");
  } else if (
    newUsers.find(
      (data) => data.email === email.value && data.password === password.value
    )
  ) {
    let userIndex = newUsers.findIndex(
      (data) => data.email === email.value && data.password === password.value
    );
    localStorage.setItem("signedInUserIndex", userIndex);
    alert("login successful");
    window.location.href = "profile.html";
  } else {
    alert("you do not hav an account , sign up!");
    location.href = "createacct.html";
  }
});

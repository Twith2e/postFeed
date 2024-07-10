const usersName = document.getElementById("usersName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const createAcctBtn = document.getElementById("createAcct");
const usernameRegex = /^[a-zA-Z][a-zA-Z0-9_-]{4,15}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{8,}$/;

let newUsers = JSON.parse(localStorage.getItem("newUsers")) || [];

if (
  usersName.value === "" &&
  email.value === "" &&
  password.value === "" &&
  confirmPassword.value === "" &&
  month.value === "" &&
  day.value === "" &&
  year.value === ""
) {
  createAcctBtn.style.backgroundColor = "white";
} else {
  createAcctBtn.style.backgroundColor = "#787a7a";
}

createAcctBtn.addEventListener("click", () => {
  if (
    usersName.value === "" ||
    email.value === "" ||
    password.value === "" ||
    confirmPassword.value === "" ||
    month.value === "" ||
    day.value === "" ||
    year.value === ""
  ) {
    alert("all fields are mandatory");
  } else if (!emailRegex.test(email.value.trim())) {
    alert("email format is incorrect");
  } else if (newUsers.find((data) => data.email === email.value.trim())) {
    alert("user already exists");
  } else if (!passwordRegex.test(password.value.trim())) {
    alert(
      "password should be atleast 8 chars, with a special char, a number , a lowercase & uppercase letter"
    );
  } else if (confirmPassword.value.trim() !== password.value.trim()) {
    alert("passwords do not match");
  } else {
    let userObj = {
      name: usersName.value,
      handle: handle.value,
      email: email.value,
      password: password.value,
      month: month.value,
      day: day.value,
      year: year.value,
      dateJoined: formatTime(),
      agreement: true,
    };

    newUsers.push(userObj);
    localStorage.setItem("newUsers", JSON.stringify(newUsers));
    window.location.href = "sign-in.html";
    console.log(newUsers);
  }
});

function formatTime() {
  let todaysDate = new Date();
  let month = todaysDate.getMonth();
  let year = todaysDate.getFullYear();
  let actualMonth = "";

  switch (true) {
    case month === 0:
      actualMonth = "January";
      break;
    case month === 1:
      actualMonth = "February";
      break;
    case month === 2:
      actualMonth = "March";
      break;
    case month === 3:
      actualMonth = "April";
      break;
    case month === 4:
      actualMonth = "May";
      break;
    case month === 5:
      actualMonth = "June";
      break;
    case month === 6:
      actualMonth = "July";
      break;
    case month === 7:
      actualMonth = "August";
      break;
    case month === 8:
      actualMonth = "September";
      break;
    case month === 9:
      actualMonth = "October";
      break;
    case month === 10:
      actualMonth = "November";
      break;
    case month === 11:
      actualMonth = "December";
      break;
    default:
      break;
  }

  return `${actualMonth} ${year}`;
}

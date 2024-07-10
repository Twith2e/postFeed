const fileInput = document.getElementById("fileInput");
const handles = document.querySelectorAll("#handle");
const names = document.querySelectorAll("#name");
const dateJoined = document.getElementById("dateJoined");
const DOB = document.getElementById("DOB");
const pfp = document.getElementById("pfp");
let isCollapse = true;

let usersProfile = JSON.parse(localStorage.getItem("newUsers"));
let signedInUserIndex = localStorage.getItem("signedInUserIndex");
let currentObj = [];

if (signedInUserIndex === null) {
  alert("youre not authorized");
  window.location.href = "login.html";
} else {
  function expandCollapse() {
    isCollapse = !isCollapse;
    if (isCollapse == true) {
      document.querySelector(".messages").style.bottom = "0";
      document.querySelector(".collapse-btn").style.display = "block";
      document.querySelector(".expand-btn").style.display = "none";
    } else {
      document.querySelector(".messages").style.bottom = "-43%";
      document.querySelector(".collapse-btn").style.display = "none";
      document.querySelector(".expand-btn").style.display = "block";
    }
  }

  fileInput.addEventListener("change", (e) => {
    let profilePic = e.target.files[0];

    const myReader = new FileReader();

    if (profilePic) {
      myReader.readAsDataURL(profilePic);
    }

    myReader.addEventListener("load", (e) => {
      pfp.src = e.target.result;
      pfp.classList.add("profile-pfp", "big-pfp");
      usersProfile[signedInUserIndex].image = e.target.result;
      console.log(usersProfile);
      localStorage.setItem("newUsers", JSON.stringify(usersProfile));
    });
  });

  function loadProfile() {
    handles.forEach((handle) => {
      handle.innerHTML = `@${usersProfile[signedInUserIndex].handle}`;
      handle.style.color = "#787a7a";
    });

    names.forEach((name) => {
      name.innerHTML = usersProfile[signedInUserIndex].name;
    });

    let combinedDOB =
      usersProfile[signedInUserIndex].month +
      " " +
      usersProfile[signedInUserIndex].year;
    dateJoined.innerHTML += ` ${usersProfile[signedInUserIndex].dateJoined}`;
    DOB.innerHTML += ` ${combinedDOB}`;
    if (usersProfile[signedInUserIndex].image) {
      pfp.src = usersProfile[signedInUserIndex].image;
    } else {
      pfp.src = "images/default pfp.png";
    }
  }

  loadProfile();
}

function logout() {
  localStorage.removeItem("signedInUserIndex");
  alert("logout successful");
  window.location.href = "login.html";
}

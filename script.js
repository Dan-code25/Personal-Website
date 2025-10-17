const hamburger = document.getElementById("hamburger-bar");
const backBtn = document.getElementById("back-btn");
const downloadBtn = document.getElementById("download-btn");
const contactBtn = document.getElementById("contact-btn");

function toggleSideBar(){
  const sidebar = document.querySelector(".sidebar");
  return sidebar.classList.toggle("active");
}

function downloadCV(){
  const link = document.createElement("a");
  link.href = "files/Dan_CV.pdf"; 
  link.download = "Dan_CV.pdf"; 
  document.body.appendChild(link);
  link.click(); 
  document.body.removeChild(link);
  return;
}

function contactGmail(){
  const email = "danjhenielbringas1125@gmail.com";
  window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, "_blank");
  return;
}

hamburger.addEventListener("click", toggleSideBar);
backBtn.addEventListener("click", toggleSideBar);
downloadBtn.addEventListener("click", downloadCV);
contactBtn.addEventListener("click", contactGmail);



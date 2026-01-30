// Loader
window.onload = () => {
  document.getElementById("loader").style.display = "none";
};

// Mobile menu
function toggleMenu(){
  let nav = document.getElementById("navLinks");
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

// Dark mode
document.getElementById("modeToggle").onclick = () => {
  document.body.classList.toggle("dark");
};

// Scroll to top
let topBtn = document.getElementById("topBtn");

window.onscroll = () => {
  topBtn.style.display = window.scrollY > 200 ? "block" : "none";
};

topBtn.onclick = () => {
  window.scrollTo({top:0, behavior:'smooth'});
};

// Form validation
document.getElementById("contactForm").onsubmit = function(e){
  e.preventDefault();

  let name = nameInput = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let msg = document.getElementById("message").value.trim();

  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if(!name || !email || !msg){
    alert("Please fill all fields");
    return;
  }

  if(!emailPattern.test(email)){
    alert("Enter valid email");
    return;
  }

  alert("Message submitted successfully!");
};

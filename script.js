const VALID_USER = "Jing";
const VALID_PASS = "08/12/2007";

// Floating background petals
(function(){
  const container = document.getElementById("petals");
  const emojis = ["💖","💕","✨"];

  for(let i=0; i<15; i++){
    const el = document.createElement("div");
    el.className = "petal";
    el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.left = Math.random() * 100 + "vw";
    el.style.fontSize = (Math.random() * 20 + 10) + "px";
    el.style.animationDuration = (5 + Math.random() * 5) + "s";
    el.style.animationDelay = Math.random() * 5 + "s";
    container.appendChild(el);
  }
})();

// Login Logic
function handleLogin(){
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  const errorMsg = document.getElementById("error-msg");

  // Check credentials (case sensitive for "Jing")
  if(user === VALID_USER && pass === VALID_PASS){
    showPage("proposal-page");
    document.getElementById("display-name").textContent = user;
    errorMsg.textContent = ""; // clear errors
  } else {
    errorMsg.textContent = "Wrong credentials! 💔";
  }
}

function showPage(id){
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function handleLogout(){
  showPage("login-page");
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  document.getElementById("response-text").textContent = "";
}

function sayYes(){
  document.getElementById("response-text").innerHTML = 
    "<strong>You just made me the happiest person alive 💖🥺</strong>";
  document.getElementById("noBtn").style.display = "none";
}

// "No" button runs away
const noBtn = document.getElementById("noBtn");
noBtn.addEventListener("mouseover", () => {
    // Generate random positions within the viewport
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});
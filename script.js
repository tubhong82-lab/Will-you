const VALID_USER = "Jing";
const VALID_PASS = "08/12/2007";

// petals (less messy now)
(function(){
  const container = document.getElementById("petals");
  const emojis = ["💖","💕","✨"];

  for(let i=0;i<10;i++){
    const el = document.createElement("div");
    el.className="petal";
    el.textContent = emojis[Math.floor(Math.random()*emojis.length)];
    el.style.left = Math.random()*100+"vw";
    el.style.animationDuration = (6+Math.random()*6)+"s";
    container.appendChild(el);
  }
})();

// login
function handleLogin(){
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if(user === VALID_USER && pass === VALID_PASS){
    showPage("proposal-page");
    document.getElementById("display-name").textContent = user;
  } else {
    document.getElementById("error-msg").textContent = "Wrong 💔";
  }
}

// switch page
function showPage(id){
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// logout
function handleLogout(){
  showPage("login-page");
}

// YES
function sayYes(){
  document.getElementById("response-text").textContent =
    "You just made me the happiest person alive 💖🥺";
}

// NO runs away 😈
setTimeout(()=>{
  const btn = document.getElementById("noBtn");
  if(btn){
    btn.addEventListener("mouseover",()=>{
      const x = Math.random()*200-100;
      const y = Math.random()*200-100;
      btn.style.transform = `translate(${x}px, ${y}px)`;
    });
  }
},500);
function toggleMenu() {
  const menu = document.getElementById("navMenu");
  menu.classList.toggle("show");
}

function updateCountdown() {
  const launchDate = new Date("2025-12-08T00:00:00");
  const now = new Date();
  const diff = launchDate - now;

  if (diff <= 0) {
    document.querySelector(".flip-container").innerHTML = "🎉 Plot.Me™ ist jetzt live!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").textContent = String(days).padStart(2, '0');
  document.getElementById("hours").textContent = String(hours).padStart(2, '0');
  document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
  document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
}

setInterval(updateCountdown, 1000);

function checkPassword() {
  const input = document.getElementById("password").value;
  const message = document.getElementById("access-message");
  if (input === "plotme001") {
    message.innerHTML = "✅ Zugriff gewährt. Weiterleitung...";
    setTimeout(() => {
      window.location.href = "haha.html";
    }, 1500);
  } else {
    message.innerHTML = "❌ Falsches Passwort.";
  }
}

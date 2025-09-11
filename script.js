// Countdown
const countdown = document.getElementById("countdown");
if (countdown) {
  const launchDate = new Date("2025-12-08T00:00:00");
  function updateCountdown() {
    const now = new Date();
    const diff = launchDate - now;
    if (diff <= 0) {
      countdown.innerHTML = "🎉 Plot.Me™ ist jetzt live!";
      return;
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    countdown.innerHTML = `${days} Tage ${hours} Std ${minutes} Min ${seconds} Sek`;
  }
  setInterval(updateCountdown, 1000);
}

// Passwort
function checkPassword() {
  const input = document.getElementById("password").value;
  const message = document.getElementById("access-message");
  if (input === "plotme001") {
    message.innerHTML = "✅ Zugriff gewährt. Willkommen in der Akte.";
  } else {
    message.innerHTML = "❌ Falsches Passwort.";
  }
}

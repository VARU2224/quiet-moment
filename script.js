let current = 1;

function nextScreen() {
  document.getElementById(`screen${current}`).classList.remove("active");
  current++;
  document.getElementById(`screen${current}`).classList.add("active");
}

document.getElementById("screen1").onclick = nextScreen;

function spin() {
  const outcomes = [
    "A quiet smile",
    "Something unfinished",
    "A memory you didn’t expect",
    "Nothing — and that’s okay",
    "You were meant to see this"
  ];

  const choice = outcomes[Math.floor(Math.random() * outcomes.length)];
  document.getElementById("result").innerText = choice;

  setTimeout(() => {
    nextScreen();
  }, 2000);
}

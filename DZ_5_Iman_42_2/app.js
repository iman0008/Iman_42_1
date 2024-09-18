function showAction(color) {
  document.getElementById("red-light").classList.remove("active");
  document.getElementById("yellow-light").classList.remove("active");
  document.getElementById("green-light").classList.remove("active");

  document.getElementById(`${color}-light`).classList.add("active");

  const actionText = document.getElementById("action-text");

  if (color === "red") {
    actionText.textContent = "Стой";
    actionText.style.color = "red";
  } else if (color === "yellow") {
    actionText.textContent = "Жди";
    actionText.style.color = "yellow";
  } else if (color === "green") {
    actionText.textContent = "Иди";
    actionText.style.color = "green";
  }
}

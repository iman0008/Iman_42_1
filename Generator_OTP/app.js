document.getElementById("generateBtn").addEventListener("click", function () {
  // Генерируем 4 случайных числа от 0 до 9
  let randomNumbers = [];
  for (let i = 0; i < 4; i++) {
    randomNumbers.push(Math.floor(Math.random() * 10));
  }

  // Отображаем сгенерированные числа на экране
  document.getElementById("num1").textContent = randomNumbers[0];
  document.getElementById("num2").textContent = randomNumbers[1];
  document.getElementById("num3").textContent = randomNumbers[2];
  document.getElementById("num4").textContent = randomNumbers[3];
});

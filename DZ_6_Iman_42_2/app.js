const generateNumber = () => {
  return Math.round(Math.random() * 10);
};

const createElement = (number) => {
  const element = document.createElement("div");
  element.classList.add("element");
  element.innerHTML = number;
  return element;
};

const generateOTP = () => {
  const otp = document.querySelector(".otp");
  otp.innerHTML = "";
  const otpLength = 4;
  for (let i = 0; i < otpLength; i++) {
    const randomNumber = generateNumber();
    const otpElement = createElement(randomNumber);
    otp.appendChild(otpElement);
  }
};

const error = document.querySelector("button");
error.onclick = () => {
  generateOTP();
};

const btn = document.getElementById("btn");

function randomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const changeColor = () => {
  const newColor = randomColor();
  const container = document.getElementById("bgColor");
  container.style.background = newColor;

  const colorName = document.getElementById("colorName");
  colorName.textContent = newColor;

  console.log(newColor);
};

btn.addEventListener("click", changeColor);

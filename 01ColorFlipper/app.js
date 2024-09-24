// function changeColor() {
//   document.getElementById("bgColor").style.backgroundColor = "turquoise";
// }

const color = [
  "tomato",
  "orange",
  "violet",
  "gray",
  "yellow",
  "pink",
  "lightgreen",
];

const btn = document.getElementById("btn");

const changeColor = () => {
  const randomColor = color[Math.floor(Math.random() * color.length)];
  const container = document.getElementById("bgColor");

  container.style.background = randomColor;

  console.log("clicked");
};

btn.addEventListener("click", changeColor);

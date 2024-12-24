const url = "https://api.openweathermap.org/data/2.5/weather";

const apiKey = "f00c38e0279b7bc85480c3fe775d518c";

// add event listener to the button
const btnInput = document.getElementById("city-input-btn");
btnInput.addEventListener("click", function () {
  const cityName = document.getElementById("city-input").value;
  weatherFn(cityName);
});

//add event listener for Enter key
const btnPress = document.getElementById("city-input");
btnPress.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const cityName = document.getElementById("city-input").value;
    weatherFn(cityName);
  }
});

// construct api call and fetch data
async function weatherFn(cName) {
  const temp = `${url}?q=${cName}&appid=${apiKey}&units=metric`;

  const res = await fetch(temp);

  if (res.ok) {
    const data = await res.json();
    weatherShowFn(data);
    console.log(data);
  } else {
    if (res.status === 404) {
      alert("City not found. Please try again");
    } else {
      alert("Error fetching weather data:");
    }
  }
}

function weatherShowFn(data) {
  document.getElementById("city-name").textContent = data.name;
  document.getElementById("date").textContent = moment().format(
    "MMMM Do YYYY, h:mm:ss a"
  );
  document.getElementById("temperature").innerHTML = `${data.main.temp}°C`;
  document.getElementById("description").textContent =
    data.weather[0].description;
  document.getElementById(
    "wind-speed"
  ).innerHTML = `Wind Speed: ${data.wind.speed} m/s`;

  // Set the weather icon source dynamically
  document.getElementById(
    "weather-icon"
  ).src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

  // Show the weather info section
  document.getElementById("weather-info").style.display = "block";
}

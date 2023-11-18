// ACCESSING ALL THE HTML COMPONENTS REQUIRED TO PERFORM ACTIONS ON
let display = document.getElementById("display");
let cityRef = document.getElementById("city");
let cityValue = cityRef.value;

// Fetch data from open weather API and display
let getWeather = () => {
  let cityValue = cityRef.value;

  //If input field is empty
  if (cityValue.length == 0) {
    display.innerHTML = `<h3 class="msg">Please enter a city name</h3>`;
  }

  //If input field is NOT empty
  else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=108dd9a67c96f23039937fe6f3c91963&units=metric`;
    //Clear the input field
    cityRef.value = "";
    fetch(url)
      .then((resp) => resp.json())
      //If city name is valid
      .then((data) => {
        console.log(data);
        console.log(data.weather[0].icon);
        console.log(data.weather[0].description);
        console.log(data.name);
        console.log(data.main.temp_min);
        console.log(data.main.temp_max);
        display.innerHTML = `
      <div class="first-section">
        <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
        <h4 class="desc">${data.weather[0].description}</h4>
        <h4 class="temp">${data.main.temp}°C</h4>
        <h2 class="name">${data.name}</h2>
      </div>
      <div class="second-section">
        <div class="detailed">
          <div class="detailed-one">
            <i class="fa-solid fa-wind"></i>
            <div>
              <h4>${data.main.humidity}%</h4>
              <p>Humidity</p>
            </div>
          </div>
          <div class="detailed-one">
            <i class="fa-solid fa-water"></i>
            <div>
              <h4>${data.wind.speed} km/h</h4>
              <p>Wind Speed</p>
            </div>
          </div>
        </div>
      </div>
      `;
      })
      .catch((err) => {
        console.log(err);
        result.innerHTML = `<h3 class="msg">City not found</h3>`;
      });
  }
};

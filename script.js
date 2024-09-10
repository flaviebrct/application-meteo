const loader = document.querySelector(".loader-container");
const errorInformation = document.querySelector(".error-information");

async function getWeatherData() {
  try {
    const response = await fetch(
      "http://api.airvisual.com/v2/nearest_city?key=bc515028-f51b-439e-a308-bc4d23da88a0"
    );

    const responseData = await response.json();

    const sortedData = {
      city: responseData.data.city,
      country: responseData.data.country,
      iconId: responseData.data.current.weather.ic,
      temperature: responseData.data.current.weather.tp,
    };
    console.log(sortedData);
  } catch (error) {}
}
getWeatherData();

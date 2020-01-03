const request = require('request');

const forecast = (lat, lng, callBack) => {
  const url = `https://api.darksky.net/forecast/bdd1cc18c210c33e5ec96d24172660c5/${lat},${lng}?units=si`;
  request({ url, json: true }, (error, response, body) => {
    if (error) {
      callBack('Unable to connect to Weather Service!', undefined);
    }
    else if (body.error) {
      callBack('Unable to find location!', undefined);
    }
    else {
      callBack(undefined, body.daily.data[0].summary + "It is currently " + body.currently.temperature + " degrees out.The high today is " + body.daily.data[0].temperatureMax + " with a low of " + body.daily.data[0].temperatureMin +". There is a " + body.currently.precipProbability + "% chance of rain");
    }
  });
}

module.exports = forecast;

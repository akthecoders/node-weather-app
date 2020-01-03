const request = require('request')

const geoCode = (address, callBack) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiYWtzaGF5LWt1bWFyIiwiYSI6ImNrNHdieTRuYTVxdWEzbG82NTQ3bWJnbDUifQ.3u6F-R3XjBYVY9XUUUrz4w`;
  request({ url, json: true }, (error, response, body) => {
    if (error) {
      callBack('Unable to connect to location services!', undefined);
    }
    else if (body.features.length == 0) {
      callBack('Unable to find location! Try again with different term', undefined);
    }
    else {
      callBack(undefined, {
        latitude:body.features[0].center[1],
        longitude:body.features[0].center[0],
        location: body.features[0].place_name,
      });
    }
  });
}

module.exports = geoCode;
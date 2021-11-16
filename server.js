let http = require("http");
let fs = require("fs");
let port = 5000;

let requests = require("requests");
let homeFile = fs.readFileSync("./home.html", "utf-8");
let replaceValue = (tempValue, orgValue) => {
  let temperature = tempValue.replace(
    "{temperature}",
    Math.floor(orgValue.main.temp - 273)
  );
  temperature = temperature.replace("{desc}", orgValue.weather[0].description);
  temperature = temperature.replace("{longitude}", orgValue.coord.lon);
  temperature = temperature.replace("{latitude}", orgValue.coord.lat);

  temperature = temperature.replace(
    "{minTemp}",
    Math.floor(orgValue.main.temp_min - 273) // max and min temp value getting same right now ,possible api mistake
  );
  temperature = temperature.replace(
    "{maxTemp}",
    Math.floor(orgValue.main.temp_max - 273)
  );

  temperature = temperature.replace("{status}", orgValue.weather[0].main);

  temperature = temperature.replace("{countryName}", orgValue.sys.country);
  temperature = temperature.replace("{cityName}", orgValue.name);
  return temperature;
};

let server = http.createServer((req, res) => {
  if (req.url == "/") {
    requests(
      `https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=338d7bf462b0bde48cce335d0aca468f`
    )
      .on("data", (chunkData) => {
        // here the data is comming in json form
        // json to object data use parse method
        let objData = JSON.parse(chunkData); // yes now i am getting data in object key value pair heheheh
        //object ot array
        let arrData = [objData];
        let realTimeData = arrData
          .map((newData) => replaceValue(homeFile, newData))
          .join("");
        //console.log(newData);

        // console.log(realTimeData);
        res.write(realTimeData);
      })
      .on("end", (err) => {
        if (err) {
          return console.log(err);
        } else {
          res.end();
        }
      });
  }
});

server.listen(5000, "127.0.0.1", () => {
  console.log(`yeah...server is running on port no:${port}`);
});

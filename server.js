const express = require("express");
const request = require("request");
const app = express();
const fetch = require("node-fetch");
const cors = require("cors");

const port = 3000;
app.use(cors());
let odata = {};
// url = "https://jsonplaceholder.typicode.com/posts";
// url1 = "https://www.nseindia.com/api/option-chain-indices?symbol=BANKNIFTY";
app.get("https://expressoc.herokuapp.com/", async (req, res) => {
  const xx = await request(
    {
      headers: {
        "accept-encoding": "deflate",
        "accept-language": "en-US,en;q=0.9",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36",
      },
      url: "https://www.nseindia.com/api/option-chain-indices?symbol=BANKNIFTY",
      json: true,
    },
    (error, response, body) => {
      odata=body;
    //   return body;
    }
  );
  res.json(odata["filtered"]);
//   res.send("NSE Option Data by Roopesh The Great");
  
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});


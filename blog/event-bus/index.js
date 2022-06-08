const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

app.post("/events", (req, res) => {
  const event = req.body;

  let port = 4000;

  // downside - no error handling if one of the apps is failing, no exception handling techniques
  for (let i = 0; i < 3; i++) {
    axios.post(`http://localhost:${port}/events`, event);
    port++;

    res.send({ status: "ok" });
  }
});

app.listen(4005, () => {
  console.log("listening on 4005");
});

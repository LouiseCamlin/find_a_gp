const fetch = require("node-fetch");
const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const createRouter = require("./helpers/create_router.js");

let nhsInfo = [];

function getInfo() {
  fetch(
    "https://www.opendata.nhs.scot/api/3/action/datastore_search?resource_id=204bf88e-a2e7-4e57-8515-66c2f4ee4c28&limit=1000"
  )
    .then(response => response.json())
    .then(function(data) {
      return (nhsInfo = data["result"]["records"]);
    })
    .then(() => {
      app.use("/api", createRouter(nhsInfo));
    });
}

getInfo();

app.listen(3001, function() {
  console.log(`Listening on port ${this.address().port}`);
});

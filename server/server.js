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
    "https://www.opendata.nhs.scot/api/3/action/datastore_search?resource_id=c01dc5f3-86ea-4a3d-8e0c-1d29f04a85d7&limit=935"
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

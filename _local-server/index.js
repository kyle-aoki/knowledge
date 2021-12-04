const express = require("express");
const path = require("path");

const app = express();

const rootDir = path.join(process.cwd(), "..");

app.use(express.static(rootDir));

app.listen(80, () => {
  console.log("knowledge server listening at http://localhost");
});

const express = require("express");
const path = require("path");
const chalk = require("chalk");

const app = express();

const rootDir = path.join(process.cwd(), "..");

app.use(express.static(rootDir));

app.listen(80, () => {
  console.log(chalk.green("knowledge server listening at http://localhost"));
});

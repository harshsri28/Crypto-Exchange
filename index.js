const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const routes = require("./src/routes");
const logger = require("./config/winstonConfig");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(routes);
const port = 3000;

app.listen(port, (error, data) => {
  if (error) {
    logger.error("server error occured", error);
  }
  logger.info(`server is running on port ${port}`);
});

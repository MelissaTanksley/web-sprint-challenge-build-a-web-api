const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");

const projectDb = require("./data/helpers/projectModel");
const actionsDb = require("./data/helpers/actionModel");
const projectRoute = require("./projectRoute")
const actionsRoute = require("./actionRoute")

const server = express();

server.use(express.json());
server.use("/", morgan("tiny"));
server.use("/", helmet());

server.use("/actions", actionsRoute)
server.use("/projects", projectRoute)

server.get("/", (req, res, next) => {
  res.send("Hi");
});















const port = process.env.PORT || 5000;

server.listen(port, () => console.log(`server is listening on ${port}`));
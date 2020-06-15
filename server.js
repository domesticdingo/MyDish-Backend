require("dotenv").config();

//setup
const express = require("express");
const server = express();
const router = express.Router();
const port = process.env.PORT || 4447;

//import and use middleware
server.use(require("cors")());
server.use(require("helmet")());
server.use(express.json());

//catchall endpoint
server.get("/", (req, res) => {
  res.status(200).json("Yup, it working.");
});

//routers
server.use(require("./endpoints/routers/users"));
server.use(require("./endpoints/routers/recipes"));
server.use(require("./endpoints/routers/pervious_versions"));
server.use(require("./endpoints/routers/images"));

// Admin only routes
const validate = require("./endpoints/middleware/validate");
server.use(validate.token, validate.admin);
server.use(require("./endpoints/routers/instructions"));
server.use(require("./endpoints/routers/recipe_ingredients"));
server.use(require("./endpoints/routers/ingredients"));
server.use(require("./endpoints/routers/notes"));
server.use(require("./endpoints/routers/units"));
server.use(require("./endpoints/routers/tags"));

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json(err);
});

//signal that the server is in fact running
server.listen(port, () => {
  console.clear();
  console.log(`\n*** Go ahead, take my port ${port} **\n`);
});

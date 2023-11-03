require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { PORT } = require("./src/utils/config");
const app = express();

const definitionRoutes = require("./src/controllers/definition.controller");
const languageRoutes = require("./src/controllers/language.controller");

app.use(cors());
app.use(express.json());

app.use("/api", definitionRoutes);
app.use("/api", languageRoutes);

const port = PORT || 8000;
app.listen(port, () => console.log(`Listening on port ${port}`));
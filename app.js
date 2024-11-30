const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = process.env.PORT || 4000;
const routes = require("./routes/routes");
require("./config/db");

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", routes);

app.listen(PORT, () => console.info(`server running on port ${PORT}`));


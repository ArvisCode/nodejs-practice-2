console.log("Hi backend!!!");
require("colors");
const dotenv = require("dotenv");
const path = require("path");
const envPath = path.join(__dirname, "..", "config", ".env");
dotenv.config({ path: envPath });

const connectDB = require("../config/db");

const express = require("express");
const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

const { driversRoutes } = require("./routes");

const api = require("../config/version");
// add routes
app.use(api.version.path, driversRoutes);

app.use((req, res) => {
  res.status(404).send("Not found");
});

const { PORT } = process.env;
let server = app.listen(PORT, async () => {
  try {
    await connectDB();
    console.log(`Server running on port ${PORT}`.cyan.bold.underline);
  } catch (error) {
    console.log(`Error: ${error.message}`.red);
    server.close(() => process.exit(1));
  }
});

//process.on("unhandledRejection", (error) => {
//  if (error) {
//    console.log(`Error: ${error.message}`.red);
//    server.close(() => process.exit(1));
//  }
//});

const express = require("express");
const cors = require("cors")
const app = express();
const { readdirSync } = require("fs");
const dotenv = require('dotenv');
const bodyParser = require("body-parser");
const helmet = require("helmet");
dotenv.config({path:'./config.env'});

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors({credentials: true}));

app.use((err, req, res, next) => {
  if (err) {
    res.status(500).json({ message: "The Server Error Here" });
  }
});

app.get("/", (req, res) => res.send("Express on Vercel"));

readdirSync("./routes").map(r => app.use("/api/v1", require(`./routes/${r}`)))
module.exports = app;
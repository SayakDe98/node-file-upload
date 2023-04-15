const express = require("express");
const router = require("./router");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());
app.use("/", router);

app.listen(5000, () => console.log("5000 port on"));

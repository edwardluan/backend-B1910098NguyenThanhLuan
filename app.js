const express = require("express");
const cors = require("cors");

const app = express();

const contactsRouter = require("./app/routes/contact.route");

app.use(cors());
app.use(express.json());

app.get("/", (rep, res) => {
    res.json({ message: "test get."});
});

app.use("/api/contacts", contactsRouter);
module.exports = app;

module.exports = app;
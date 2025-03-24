const express = require("express");
const connectDb = require("./config/dbConnection")
const dotenv = require("dotenv").config();
const cors = require("cors")

const app = express();

const PORT = process.env.PORT || 5000;

connectDb();
app.use(express.json());
app.use("/api/projects", require("./routes/projectRoutes"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



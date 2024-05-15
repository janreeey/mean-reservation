const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8003;

const mongoose = require("mongoose");
const routes = require("./routes/routes");

app.use(cors());
app.use(express.json());

app.use(routes);

const mongoDB = async () => {
  await mongoose.connect(
    "mongodb+srv://mean-reservation:mean-reservation@mean-reservation.mu13o4v.mongodb.net/mean-reservation"
  );
};

mongoDB()
  .then(() => {
    console.log("Connected to Database");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(PORT, () => {
  console.log(`Server is Running on PORT: ${PORT}`);
});

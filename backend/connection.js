const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://KrishnaVijayan:iWX-D2-qcbUwSJ9@cluster0.jfrzgjs.mongodb.net/Marian_2025?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected!");
  })
  .catch((error) => {
    console.log(error);
  });
const mongoose = require("mongoose");

const db = () => {
  mongoose
    .connect(process.env.DB_URI, {
      dbName: "restapi",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to the DB succesully");
    })
    .catch((err) => {
      console.log(`DB connection err:, ${err}`);
    });
};

module.exports= db;

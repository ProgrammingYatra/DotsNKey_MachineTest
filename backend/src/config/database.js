const mongoose = require("mongoose");

//avoid deprecation warning
mongoose.set("strictQuery", false);

//connection to database
exports.connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true })
    .then((data) =>
      console.log(`MongoDb is Connected To ${data.connection.host}`) 
    );
};

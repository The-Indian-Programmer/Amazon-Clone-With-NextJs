const mongoose = require("mongoose");
const connectDb = () => {
  if (mongoose.connections[0].readyState) {
    console.log("Already Connected");
    return;
  }
  mongoose.connect(
    process.env.MONGO_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) {
        console.log(err.message);
        throw err;
      }
      console.log("Connected to the database");
    }
  );
};

export default connectDb;

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const uri =
      "mongodb+srv://shoaib:Bismillah@cluster0.m58zman.mongodb.net/admin_dashboard?retryWrites=true&w=majority";
    const conn = await mongoose
      .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .catch((error) => console.log(error));
    const connection = mongoose.connection;
    console.log(`MONGODB CONNECTED SUCCESSFULLY!`.inverse.green.bold);
  } catch (error) {
    console.log(error);
    return error;
  }
};
// mongodb+srv://shoaib:Bismillah@cluster0.74h2t.mongodb.net/ezz_clothing?retryWrites=true&w=majority
module.exports = connectDB;

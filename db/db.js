const mongoose = require("mongoose");

const dbUri = `mongodb+srv://nodeMongoose:nodeMongoose@cluster0.5trbi.mongodb.net/express-poll?retryWrites=true&w=majority`;

if (!dbUri) {
  console.error("Mongo url not set in env file");
  return new Error("Mongo url not set in env file");
}

mongoose.connect(
  dbUri,
  {
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.error(`failed to connect using mongoose ${err}`);
    } else {
      console.log(`connected to db server`);
    }
  }
);

module.exports = mongoose;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 
const GoogleBookSchema = new Schema({
  id: ObjectId,
  title: String,
  authors: Array,
  description: String,
  image: String,
  link: String
});

var GoogleBook = mongoose.model("GoogleBook", GoogleBookSchema);

module.exports = GoogleBook;
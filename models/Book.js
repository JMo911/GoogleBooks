const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 
export default GoogleBook = new Schema({
  title: String,
  authors: Array,
  description: String,
  image: String,
  link: String
});
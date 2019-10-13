const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 
export default GoogleBook = new Schema({
  id: ObjectId,
  title: String,
  authors: Array,
  description: String,
  image: String,
  link: String
});
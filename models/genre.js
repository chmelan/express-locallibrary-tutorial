var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var GenreInstanceSchema = new Schema({
  name: { type: String, minlength: 3, maxlength: 100 },
});

GenreInstanceSchema.virtual("url").get(() => {
  return "/catalog/genreinstance/" + this._id;
});

module.exports - mongoose.model("GenreInstance", GenreInstanceSchema);

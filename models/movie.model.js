const mongoose = require("mongoose");
mongoose.set('strictQuery', true);

const movieModeloPlantilla = {
  titulo: String,
  genero: String,
  director: String,
};

const movieSchema = mongoose.Schema(movieModeloPlantilla);


const Movies = mongoose.model("movies", movieSchema);

module.exports = Movies;
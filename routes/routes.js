const router = require("express").Router();
const movies = require("../controllers/movie.controllers");


router.post("/insert", movies.insert); // inserta en la BD la pelicula.






module.exports = router;

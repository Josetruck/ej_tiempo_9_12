const express = require("express");
const app = express();
const bd = require("./database/mongoDB")
const movieModel = require("./models/movie.model")

app.use(express.json());
app.use(express.static("build")); 


app.post("/insert", async (req, res) => {
    try {
        const { titulo, genero, director } = req.body;;
        const insertMovies = await movieModel.create({ titulo, genero, director });
        res.json("exito");
    } catch (error) {
        res.json(error)
    }
});

const port = 5000;

app.listen(port, () => console.log(`SERVER ON: ${port}`));


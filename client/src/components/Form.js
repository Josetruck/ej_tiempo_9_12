import React, { useState} from "react";


const Form = (props) => {

    const [titulo, setTitulo] = useState("");
    const [genero, setGenero] = useState("");
    const [director, setDirector] = useState("");
   const [message, setMessage] = useState("")


    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = fetch("http://127.0.0.1:5000/insert", {
                method: "POST",
                body: JSON.stringify({
                  "titulo":titulo,
                  "genero":genero,
                  "director":director,
                }),
              });
          let resJson = await res.json();
          if (res.status === 200) {
            setTitulo("");
            setGenero("");
            setDirector("");
            setMessage("pelicula insertada");
          } else {
            setMessage("Algun error ha ocurrido");
          }
        } catch (err) {
          console.log(err);
        }
      };



    
    return (
        <div id="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={titulo}
          placeholder="Titulo"
          onChange={(e) => setTitulo(e.target.value)}
        />
        <input
          type="text"
          value={genero}
          placeholder="Genero"
          onChange={(e) => setGenero(e.target.value)}
        />
        <input
          type="text"
          value={director}
          placeholder="Director"
          onChange={(e) => setDirector(e.target.value)}
        />

        <button type="submit">Insertar</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
        </div>

    )
}

export default Form;
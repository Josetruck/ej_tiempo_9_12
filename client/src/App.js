import { useState } from "react";

function App() {
  const [titulo, setTitulo] = useState("");
  const [genero, setGenero] = useState("");
  const [director, setDirector] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    await metaInfo("POST", { titulo, genero, director }, "http://127.0.0.1:5000/insert");
    /*  try {
      let res = await fetch("http://127.0.0.1:5000/insert", {
        method: "POST",
        body: {
          "titulo": titulo,
          "genero": genero,
          "director": director
        },
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setMessage("Pelicula creada correctamente");
      } else {
        setMessage("Error");
      }
    } catch (err) {
      console.log(err);
    }
  }; */
}
const metaInfo = async (method, info, endpoint) => {
  let datos = {
    method: method,
    body: JSON.stringify(info),
    mode: "cors",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-type": "application/json",
    },
  };

 await fetch(endpoint, datos)
    .then((res) => res.json(res))
    .then((res) => {
      setMessage(res)
    });
};
return (
      <div className="App">
        <form action="http://127.0.0.1:5000/insert" method="post" onSubmit={handleSubmit}>
          <input
            type="text"
            name= "titulo"
            value={titulo}
            placeholder="Titulo"
            onChange={(e) => setTitulo(e.target.value)}
          />
          <input
            type="text"
            name="genero"
            value={genero}
            placeholder="Genero"
            onChange={(e) => setGenero(e.target.value)}
          />
          <input
            type="text"
            name="director"
            value={director}
            placeholder="Director"
            onChange={(e) => setDirector(e.target.value)}
          />

          <button type="submit">Insert</button>

          <div className="message">{message ? <p>{message}</p> : null}</div>
        </form>
      </div>
    );
  }

  export default App;
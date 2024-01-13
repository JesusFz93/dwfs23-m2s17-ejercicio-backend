const express = require("express");
const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.send("Hola mundo");
});

app.get("/saludo", (req, res) => {
  res.send("Buen dia a todos");
});

app.get("/query", (req, res) => {
  const nombre = req.query.nombre;
  const apellido = req.query.apellido;

  res.json({
    ok: true,
    msg: "Informacion encontrada.",
    data: { nombreUsuario: nombre, apellidoUsuario: apellido },
  });
});

app.get("/:id", (req, res) => {
  const id = req.params.id;

  res.json({
    ok: true,
    msg: "Informacion obtenida.",
    data: {
      id: id,
      nombre: "Jesus",
    },
  });
});

app.listen(PORT, () => {
  console.log(`Servidor en linea en el purto ${PORT}`);
});

const express = require("express");
const app = express();
const PORT = 4000;

const fs = require("fs");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hola mundo");
});

app.get("/archivo", (req, res) => {
  // const nombre = req.body.nombre;
  const { nombre } = req.body;

  fs.readFile(nombre, "utf8", (err, data) => {
    if (err) {
      // console.log(err);
      return res.status(400).json({
        ok: false,
        msg: "Error al obtener el archivo",
        data: "",
      });
    } else {
      // console.log(data);
      return res.json({
        ok: true,
        msg: "Archivo leido",
        data: data,
      });
    }
  });
});

app.post("/archivo", (req, res) => {
  // const nombre = req.body.nombre;
  // const contenido = req.body.contenido;

  const { nombre, contenido } = req.body;

  fs.writeFile(nombre, contenido, (err) => {
    if (err) {
      // console.log(err);
      return res.json({
        ok: true,
        msg: "Archivo creado",
        data: "",
      });
    } else {
      // console.log("Archivo creado");
    }
  });

  return res.json({
    ok: true,
    msg: "Archivo creado",
    data: "",
  });
});

app.listen(PORT, () => {
  console.log(`Servidor en linea en el purto ${PORT}`);
});

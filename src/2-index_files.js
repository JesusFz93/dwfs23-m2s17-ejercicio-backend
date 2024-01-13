const express = require("express");
const app = express();
const PORT = 4000;
const fs = require("fs");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hola mundo");
});

app.get("/archivo/crear", (req, res) => {
  fs.writeFile("archivo.txt", "Adios mundo", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Archivo creado");
    }
  });

  res.json({
    msg: "Archivo creado",
  });
});

app.get("/archivo/leer", (req, res) => {
  fs.readFile("archivo.txt", "utf8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });

  res.json({
    msg: "Archivo leido",
  });
});

app.get("/archivo/actualizar", (req, res) => {
  fs.appendFile("archivo.txt", "\nHola mundo", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Archivo actualizado");
    }
  });

  res.json({
    msg: "Archivo actualizado",
  });
});

app.get("/archivo/eliminar", (req, res) => {
  fs.unlink("archivo.txt", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Archivo eliminado");
    }
  });

  res.json({
    msg: "Archivo eliminado",
  });
});

app.listen(PORT, () => {
  console.log(`Servidor en linea en el purto ${PORT}`);
});

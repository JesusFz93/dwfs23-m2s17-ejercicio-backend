const express = require("express");
const app = express();
const PORT = 4000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hola mundo");
});

// Obtener usuarios
app.get("/usuarios", (req, res) => {
  res.json({
    msg: "Usuarios obtenidos",
  });
});

// Obtener usuario
app.get("/usuarios/:id", (req, res) => {
  res.json({
    msg: "Usuario obtenido",
  });
});

// Crear usuario
app.post("/usuarios", (req, res) => {
  res.json({
    msg: "Usuario creado",
  });
});

// Actualizar usuario
app.put("/usuarios/:id", (req, res) => {
  res.json({
    msg: "Usuario actualizado",
  });
});

// Eliminar usuario
app.delete("/usuarios/:id", (req, res) => {
  res.json({
    msg: "Usuario eliminado",
  });
});

app.listen(PORT, () => {
  console.log(`Servidor en linea en el purto ${PORT}`);
});

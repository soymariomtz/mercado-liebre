const express = require("express");
const path = require("path");
const app = express();

const PUERTO = 3000;

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/home.html"));
});
app.get("/register", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/register.html"));
});
app.get("/login", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/login.html"));
});
app.use(express.static("public"));

// app.listen(PUERTO, () => {
//   console.log(`Server ${PUERTO} está UP`);
// });
app.listen(process.env.PORT || 3000, function () {
  console.log("Servidor Corriendo en el puerto 3000");
});

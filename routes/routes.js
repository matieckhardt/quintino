  
const { Router } = require("express");
const nodemailer = require("nodemailer");
const path = require("path");

const router = Router();

const ruta = path.join(__dirname, "../public/");

// rutas del colegio

router.get("/", (req, res) => {
  res.send(index);
});
router.get("/index", function (req, res) {
  res.sendFile(ruta + "Index.html");
});
router.get("/Home/Services", function (req, res) {
  res.sendFile(ruta + "servicios.html");
});
router.get("/Home/Showroom", function (req, res) {
  res.sendFile(ruta + "soluciones.html");
});
router.get("/Home/Form", function (req, res) {
  res.sendFile(ruta + "form.html");
});
router.get("/tour", function (req, res) {
  res.sendFile(ruta + "tour.html");
});
router.get("/sales", function (req, res) {
  res.sendFile(ruta + "sales.html");
});
router.get("/ObtenerImagenesCarrousel", function (req, res) {
  res.sendFile(ruta + "/img/carousel/car.json");
});


// POST 

router.post("/send-mail", (req, res) => {
  res.json(req.body);
});

module.exports = router;
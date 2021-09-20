  
const { Router } = require("express");
const nodemailer = require("nodemailer");
const Filtros = require("../models/filtros")
const Images = require("../models/images")
const Categorias = require("../models/categorias")
const Soluciones = require("../models/soluciones")
const path = require("path");

const router = Router();

const ruta = path.join(__dirname, "../public/");

// rutas de quintino

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



// Rutas Mongo

router.get("/OperacionFiltros/ObtenerFiltros", async (req, res) => {
  const data = await Categorias.find();
  res.json(data);
});

router.get("/OperacionFiltros/ObtenerImagenes", async (req, res) => {
  const data = await Images.find();
  res.json(data);
});
router.get("/OperacionFiltros/ObtenerSoluciones", async (req, res) => {
  const data = await Soluciones.find();
  res.json(data);
});

// POST 

router.post("/postCat", async (req, res) => {
  const datos = [ ];
  try {
    datos.forEach(async (dato) => {
      const images = new Images(dato);
      console.log(images);
      await images.save();
    });
    res.status(201).json("ok");
  } catch (error) {
    res.status(500).send("There was a problem registering the client");
  }
});



module.exports = router;
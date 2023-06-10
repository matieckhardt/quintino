const { Router } = require("express");
const nodemailer = require("nodemailer");

const Images = require("../models/images");

const path = require("path");
const homeCtrl = require("../controllers/home.controller");
const soluCtrl = require("../controllers/solutions.controller");
const adminCtrl = require("../controllers/admin.controller");
const catCtrl = require("../controllers/cat.controller");

const router = Router();

const ruta = path.join(__dirname, "../public/");

// rutas de quintino

router.get("/", homeCtrl.getPage);
router.get("/index", homeCtrl.getPage);

router.get("/Home/Services", function (req, res) {
  res.sendFile(ruta + "servicios.html");
});
router.get("/soluciones", soluCtrl.getPage);
router.get("/soluciones/filter/:catNumber", soluCtrl.getFilterPage);
router.get("/soluciones/:id", soluCtrl.getSolucionFull);

router.get("/Home/Form", function (req, res) {
  res.sendFile(ruta + "form.html");
});

router.get("/homeHbs", homeCtrl.getPage);

router.get("/login", function (req, res) {
  res.render("login");
});

router.get("/admin", adminCtrl.getPage);

router.get("/admin/categorias", adminCtrl.getCategories);
router.post("/admin/cat/new", catCtrl.createCat);
router.post("/admin/cat/save", catCtrl.save);
router.delete("/admin/cat/delete/:id", catCtrl.delCat);

router.get("/admin/usuarios", adminCtrl.getPage);
router.get("/admin/consultas", adminCtrl.getPage);
router.get("/admin/curriculums", adminCtrl.getPage);

router.get("/admin/:id", adminCtrl.getSolucion);
router.get("/admin/new/solucion/", adminCtrl.newSolu);
router.post("/admin/create", adminCtrl.createSolu);

router.post("/admin/save", adminCtrl.save);
router.delete("/admin/delete/:id", adminCtrl.delSolu);

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  // Perform your authentication logic here
  // For simplicity, we'll just check if the username and password are both "admin"
  if (username === "romina" && password === "Vidal23") {
    res.redirect("/admin");
  } else {
    res.send("Invalid username or password");
  }
});

// POST

router.post("/postCat", async (req, res) => {
  const datos = [];
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

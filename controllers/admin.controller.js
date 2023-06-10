const adminCtrl = {};
const Categorias = require("../models/categorias");
const SubCategorias = require("../models/subCategorias");
const Soluciones = require("../models/Soluciones");

adminCtrl.getPage = async (req, res) => {
  const cat = await SubCategorias.aggregate([
    {
      $group: {
        _id: "$CategoriaNombre",
        ListaSubCategorias: {
          $push: "$$ROOT",
        },
      },
    },
  ]);
  const solu = await Soluciones.aggregate([
    {
      $sort: {
        Orden: 1,
      },
    },
  ]);

  res.render("admin", {
    categorias: cat,
    solucion: solu[0],
    soluciones: solu,
    layout: "adminLayout",
  });
};

adminCtrl.getSolucion = async (req, res) => {
  try {
    const soluEdit = await Soluciones.find({ _id: req.params.id }).lean();
    return res.render("solucionEdit", {
      solucion: soluEdit,
      layout: "adminLayout",
    });
  } catch (error) {
    res.status(500).send("Eso no es un id valido");
  }
};

adminCtrl.getCategories = async (req, res) => {
  try {
    const cats = await SubCategorias.find().lean();
    return res.render("categorias", {
      categorias: cats.reverse(),
      layout: "adminLayout",
    });
  } catch (error) {
    res.status(500).send("Eso no es un id valido");
  }
};

adminCtrl.newSolu = async (req, res) => {
  try {
    const soluEdit = await Soluciones.find().lean();
    return res.render("solucionNew", {
      layout: "adminLayout",
    });
  } catch (error) {
    res.status(500).send("Eso no es un id valido");
  }
};

adminCtrl.createSolu = async (req, res) => {
  try {
    const ticket = new Soluciones(req.body);
    await ticket.save();
    return res.status(200).redirect("/admin");
  } catch (error) {
    res.status(500).send("There was a problem registering the mate");
  }
};

adminCtrl.save = async (req, res) => {
  try {
    console.log(req.body);
    const data = await Soluciones.findOneAndUpdate(
      { id: req.body.id },
      req.body
    );

    return res.status(200).redirect("/admin");
  } catch (error) {
    res.status(500).send("There was a problem registering the mate");
  }
};

adminCtrl.delSolu = async (req, res) => {
  try {
    console.log("Document Deleted", req.params);

    const solu = await Soluciones.findByIdAndDelete({ _id: req.params.id });
    res.status(200).redirect("/admin");
  } catch {
    res.status(400).send("hubo un error");
  }
};

module.exports = adminCtrl;

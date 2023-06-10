const soluCtrl = {};
const Categorias = require("../models/categorias");
const SubCategorias = require("../models/subCategorias");

const Soluciones = require("../models/Soluciones");

soluCtrl.getPage = async (req, res) => {
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
  const solu = await Soluciones.find().lean();

  res.render("soluciones", {
    categorias: cat,
    soluciones: solu,
    layout: "sidebarLayout",
  });
};

soluCtrl.getFilterPage = async (req, res) => {
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
  const catSelected = parseInt(req.params.catNumber);
  const solu = await Soluciones.aggregate([
    {
      $match: { catNumber: { $in: [catSelected] } },
    },
  ]);

  res.render("soluciones", {
    categorias: cat,
    soluciones: solu,
    layout: "sidebarLayout",
  });
};

soluCtrl.getSolucionFull = async (req, res) => {
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
  const solu = await Soluciones.find().lean();
  res.render("solucionesFull", {
    categorias: cat,
    soluciones: solu,
    layout: "sidebarLayout",
  });
};

module.exports = soluCtrl;

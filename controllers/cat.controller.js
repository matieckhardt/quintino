const catCtrl = {};
const Categorias = require("../models/categorias");
const SubCategorias = require("../models/subCategorias");

catCtrl.getCategories = async (req, res) => {
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

catCtrl.createCat = async (req, res) => {
  try {
    console.log("new cat", req.body);
    const ticket = new SubCategorias(req.body);
    await ticket.save();
    return res.status(200).redirect("/admin/categorias");
  } catch (error) {
    res.status(500).send("There was a problem registering the mate");
  }
};

catCtrl.save = async (req, res) => {
  try {
    console.log("newCat", req.body);
    const data = await SubCategorias.findOneAndUpdate(
      { _id: req.body.id },
      req.body
    );

    return res.status(200).redirect("/admin/categorias");
  } catch (error) {
    res.status(500).send("There was a problem registering the mate");
  }
};

catCtrl.delCat = async (req, res) => {
  try {
    const data = await SubCategorias.findByIdAndDelete({ _id: req.params.id });
    console.log("Document Deleted", data);

    return res.status(200).send("todo ok!");
  } catch {
    res.status(400).send("hubo un error");
  }
};

module.exports = catCtrl;

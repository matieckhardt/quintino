const homeCtrl = {};
const Categorias = require("../models/categorias");
const News = require("../models/News");

homeCtrl.getPage = async (req, res) => {
  const cat = await Categorias.find().lean();
  const news = await News.find().lean();
  res.render("home", { categorias: cat, news: news });
};

module.exports = homeCtrl;

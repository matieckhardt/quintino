const { Schema, model } = require("mongoose");

const filtrosSchema = new Schema(
  {
  NombreCategorias: String,
	ListaSubCategorias: Array,
  },
  {
    timestamps: true,
  }
);
module.exports = model("filtros", filtrosSchema);
const { Schema, model } = require("mongoose");

const subCategoriasSchema = new Schema(
  {
    CategoriaNombre: String,
    SubcategoriaId: Number,
    CategoriaId: Number,
    Nombre: String,
  },
  {
    timestamps: true,
  }
);
module.exports = model("subCategorias", subCategoriasSchema);

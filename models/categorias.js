const { Schema, model } = require("mongoose");

const categoriasSchema = new Schema(
  {
    NombreCategoria: String,
    ListaSubcategorias: [
      {
        SubcategoriaId: Number,
        Nombre: String,
        CategoriaId: Number,
        NombreCorto: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);
module.exports = model("categorias", categoriasSchema);

const { Schema, model } = require("mongoose");

const consultaSchema = new Schema(
  {
    ListaSubCategorias: Array,
    datos: Object,
  },
  {
    timestamps: true,
  }
);

module.exports = model("consulta", consultaSchema);
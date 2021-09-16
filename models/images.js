const { Schema, model } = require("mongoose");

const imagesSchema = new Schema(
  {
    imagenId: Number,
    solucionId: Number,
    imagen: Array,
  },
  { timestamps: true }
);
module.exports = model("images", imagesSchema);
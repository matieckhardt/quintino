const { Schema, model } = require("mongoose");

const imagesSchema = new Schema(
  {
    ImagenId: Number,
    SolucionId: Number,
    Imagen: String,
  },
  { timestamps: true }
);
module.exports = model("images", imagesSchema);

const { Schema, model } = require("mongoose");

const newsSchema = new Schema(
  {
    titulo: String,
    imageUrl: String,
    link: String,
  },
  { timestamps: true }
);
module.exports = model("news", newsSchema);

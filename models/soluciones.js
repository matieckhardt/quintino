const { Schema, model } = require("mongoose");

const solucionesSchema = new Schema(
  {
    SolucionId: Number,
    Nombre: String,
    Description: String, 
    DescriptionCorta: String, 
    Youtube: String, 
    Categorias: String, 
    Bullet1: String, 
    Bullet2: String, 
    Bullet3: String, 
    Bullet4: String, 
    Bullet5: String, 
    Bullet6: String, 
    Bullet7: String, 
    Link1: String, 
    Link2: String, 
    Link3: String, 
    Clasificacion: String, 
    Orden: String, Number,
    Oculto: String, 
    Link1Descripcion: String,
    Link2Descripcion: String, 
    Link3Descripcion: String, 
  },
  {
    timestamps: true,
  }
);

module.exports = model("soluciones", solucionesSchema);
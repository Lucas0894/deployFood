const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    //Asigno un Datatype UUID para que me genere un ID unico con letras y numeros para que no se pise con alguna receta que tenga el mismo ID si lo generara solo por defecto.
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    //Colocamos una imagen para poder requerirla despues en el front end y poder usarla.
    image:{
      type: DataTypes.STRING,
      allowNull: false
    },
    summary: {
      type: DataTypes.STRING,
      allowNull: false
    },
    healthScore:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    analyzedInstructions: {
      type: DataTypes.STRING,
    },
    dishTypes: {
      type: DataTypes.STRING
    }
    ,
    //Me creo una propiedad llamada createdInDb que lo que va a hacer sera distinguir lo que me traigo de la DB y lo que me traigo de la Api.
    createdInDb:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    }
  });
};

const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Pokemon", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [1, 40],
      },
    },
    img: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    hp: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1,
        max: 255,
      },
    },
    attack: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1,
        max: 255,
      },
    },
    defense: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1,
        max: 255,
      },
    },
    speed: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
        max: 100,
      },
    },
    height: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
        max: 100,
      },
    },
    weight: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
        max: 9999,
      },
    },
  });
};
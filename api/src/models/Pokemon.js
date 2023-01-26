const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemon', {
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
        len: [1,20]
      },
    },
    img: {
      type: DataTypes.STRING,
      defaultValue: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png",
    },
    type: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: ["normal"],
    },
    hp:{
      type: DataTypes.INTEGER,
      defaultValue: 10,
      validate: {
        min: 1,
        max: 255
      },
    },
    attack: {
      type: DataTypes.INTEGER,
      defaultValue: 10,
      validate: {
        min: 1,
        max: 255
      }
    },
    defense: {
      type: DataTypes.INTEGER,
      defaultValue: 10,
      validate: {
        min: 1,
        max: 255
      }
    },
    speed: {
      type: DataTypes.INTEGER,
      defaultValue: 10,
      validate: {
        min: 1,
        max: 255
      }
    },
    height: {
      type: DataTypes.INTEGER,
      defaultValue: 10,
      validate: {
        min: 1,
        max: 1000
      }
    },
    weight: {
      type: DataTypes.INTEGER,
      defaultValue: 10,
      validate: {
        min: 1,
        max: 1000
      }
    },
  });
};





	// {
	// 	"id": 1,
	// 	"name": "bulbasaur",
	// 	"img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
	// 	"type": [
	// 		"grass",
	// 		"poison"
	// 	],
	// 	"health": 45,
	// 	"attack": 49,
	// 	"defense": 49,
	// 	"speed": 45,
	// 	"height": 7,
	// 	"weight": 69
	// },
	
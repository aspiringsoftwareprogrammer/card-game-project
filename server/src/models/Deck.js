// create your model here

const {DataTypes} = require("sequelize");
const sequelize = require("../db/config");

const Deck = sequelize.define('Deck', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    name:{
        type: DataTypes.STRING
    },
    xp:{
        type: DataTypes.INTEGER
    }
    
})

module.exports = Deck
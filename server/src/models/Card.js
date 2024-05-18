// create your model here

const {DataTypes} = require("sequelize");
const sequelize = require("../db/config");

const Card = sequelize.define('Card', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    name:{
        type: DataTypes.STRING
    },
    mojo:{
        type: DataTypes.INTEGER
    },
    stamina:{
        type: DataTypes.INTEGER
    },
    imgUrl:{
        type: DataTypes.STRING
    }
    
})

module.exports = Card
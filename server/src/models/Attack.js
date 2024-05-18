const {DataTypes} = require("sequelize");
const sequelize = require("../db/config");

const Attack = sequelize.define('Attack', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    title:{
        type: DataTypes.STRING
    },
    mojoCost:{
        type: DataTypes.INTEGER
    },
    staminaCost:{
        type: DataTypes.INTEGER
    }
    
})

module.exports = Attack
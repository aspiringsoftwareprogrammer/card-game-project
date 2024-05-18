// create your model here
const {DataTypes} = require("sequelize");
const sequelize = require("../db/config");

const User = sequelize.define('User', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true

    },
    username:{
        type: DataTypes.STRING
    }
    
})

module.exports = User
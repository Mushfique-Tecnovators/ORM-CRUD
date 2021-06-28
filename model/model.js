const Sequelize = require('sequelize');
const db = require('../database/connection');

module.exports = db.sequelize.define("myTable",{
    id:{
        type: Sequelize.BIGINT,
        primaryKey : true,
        autoIncrement : true,
    },
    fname:{
        type: Sequelize.STRING,
    },
    lname:{
        type: Sequelize.STRING,
    },
    email:{
        type: Sequelize.STRING,
    },
    phone:{
        type: Sequelize.BIGINT,
    },
})

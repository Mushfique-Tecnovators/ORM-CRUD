const Sequelize = require('sequelize');
const db = {}
const sequelize = new Sequelize("mydatabase","root","password",{
    host: "localhost", dialect: "mysql", logging: false,
    pool : {
        max:10,
        min: 0,
        acquire: 30000,
        idle:10000,
    },
})

db.Sequelize = Sequelize;
db.sequelize = sequelize;
sequelize.sync();

module.exports = db;

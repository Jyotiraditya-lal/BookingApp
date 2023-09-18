const Sequelize= require('sequelize')

const sequelize= new Sequelize ('Booking-App','root', 'Vaibhavlal123', {dialect: 'mysql', host: 'localhost'})

module.exports = sequelize
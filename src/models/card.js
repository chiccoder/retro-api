const {Model, DataTypes} = require('sequelize')


class Card extends Model {}
module.exports = (sequelize) => {
    Card.init({
        uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            unique:true,
            primaryKey: true
        },
        cardText: {
            type: DataTypes.STRING,
            allowNull: false
        },
        likes: {
            type: DataTypes.INTEGER
        },
        votes: {
            type: DataTypes.INTEGER
        }
    },{
        sequelize,
        // options
        freezeTableName: true
    })
    return Card
};
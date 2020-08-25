const Sequelize = require('sequelize');
 
const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    dialect: 'postgres',
  },
);
sequelize.authenticate()
.then(() => {
  console.log('connected to DB');
});

const models = {
  Card: require('./card')(sequelize),
};
 

// Object.keys(models).forEach(key => {
//   if ('associate' in models[key]) {
//     models[key].associate(models);
//   }
// });
 
module.exports = { models, sequelize };
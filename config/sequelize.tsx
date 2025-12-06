// database.js
import { Sequelize } from 'sequelize';
import mysql2 from 'mysql2'; // Needed to fix sequelize issues with WebPack
import 'dotenv/config'; // Optional: use dotenv to load environment variables

const dbName = process.env.DB_NAME as string;
const dbUser = process.env.DB_USER as string;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_HOST;

//console.log(dbName);
//console.log(dbUser);
//console.log(dbPassword);
//console.log(dbHost);

const sequelize = new Sequelize(dbName, dbUser, dbPassword,
  {
    host: dbHost,
    port: 3306,
    dialect: 'mysql',
    dialectModule: mysql2, // Needed to fix sequelize issues with WebPack
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

// Authenticate and sync the database if necessary
try {
  await sequelize.authenticate();
  //console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

export default sequelize;

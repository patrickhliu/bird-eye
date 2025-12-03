// src/services/sequelize.ts
import { Sequelize } from "sequelize";

export class sequelizeConfig {
  private static instance: Sequelize;

  // The constructor is private to prevent direct instantiation
  private constructor() {
    // Connection details from environment variables
    const dbName = process.env.DB_NAME as string;
    const dbUser = process.env.DB_USER as string;
    const dbPassword = process.env.DB_PASSWORD;
    const dbHost = process.env.DB_HOST;

    sequelizeConfig.instance = new Sequelize(dbName, dbUser, dbPassword, {
        host: dbHost,
        dialect: 'mysql',
        define: {
            timestamps: false, // Disables timestamps for all models by default
        },
    });

    // Optional: Test the connection
    sequelizeConfig.instance.authenticate().then(() => {
      console.log('Sequelize connected');
    });
  }

  // The static method that controls access to the singleton instance
  public static getInstance(): Sequelize {
    if (!sequelizeConfig.instance) {
      new sequelizeConfig();
    }
    return sequelizeConfig.instance;
  }
}

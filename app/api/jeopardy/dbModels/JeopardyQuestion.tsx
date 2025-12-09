import { DataTypes, Model } from 'sequelize';
import sequelize from '../../../../config/sequelize'; // Import the singleton instance

class JeopardyQuestion extends Model {}

JeopardyQuestion.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        category: {
            type: DataTypes.STRING
        },
        value: {
            type: DataTypes.STRING
        },
        question: {
            type: DataTypes.TEXT
        },
        answer: {
            type: DataTypes.TEXT
        },
        round: {
            type: DataTypes.STRING
        },
        show_no: {
            type: DataTypes.STRING
        },
        air_date: {
            type: DataTypes.DATE
        },
        air_year: {
            type: DataTypes.STRING
        },
        air_month: {
            type: DataTypes.STRING
        },
        air_day: {
            type: DataTypes.STRING
        },
  }, {
  sequelize, // Pass the imported sequelize instance
  underscored: false,
  timestamps: false,
  tableName: 'jeopardy_questions',
  modelName: 'JeopardyQuestion'
});

export default JeopardyQuestion;

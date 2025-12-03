'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class jeopardy_questions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  jeopardy_questions.init({
    category: DataTypes.STRING,
    value: DataTypes.STRING,
    question: DataTypes.STRING,
    answer: DataTypes.STRING,
    round: DataTypes.STRING,
    show_no: DataTypes.STRING,
    air_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'jeopardy_questions',
  });
  return jeopardy_questions;
};
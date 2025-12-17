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
    round: DataTypes.STRING,
    show_no: DataTypes.STRING,
    category: DataTypes.STRING,
    is_daily_double: DataTypes.BOOLEAN,
    is_music: DataTypes.BOOLEAN,
    is_video: DataTypes.BOOLEAN,
    value: DataTypes.INTEGER,
    value_copy: DataTypes.INTEGER,
    value_dd: DataTypes.INTEGER,
    question: DataTypes.TEXT,
    answer: DataTypes.TEXT,
    air_date: DataTypes.DATE,
    air_year: DataTypes.INTEGER,
    air_month: DataTypes.INTEGER,
    air_day: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'jeopardy_questions',
  });
  return jeopardy_questions;
};
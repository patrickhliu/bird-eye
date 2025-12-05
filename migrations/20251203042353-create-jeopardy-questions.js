'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('jeopardy_questions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      category: {
        type: Sequelize.STRING(100)
      },
      value: {
        type: Sequelize.STRING(10)
      },
      question: {
        type: Sequelize.TEXT
      },
      answer: {
        type: Sequelize.TEXT
      },
      round: {
        type: Sequelize.STRING(25)
      },
      show_no: {
        type: Sequelize.STRING(10)
      },
      air_date: {
        type: Sequelize.DATE
      },
      air_year: {
        type: Sequelize.STRING(10)
      },
      air_month: {
        type: Sequelize.STRING(10)
      },
      air_day: {
        type: Sequelize.STRING(10)
      },
    }, { timestampe: false});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('jeopardy_questions');
  }
};
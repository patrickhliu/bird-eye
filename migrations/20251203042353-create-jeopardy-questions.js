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
        type: Sequelize.STRING
      },
      value: {
        type: Sequelize.STRING
      },
      question: {
        type: Sequelize.STRING
      },
      answer: {
        type: Sequelize.STRING
      },
      round: {
        type: Sequelize.STRING
      },
      show_no: {
        type: Sequelize.STRING
      },
      air_date: {
        type: Sequelize.DATE
      }
    }, { timestampe: false});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('jeopardy_questions');
  }
};
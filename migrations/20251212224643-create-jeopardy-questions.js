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
      round: {
        type: Sequelize.STRING
      },
      show_no: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      is_daily_double: {
        type: Sequelize.BOOLEAN
      },
      is_music: {
        type: Sequelize.BOOLEAN
      },
      is_video: {
        type: Sequelize.BOOLEAN
      },
      value: {
        type: Sequelize.INTEGER
      },
      value_copy: {
        type: Sequelize.INTEGER
      },
      value_dd: {
        type: Sequelize.INTEGER
      },
      question: {
        type: Sequelize.TEXT
      },
      answer: {
        type: Sequelize.TEXT
      },
      air_date: {
        type: Sequelize.DATE
      },
      air_year: {
        type: Sequelize.INTEGER
      },
      air_month: {
        type: Sequelize.INTEGER
      },
      air_day: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('jeopardy_questions');
  }
};
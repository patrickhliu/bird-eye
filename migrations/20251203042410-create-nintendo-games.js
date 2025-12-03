'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('nintendo_games', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      title_key: {
        type: Sequelize.STRING
      },
      nsuid: {
        type: Sequelize.STRING
      },
      content_rating: {
        type: Sequelize.STRING
      },
      content_rating_system: {
        type: Sequelize.STRING
      },
      regular_price: {
        type: Sequelize.DECIMAL
      },
      final_price: {
        type: Sequelize.DECIMAL
      },
      sale_price: {
        type: Sequelize.DECIMAL
      },
      amount_off: {
        type: Sequelize.DECIMAL
      },
      percent_off: {
        type: Sequelize.DECIMAL
      },
      price_range: {
        type: Sequelize.STRING
      },
      discount_price_end: {
        type: Sequelize.DATE
      },
      discount_price_end_timestamp: {
        type: Sequelize.INTEGER
      },
      platform_code: {
        type: Sequelize.STRING
      },
      product_image: {
        type: Sequelize.STRING
      },
      product_image_square: {
        type: Sequelize.STRING
      },
      product_gallery: {
        type: Sequelize.JSON
      },
      release_date: {
        type: Sequelize.DATE
      },
      sku: {
        type: Sequelize.STRING
      },
      top_level_filters: {
        type: Sequelize.JSON
      },
      url: {
        type: Sequelize.STRING
      },
      url_key: {
        type: Sequelize.STRING
      },
      demo_nsuid: {
        type: Sequelize.STRING
      },
      dlc_type: {
        type: Sequelize.STRING
      },
      has_dlc: {
        type: Sequelize.BOOLEAN
      },
      is_upgrade: {
        type: Sequelize.BOOLEAN
      },
      is_exclusive: {
        type: Sequelize.BOOLEAN
      },
      is_featured: {
        type: Sequelize.BOOLEAN
      },
      is_shovelware: {
        type: Sequelize.BOOLEAN
      },
      editions: {
        type: Sequelize.JSON
      },
      availability: {
        type: Sequelize.JSON
      },
      software_developer: {
        type: Sequelize.STRING
      },
      software_publisher: {
        type: Sequelize.STRING
      },
      franchises: {
        type: Sequelize.JSON
      },
      created_date: {
        type: Sequelize.DATE
      },
      updated_date: {
        type: Sequelize.DATE
      },
      nintendo_updated_date: {
        type: Sequelize.DATE
      },
      content_descriptors: {
        type: Sequelize.JSON
      },
      player_count: {
        type: Sequelize.STRING
      },
      play_modes: {
        type: Sequelize.JSON
      },
      tag_labels: {
        type: Sequelize.JSON
      },
      top_level_category: {
        type: Sequelize.STRING
      },
      top_level_category_code: {
        type: Sequelize.STRING
      },
      visible_in_search: {
        type: Sequelize.BOOLEAN
      },
      genres: {
        type: Sequelize.JSON
      },
      game_genre_labels: {
        type: Sequelize.JSON
      },
      game_feature_labels: {
        type: Sequelize.JSON
      },
      nso_features: {
        type: Sequelize.JSON
      },
      ways_to_play_labels: {
        type: Sequelize.JSON
      },
      file_size: {
        type: Sequelize.STRING
      }
    }, { timestampe: false});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('nintendo_games');
  }
};
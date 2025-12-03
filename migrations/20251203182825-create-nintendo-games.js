'use strict';
import { DataTypes } from 'sequelize';

/** @type {import('sequelize-cli').Migration} */
export default {    // forget commonJs, use newer module syntax...
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('nintendo_games', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      title: {
        type: DataTypes.STRING
      },
      title_key: {
        type: DataTypes.STRING
      },
      nsuid: {
        type: DataTypes.STRING
      },
      content_rating: {
        type: DataTypes.STRING
      },
      content_rating_system: {
        type: DataTypes.STRING
      },
      regular_price: {
        type: DataTypes.DECIMAL(10,2)
      },
      final_price: {
        type: DataTypes.DECIMAL(10,2)
      },
      sale_price: {
        type: DataTypes.DECIMAL(10,2)
      },
      amount_off: {
        type: DataTypes.DECIMAL(10,2)
      },
      percent_off: {
        type: DataTypes.DECIMAL(10,2)
      },
      price_range: {
        type: DataTypes.STRING
      },
      discount_price_end: {
        type: DataTypes.DATE
      },
      discount_price_end_timestamp: {
        type: DataTypes.INTEGER
      },
      platform_code: {
        type: DataTypes.STRING
      },
      product_image: {
        type: DataTypes.STRING
      },
      product_image_square: {
        type: DataTypes.STRING
      },
      product_gallery: {
        type: DataTypes.JSON
      },
      release_date: {
        type: DataTypes.DATE
      },
      sku: {
        type: DataTypes.STRING
      },
      top_level_filters: {
        type: DataTypes.JSON
      },
      url: {
        type: DataTypes.STRING
      },
      url_key: {
        type: DataTypes.STRING
      },
      demo_nsuid: {
        type: DataTypes.STRING
      },
      dlc_type: {
        type: DataTypes.STRING
      },
      has_dlc: {
        type: DataTypes.BOOLEAN
      },
      is_upgrade: {
        type: DataTypes.BOOLEAN
      },
      is_exclusive: {
        type: DataTypes.BOOLEAN
      },
      is_featured: {
        type: DataTypes.BOOLEAN
      },
      is_shovelware: {
        type: DataTypes.BOOLEAN
      },
      editions: {
        type: DataTypes.JSON
      },
      availability: {
        type: DataTypes.JSON
      },
      software_developer: {
        type: DataTypes.STRING
      },
      software_publisher: {
        type: DataTypes.STRING
      },
      franchises: {
        type: DataTypes.JSON
      },
      created_date: {
        type: DataTypes.DATE
      },
      updated_date: {
        type: DataTypes.DATE
      },
      nintendo_updated_date: {
        type: DataTypes.DATE
      },
      content_descriptors: {
        type: DataTypes.JSON
      },
      player_count: {
        type: DataTypes.STRING
      },
      play_modes: {
        type: DataTypes.JSON
      },
      tag_labels: {
        type: DataTypes.JSON
      },
      top_level_category: {
        type: DataTypes.STRING
      },
      top_level_category_code: {
        type: DataTypes.STRING
      },
      visible_in_search: {
        type: DataTypes.BOOLEAN
      },
      genres: {
        type: DataTypes.JSON
      },
      game_genre_labels: {
        type: DataTypes.JSON
      },
      game_feature_labels: {
        type: DataTypes.JSON
      },
      nso_features: {
        type: DataTypes.JSON
      },
      ways_to_play_labels: {
        type: DataTypes.JSON
      },
      file_size: {
        type: DataTypes.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('nintendo_games');
  }
};
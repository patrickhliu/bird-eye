'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class nintendo_games extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  nintendo_games.init({
    title: DataTypes.STRING,
    title_key: DataTypes.STRING,
    nsuid: DataTypes.STRING,
    content_rating: DataTypes.STRING,
    content_rating_system: DataTypes.STRING,
    regular_price: DataTypes.DECIMAL,
    final_price: DataTypes.DECIMAL,
    sale_price: DataTypes.DECIMAL,
    amount_off: DataTypes.DECIMAL,
    percent_off: DataTypes.DECIMAL,
    price_range: DataTypes.STRING,
    discount_price_end: DataTypes.DATE,
    discount_price_end_timestamp: DataTypes.INTEGER,
    platform_code: DataTypes.STRING,
    product_image: DataTypes.STRING,
    product_image_square: DataTypes.STRING,
    product_gallery: DataTypes.JSON,
    release_date: DataTypes.DATE,
    sku: DataTypes.STRING,
    top_level_filters: DataTypes.JSON,
    url: DataTypes.STRING,
    url_key: DataTypes.STRING,
    demo_nsuid: DataTypes.STRING,
    dlc_type: DataTypes.STRING,
    has_dlc: DataTypes.BOOLEAN,
    is_upgrade: DataTypes.BOOLEAN,
    is_exclusive: DataTypes.BOOLEAN,
    is_featured: DataTypes.BOOLEAN,
    is_shovelware: DataTypes.BOOLEAN,
    editions: DataTypes.JSON,
    availability: DataTypes.JSON,
    software_developer: DataTypes.STRING,
    software_publisher: DataTypes.STRING,
    franchises: DataTypes.JSON,
    created_date: DataTypes.DATE,
    updated_date: DataTypes.DATE,
    nintendo_updated_date: DataTypes.DATE,
    content_descriptors: DataTypes.JSON,
    player_count: DataTypes.STRING,
    play_modes: DataTypes.JSON,
    tag_labels: DataTypes.JSON,
    top_level_category: DataTypes.STRING,
    top_level_category_code: DataTypes.STRING,
    visible_in_search: DataTypes.BOOLEAN,
    genres: DataTypes.JSON,
    game_genre_labels: DataTypes.JSON,
    game_feature_labels: DataTypes.JSON,
    nso_features: DataTypes.JSON,
    ways_to_play_labels: DataTypes.JSON,
    file_size: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'nintendo_games',
  });
  return nintendo_games;
};
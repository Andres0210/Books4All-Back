const { text } = require("express");
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define('Reviews', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5,
      },
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    book_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, { timestamps: false });
};
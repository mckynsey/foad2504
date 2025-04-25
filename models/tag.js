const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

class Tag extends Model {}

Tag.init(
  {
    id_tag: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: 'id_tag'
    },
    nomTag: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
      field: 'nomTag'
    },
  },
  {
    sequelize,
    modelName: "Tag",
    tableName: "Tag",
    timestamps: false,
  }
);

// Les associations seront définies dans models/Association.js

module.exports = Tag;
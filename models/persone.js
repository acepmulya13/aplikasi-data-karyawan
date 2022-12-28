'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Persone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Persone.init({
    NIK: DataTypes.INTEGER,
    Nama_Lengkap: DataTypes.TEXT,
    Jenis_Kelamin: DataTypes.STRING,
    Tanggal_Lahir: DataTypes.DATE,
    Alamat: DataTypes.TEXT,
    Negara: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Persone',
  });
  return Persone;
};
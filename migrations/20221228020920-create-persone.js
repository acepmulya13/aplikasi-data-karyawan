'use strict';
module.exports = {
  up:  (queryInterface, Sequelize) => {
    return queryInterface.createTable('Persones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      NIK: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      Nama_Lengkap: {
        type: Sequelize.TEXT
      },
      Jenis_Kelamin: {
        type: Sequelize.STRING
      },
      Tanggal_Lahir: {
        type: Sequelize.DATE
      },
      Alamat: {
        type: Sequelize.TEXT
      },
      Negara: {
        type: Sequelize.STRING
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
  down:  (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Persones');
  }
};
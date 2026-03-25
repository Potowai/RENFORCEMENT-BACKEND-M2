'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nom: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'nom'
      },
      prenom: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'prenom'
      },
      role: {
        type: Sequelize.ENUM('administrateur', 'gestionnaire_portefeuille', 'charge_suivi', 'charge_clientele'),
        allowNull: false,
        defaultValue: 'charge_clientele'
      },
      actif: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      resetToken: {
        type: Sequelize.STRING,
        allowNull: true
      },
      resetTokenExpiry: {
        type: Sequelize.DATE,
        allowNull: true
      },
      twoFactorSecret: {
        type: Sequelize.STRING,
        allowNull: true
      },
      twoFactorEnabled: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
      }
    });

    // Add index on email for faster lookups
    await queryInterface.addIndex('users', ['email']);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
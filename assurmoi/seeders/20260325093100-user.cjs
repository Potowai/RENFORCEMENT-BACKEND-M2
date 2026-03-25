'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Hash for 'password123' using bcrypt (pre-computed)
    const hashedPassword = '$2b$10$rQZ7qLx8J5hFv6F8Gv6KvOQ9Y5xq4R6y8U3z9V1W2X3Y4Z5A6B7C8D';

    await queryInterface.bulkInsert('users', [
      {
        email: 'admin@assurmoi.fr',
        password: hashedPassword,
        nom: 'Dupont',
        prenom: 'Admin',
        role: 'administrateur',
        actif: true,
        twoFactorEnabled: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'gestionnaire@assurmoi.fr',
        password: hashedPassword,
        nom: 'Martin',
        prenom: 'Sophie',
        role: 'gestionnaire_portefeuille',
        actif: true,
        twoFactorEnabled: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'suivi@assurmoi.fr',
        password: hashedPassword,
        nom: 'Bernard',
        prenom: 'Pierre',
        role: 'charge_suivi',
        actif: true,
        twoFactorEnabled: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'clientele@assurmoi.fr',
        password: hashedPassword,
        nom: 'Durand',
        prenom: 'Marie',
        role: 'charge_clientele',
        actif: true,
        twoFactorEnabled: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
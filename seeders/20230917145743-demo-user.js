'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        username: 'Никита',
        surname: 'Лысенков',
        email: 'example@example.com',
        number: 79042065393,
        password: 'ХХХХХХХХХХХХХХХХХХууууууууууууЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙЙ',

        roles: ["ADMIN"],
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  },
};

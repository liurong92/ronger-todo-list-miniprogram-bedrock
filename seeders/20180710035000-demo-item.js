'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Items', [{
      value: 'test 01',
      complete: false,
      openId: 'oX-6t4kfJns6OfYXMevZA3hIokqU',

    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Items', null, {});
  }
};

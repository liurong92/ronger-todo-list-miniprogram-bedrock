'use strict'

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('Items', [{
      index: '00001',
      value: 'test 01',
      complete: false,
      openId: 'oX-6t4kfJns6OfYXMevZA3hIokqU',
    },{
      index: '00002',
      value: 'test 02',
      complete: false,
      openId: 'oX-6t4kfJns6OfYXMevZA3hIokqU',
    }
    ], {})
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('Items', null, {})
  }
}

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [
      {
        ProductCategoryId: 1,
        UserId: 3,
        name: '棒棒糖-待審查',
        picture_url: 'https://i.imgur.com/05CXT8U.jpg',
        info: '棒棒棒',
        price: 20000,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: new Date(),
        payment_method: '0',
        status: '0',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 1,
        UserId: 3,
        name: '棒棒糖-已審核通過',
        picture_url: 'https://i.imgur.com/05CXT8U.jpg',
        info: '棒棒棒',
        price: 20000,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: new Date(),
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 1,
        UserId: 3,
        name: '棒棒糖-未通過',
        picture_url: 'https://i.imgur.com/05CXT8U.jpg',
        info: '棒棒棒',
        price: 20000,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: new Date(),
        payment_method: '0',
        status: '2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 2,
        UserId: 4,
        name: '棉花糖-待審查',
        picture_url: 'https://i.imgur.com/05CXT8U.jpg',
        info: '棉棉棉',
        price: 10000,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: new Date(),
        payment_method: '0',
        status: '0',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 2,
        UserId: 4,
        name: '棉花糖-已審核通過',
        picture_url: 'https://i.imgur.com/05CXT8U.jpg',
        info: '棉棉棉',
        price: 10000,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: new Date(),
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 2,
        UserId: 4,
        name: '棉花糖-未通過',
        picture_url: 'https://i.imgur.com/05CXT8U.jpg',
        info: '棉棉棉',
        price: 10000,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: new Date(),
        payment_method: '0',
        status: '2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 3,
        UserId: 5,
        name: '麥芽糖-待審查',
        picture_url: 'https://i.imgur.com/05CXT8U.jpg',
        info: '麥麥麥',
        price: 5000,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: new Date(),
        payment_method: '0',
        status: '0',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 3,
        UserId: 5,
        name: '麥芽糖-已審核通過',
        picture_url: 'https://i.imgur.com/05CXT8U.jpg',
        info: '麥麥麥',
        price: 5000,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: new Date(),
        payment_method: '0',
        status: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        ProductCategoryId: 3,
        UserId: 5,
        name: '麥芽糖-未通過',
        picture_url: 'https://i.imgur.com/05CXT8U.jpg',
        info: '麥麥麥',
        price: 5000,
        quantity: 1,
        delivery: '1',
        delivery_location: '台北',
        delivery_time: new Date(),
        payment_method: '0',
        status: '2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  },
};

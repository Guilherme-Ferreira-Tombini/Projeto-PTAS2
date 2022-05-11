'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn("usuarios", "empresaId", {
      allowNull:false,
      type: Sequelize.INTEGER,
      references:{
        model: "empresas",
        key: "id"
      }
    });
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.removeColumn("usuarios", "empresaId");
  }
};

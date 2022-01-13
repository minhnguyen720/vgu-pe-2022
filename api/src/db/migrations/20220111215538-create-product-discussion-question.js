"use strict";

const tableName = "product_discussion_questions";

module.exports = {
	tableName,
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable(tableName, {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			userId: {
				type: Sequelize.INTEGER,
				references: {
					model: require("./20210916090212-users").tableName,
					key: "id"
				},
				onDelete: "CASCADE"
			},
			productId: {
				type: Sequelize.INTEGER,
				references: {
					model: require("./20220110021027-create-product").tableName,
					key: "id"
				},
				onDelete: "CASCADE"
			},
			question: {
				type: Sequelize.TEXT
			},
			companyName: {
				type: Sequelize.STRING,
				references: {
					model: require("./20210922045758-create-company").tableName,
					key: "name"
				},
				onDelete: "CASCADE"
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
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable(tableName);
	}
};

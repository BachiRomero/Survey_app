const { DataTypes, Sequelize } = require('sequelize');

const Survey = (sequelize) => {
    sequelize.define(
        'survey',
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4
            },

            full_name: {
                type: DataTypes.STRING,
                allowNull: false
            },

            phone_number: {
                type: DataTypes.STRING,
                allowNull: false
            },

            start_date: {
                type: DataTypes.DATE,
                allowNull: false
            },

            preferred_language: {
                type: DataTypes.STRING,
                allowNull: false
            },

            how_found: {
                type: DataTypes.STRING,
                allowNull: false
            },

            newsletter_subscription: {
                type: DataTypes.STRING,
                allowNull: true
            },

            // survey_id: {
            //     type: DataTypes.UUID,
            //     allowNull: false
            // },

            // user_id: {
            //     type: DataTypes.UUID,
            //     allowNull: false
            // }
        },
        { timestamps: false }
    )
}

module.exports = Survey
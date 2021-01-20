module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("tutorial", {
        Tarifname: {
            type: Sequelize.STRING
        },
        PLZ: {
            type: Sequelize.INTEGER
        },
        Fixkosten: {
            type: Sequelize.STRING
        },
        VariableKosten: {
            type: Sequelize.STRING
        }
    });

    return Tutorial;
};
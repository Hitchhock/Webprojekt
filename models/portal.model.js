module.exports = (sequelize, Sequelize) => {
    const Portal = sequelize.define("portal", {
        origin: {
            type: Sequelize.STRING
        },
        request: {
            type: Sequelize.STRING
        }
    });

    return Portal;
};
module.exports = (sequelize, Sequelize) => {
    const Buchung = sequelize.define("buchung", {
        tarif: {
            type: Sequelize.STRING
        },
        kosten: {
            type: Sequelize.STRING
        },
        empfaenger: {
            type: Sequelize.STRING
        }
    });

    return Buchung;
};
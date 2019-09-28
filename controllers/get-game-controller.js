const { getFortnite } = require('../services/skout-configurator');

module.exports = async (req, res) => {
    let fortnite = await getFortnite('fortnite');
    let status = fortnite.id ? 200 : 500;
    return res.status(status).json(fortnite);
};

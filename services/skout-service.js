const { Scout, getFortnite } = require('./skout-configurator');

async function findPlayers(name, platform = null, comprehensive = true, exact = false) {
    let fortnite = await getFortnite('fortnite');
    let players = await Scout.players.search(
        name,
        'epic',
        platform,
        fortnite.id,
        comprehensive,
        exact,
    ).catch(err => err);
    return players;
}

async function getPlayerStats(playerId) {
    let fortnite = await getFortnite('fortnite');
    let playerStats = await Scout.players.get(
        fortnite.id,
        playerId,
        '*',
    ).catch(err => err);
    return playerStats;
}


module.exports = { findPlayers, getPlayerStats };
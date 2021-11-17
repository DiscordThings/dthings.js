const fetch = require('cross-fetch');

module.exports.botInfo = (botId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await fetch(`https://discordthings.com/api/bot/${botId}`);
            const data = await res.json();
            resolve(data);
        } catch (error) {
            reject(error);
        }
    })
}

module.exports.checkVote = (botId, userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await fetch(`https://discordthings.com/api/bot/${botId}/checkVote?id=${userId}`);
            const data = await res.json();
            resolve(data);
        } catch (error) {
            reject(error);
        }
    })
}
const dthingsApi = require('../index');

(async () => {
    var data = await dthingsApi.botInfo("675862516575764579");
    console.log("Total votes: " + data.votes);
})();
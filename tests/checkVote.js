const dthingsApi = require('../index');

(async () => {
    let user = "269852031194234880";
    var data = await dthingsApi.checkVote("675862516575764579", user);
    console.log("Did the user with ID "+user+" vote? " + (data.voted ? "Yes" : "No"));
})();
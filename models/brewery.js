var orm = require("../config/orm");

var brewery = {

    selectAll: function(cb){
        orm.selectAll("beer", "brewery", "id", function(res){
            res(cb);
        })
    }
}

module.exports = brewery;
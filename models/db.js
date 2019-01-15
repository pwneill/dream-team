module.exports = function (sequelize, DataTypes) {
  var lagerHead_db = sequelize.define("db", {
    brewery: {
      Name:DataTypes.STRING
    }
    ,beer: {
      brewery_name: DataTypes.STRING,
      brewery_beer: DataTypes.STRING

    },
    food: {
      brewery_name: DataTypes.STRING,
      food1_name: DataTypes.STRING,
      food1_description: DataTypes.TEXT,
      food1_url: DataTypes.STRING,
      food1_delivers: DataTypes.BOOLEAN,
      // Eventually add Lat and Long
      food2_name: DataTypes.STRING,
      food2_description: DataTypes.TEXT,
      food2_url: DataTypes.STRING,
      food2_delivers: DataTypes.BOOLEAN,
      // Eventually add Lat and Long
      food3_name: DataTypes.STRING,
      food3_description: DataTypes.TEXT,
      food3_url: DataTypes.STRING,
      food3_delivers: DataTypes.BOOLEAN,
      // Eventually add Lat and Long
      food4_name: DataTypes.STRING,
      food4_description: DataTypes.TEXT,
      food4_url: DataTypes.STRING,
      food4_delivers: DataTypes.BOOLEAN,
      // Eventually add Lat and Long

    }
  });



  console.log(lagerHead_db);
  return lagerHead_db;
};

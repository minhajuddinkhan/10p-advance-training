module.exports = (sequelize, DataTypes) => {
  const Feed = sequelize.define('Feed', {
    content: DataTypes.STRING,
    lastContent: DataTypes.STRING,
  });

  return Feed;
};
module.exports = function(sequelize, DataTypes) {
  const Burgers = sequelize.define(
    'burgers',
    {
      burger_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      devoured: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    },
    { timestamps: false }
  );
  return Burgers;
};

module.exports = (sequelize, Sequelize) => {
  const Card = sequelize.define("cards", {
    name: {
      type: Sequelize.STRING(64)
    },
    element: {
      type: Sequelize.STRING(20)
    },
    artwork: {
      type: Sequelize.STRING(50),
      defaultValue: "1a4c588422008656f35abfab9110aa47.webp"
    },
    pack: {
      type: Sequelize.STRING(10),
      defaultValue: "SDH-S"
    },
    description: {
      type: Sequelize.STRING(512)
    },
    code: {
      type: Sequelize.INTEGER(20)
    },
    isCreature: {
      type: Sequelize.BOOLEAN,
      defaultValue: 0,
      allowNull: true
    },
    hasEffect: {
      type: Sequelize.BOOLEAN,
      defaultValue: 0,
      allowNull: true
    },
    level: {
      type: Sequelize.INTEGER(12),
      allowNull: true
    },
    type: {
      type: Sequelize.STRING(32),
      allowNull: true
    },
    attack: {
      type: Sequelize.INTEGER(4),
      allowNull: true
    },
    defense: {
      type: Sequelize.INTEGER(4),
      allowNull: true
    },
    isMagic: {
      type: Sequelize.BOOLEAN,
      defaultValue: 0,
      allowNull: true
    },
    magicType: {
      type: Sequelize.STRING(32),
      allowNull: true
    },
    isTrap: {
      type: Sequelize.BOOLEAN,
      defaultValue: 0,
      allowNull: true
    },
    trapType: {
      type: Sequelize.STRING(32),
      allowNull: true
    }
  }, {
    timestamps: false
  });

  return Card;
};
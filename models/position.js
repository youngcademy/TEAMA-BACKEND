const Sequelize = require("sequelize");

// sequelize.define(객체이름, 테이블정의, 테이블_설정)
module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "position",
    {
      positionNm: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      positionCode: {
        type: Sequelize.STRING(10),
        allowNull: false,
        unique: true,
      },
      authLevel: {
        type: Sequelize.NUMBER,
        allowNull: false,
      },
      upperPositionCode: {
        type: Sequelize.STRING(10),
        allowNull: true,
      },
    },
    {
      timestamps: true,
      paranoid: true, // 삭제일 (복구용)
    }
  );
};

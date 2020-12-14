const { Op } = require("sequelize");
const User = require("../models/User");

module.exports = {
  async show(req, res) {
    const users = await User.findAll({
      attributes: ["name", "email"],
      where: {
        email: {
          [Op.iLike]: "%@gmail.com",
        },
      },
      include: [
        { association: "addresses", where: { street: "Av Maria Lúcio" } },
        {
          association: "techs",
          required: false,
          where: {
            email: {
              [Op.iLike]: "React%",
            },
          },
        },
      ],
    });
    return res.json(users);
  },
};

const { Op } = require('sequelize');
const User = require('../models/User');

module.exports = {
  async show(req, res) {
    // Encontrar todos os usuários que tem email que termina com "@outlook.com"
    // Desses usuários eu quero buscar todos que moram na rua "Rua Coronel Macedo"
    // Desses usuários eu quero buscar as tecnologias que começam com "React"

    const users = await User.findAll({
      attributes: ['name', 'email'],
      where: {
        email: {
          [Op.iLike]: '%@outlook.com'
        }
      },
      include: [
        {
          association: 'addresses',
          where: { street: 'Rua Coronel Macedo' }
        },
        {
          association: 'techs',
          required: false,
          where: {
            name: {
              [Op.iLike]: 'React%'
            }
          }
        },
      ]
    })

    return res.json(users);
  }
}
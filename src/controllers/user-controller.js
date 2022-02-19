const { getError } = require("./base-controller");
const UserService = require('../services/user-service')

class UserController {
  static getAllUser = async (req, res) => {
    try {
      const getAllUser = await UserService.getAllUser()
      return res.status(200).json(getAllUser)
    } catch (err) {
      const error = getError(err)
      console.log(error)
      return res.status(error.code).json(error.message)
    }
  }

  static getUserById = async (req, res) => {
    try {
      const { id } = req.params
      const getUserById = await UserService.getUserById(id)
      return res.status(200).json(getUserById)
    } catch (err) {
      const error = getError(err)
      console.log(error)
      return res.status(error.code).json(error.message);
    }
  }

  static addUser = async (req, res) => {
    try {
      const { username, email, password } = req.body
      await UserService.addUser({ username, email, password })
      return res.status(200).json({ message: "user created" })
    } catch (err) {
      const error = getError(err)
      console.log(error)
      return res.status(error.code).json(error.message)
    }
  }

  static login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const authenticate = await UserService.authenticate({ email, password })
      return res.status(200).json({ token: authenticate })
    } catch (err) {
      const error = getError(err)
      console.log(error)
      return res.status(error.code).json(error.message)
    }
  }
}

module.exports = UserController;
const pool = require('../config/db')
const ERRORS = require('../config/errors')
const jwt = require('jsonwebtoken');
const { getAllUser, getUserById, getUserByEmail, addUser } = require('../controllers/query-controller')
const { hashPassword, comparePassword } = require('../utils/encryption')
const { isEmpty } = require('../utils/validator')


class UserService {
  static getAllUser = async () => {
    try {
      const response = await pool.query(getAllUser)
      return response.rows
    } catch (err) {
      throw new Error(ERRORS.INTERNAL_SERVER_ERROR)
    }
  }

  static getUserById = async (id) => {
    try {
      const response = await pool.query(getUserById, [id])
      if (response.rows.length === 0) {
        throw new Error(ERRORS.USER_DOES_NOT_EXIST)
      }
      return response.rows
    } catch (err) {
      throw err
    }
  }

  static addUser = async ({
    username,
    email,
    password
  }) => {
    try {
      if (isEmpty(email) || isEmpty(password) || isEmpty(username)) {
        throw new Error(ERRORS.INPUT_CANNOT_BE_EMPTY);
      }
      const findEmail = await pool.query(getUserByEmail, [email])

      if (findEmail.rows.length) {
        throw new Error(ERRORS.EMAIL_ALREADY_EXIST)
      }

      await pool.query(addUser, [username, email.toLowerCase(), hashPassword(password)])
      return
    } catch (err) {
      throw err
    }
  }

  static authenticate = async ({
    email,
    password
  }) => {
    try {
      if (isEmpty(email) || isEmpty(password)) {
        throw new Error(ERRORS.INPUT_CANNOT_BE_EMPTY);
      }

      const findEmail = await pool.query(getUserByEmail, [email])
      if (findEmail.rows.length === 0) {
        throw new Error(ERRORS.USER_DOES_NOT_EXIST)
      }

      console.log(findEmail.rows)
      const comparingPassword = comparePassword(password, findEmail.rows[0].password)
      if (!comparingPassword) {
        throw new Error(ERRORS.PASSWORD_MISMATCH)
      }

      const payload = {
        id: findEmail.rows[0].id,
        email: findEmail.rows[0].email,
        username: findEmail.rows[0].username
      }

      const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "1d" })
      return token;
    } catch (err) {
      throw err
    }
  }
}

module.exports = UserService;
const pool = require('../config/db')
const ERRORS = require("../config/errors")
const { getError } = require("../controllers/base-controller")
const { getTaskById } = require('../controllers/query-controller')

const authorization = async (req, res, next) => {
  try {
    const user = req.user.id
    const params = req.params.id
    const findTask = await pool.query(getTaskById, [params])

    if (!findTask.rows.length) {
      throw new Error(ERRORS.TASK_NOT_FOUND)
    }

    if (findTask.rows[0].user_id !== user) {
      throw new Error(ERRORS.UNAUTHORIZED)
    }
    next()

  } catch (err) {
    const error = getError(err)
    console.log(error)
    return res.status(error.code).json(error.message)
  }
}

module.exports = authorization
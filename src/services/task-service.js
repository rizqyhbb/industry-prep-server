const pool = require('../config/db');
const ERRORS = require('../config/errors');
const { getTaskByFk, getTaskById, addTask, updateTask } = require('../controllers/query-controller');
const { isEmpty } = require('../utils/validator')

class TaskService {
  static getAllTask = async (id) => {
    try {
      const response = await pool.query(getTaskByFk, [id]);
      return response.rows
    } catch (err) {
      throw new err
    }
  }

  static addTask = async ({ id, task }) => {
    try {
      if (isEmpty(task)) {
        throw new Error(ERRORS.INPUT_CANNOT_BE_EMPTY);
      }
      await pool.query(addTask, [task, id])
      return
    } catch (err) {
      throw err
    }
  }

  static updateTask = async ({ id, complete }) => {
    try {
      await pool.query(updateTask, [complete, id])
      return
    } catch (err) {
      throw new Error(ERRORS.INTERNAL_SERVER_ERROR)
    }
  }
}

module.exports = TaskService;
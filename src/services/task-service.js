const pool = require('../config/db');
const { getTaskByFk, addTask } = require('../controllers/query-controller');
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
}

module.exports = TaskService;
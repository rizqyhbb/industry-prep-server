const pool = require('../config/db');
const { getTaskByFk } = require('../controllers/query-controller');

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

    } catch (err) {
      throw err

    }
  }
}

module.exports = TaskService;
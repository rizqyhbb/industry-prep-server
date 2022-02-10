const { getError } = require("./base-controller");
const TaskService = require('../services/task-service')

class TaskController {
  static getAllTask = async (req, res) => {
    try {
      const { id } = req.user
      const getAllTask = await TaskService.getAllTask(id)
      return res.status(200).json(getAllTask);
    } catch (err) {
      const error = getError(err)
      console.log(error);
      return res.status(error.code).json(error.message)
    }
  }

  static addTask = async (req, res) => {
    try {
      const { id } = req.user;
      const { task } = req.body;
      await TaskService.addTask({ id, task })
      return res.status(200).json('Task Created')
    } catch (err) {
      const error = getError(err)
      console.log(err)
      return res.status(error.code).json(error.message)
    }
  }
}

module.exports = TaskController;
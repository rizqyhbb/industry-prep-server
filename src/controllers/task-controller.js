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
      return res.status(error.code).json({ message: error.message })
    }
  }

  static addTask = async (req, res) => {
    try {
      const { id } = req.user;
      const { task } = req.body;
      await TaskService.addTask({ id, task })
      return res.status(200).json({ message: 'Task Created' })
    } catch (err) {
      const error = getError(err)
      console.log(err)
      return res.status(error.code).json({ message: error.message })
    }
  }

  static updateTask = async (req, res) => {
    try {
      const { id } = req.params
      const { complete } = req.body
      await TaskService.updateTask({ id, complete })
      return res.status(200).json({ message: "task updated" })
    } catch (err) {
      const error = getError(err)
      console.log(error);
      return res.status(error.code).json({ message: error.message })
    }
  }

  static deleteTask = async (req, res) => {
    try {
      const { id } = req.params
      await TaskService.deleteTask(id);
      return res.status(200).json({ message: 'task deleted' })
    } catch (err) {
      const error = getError(err)
      console.log(error)
      return res.status(error.code).json({ message: error.message })
    }
  }
}

module.exports = TaskController;
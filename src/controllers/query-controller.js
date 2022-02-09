const QueryController = {
  getAllUser: "SELECT id, username, email FROM users",
  getUserById: "SELECT id, username, email FROM users WHERE id = $1",
  getUserByEmail: "SELECT * from users WHERE email = $1",
  addUser: "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)",
}

module.exports = QueryController;
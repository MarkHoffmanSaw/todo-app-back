import query from "../db.js";

class UserController {
  async createUser(req, res) {
    const { login, email, password } = req.body;
    const regDate = new Date();
    const newPerson = await query(
      "INSERT INTO users (login, email, password, registration_date) values ($1, $2, $3, $4) RETURNING *",
      [login, email, password, regDate]
    );

    res.json(newPerson.rows[0]);
  }

  async getUsers(req, res) {
    const users = await query("SELECT * FROM users");
    res.json(users.rows);
  }

  async getUser(req, res) {
    const id = req.params.id;
    const user = await query("SELECT * FROM users where id = $1", [id]);
    res.json(user.rows[0]);
  }

  async updateUser(req, res) {
    const { id, name } = req.body;
    const user = await query(
      "UPDATE users set name = $1 where id = $2 RETURNING *",
      [name, id]
    );
    res.json(user.rows[0]);
  }

  async deleteUser(req, res) {
    const id = req.params.id;
    const users = await query("DELETE FROM users where id = $1", [id]);
    res.json(user.rows[0]);
  }
}

export default new UserController();

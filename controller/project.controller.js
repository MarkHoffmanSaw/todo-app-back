import query from "../db.js";

class ProjectController {
  async createProject(req, res) {
    const { title, startDate, endDate, description, isImportant, user_id } =
      req.body;

    const newProject = await query(
      "INSERT INTO projects (title, start_date, end_date, description, is_important, user_id) values ($1,$2,$3,$4,$5,$6) RETURNING *",
      [title, startDate, endDate, description, isImportant, user_id]
    );

    res.json(newProject.rows[0]);
  }

  async getProjectByUser(req, res) {
    const id = req.query.id;
    const project = await query("SELECT * FROM projects where user_id = $1", [
      id,
    ]);

    res.json(project.rows[0]);
  }

  async getAllProjects(req, res) {
    const id = req.query.id;
    const project = await query("SELECT * FROM projects");

    res.json(project.rows);
  }
}

export default new ProjectController();

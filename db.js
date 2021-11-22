import pgModule from "pg";
const { Pool } = pgModule;

const query = new Pool({
  user: "todo",
  password: "deobald3064924",
  host: "todo-db",
  port: "5432",
  database: "todo_db",
});

export default query;

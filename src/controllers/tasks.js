import { connect } from "../database";

export const getTasks = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query("Select * from tasks");
  res.json(rows);
};

export const getTask = async (req, res) => {
  console.log(req.params.id);

  const connection = await connect();
  const [rows] = await connection.query("select * from tasks where id=?", [
    req.params.id,
  ]);

  res.json(rows[0]);
};

export const getTaskCount = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query("select count(*) from tasks");
  res.json(rows);
};

export const createTasks = async (req, res) => {
  const connection = await connect();
  const [results] = await connection.query(
    "INSERT INTO tasks (title,descripcion) values(?,?)",
    [req.body.title, req.body.descripcion]
  );
  res.json({ id: results.insertId, ...req.body });
};
export const deleteTasks = async (req, res) => {
  const connection = await connect();
  const result = await connection.query("DELETE FROM tasks WHERE id=?", [
    req.params.id,
  ]);
  res.sendStatus(204);
};
export const updateTasks = async (req, res) => {
  const connection = await connect();
  const result = await connection.query("UPDATE tasks SET ? WHERE id=?", [
    req.body,
    req.params.id,
  ]);

  res.sendStatus(204);
};

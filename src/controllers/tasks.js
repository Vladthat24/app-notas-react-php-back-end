import { connect } from "../database";

export const getTasks = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query("Select * from tasks");
  res.json(rows);
};

export const getTask = (req, res) => {
    const connection= await connect();
    const [rows]=await connection.query("select * from tasks where id=")
  res.send("Hello, World");
};


export const getTaskCount = (req, res) => {
    res.send("Hello, World");
  };



export const createTasks = (req, res) => {
  res.send("Hello, World");
};
export const deleteTasks = (req, res) => {
  res.send("Hello, World");
};
export const updateTasks = (req, res) => {
  res.send("Hello, World");
};

const express = require("express");

const app = express();
app.use(express.json());

const todos = [];

app.get("/todos", (req, res) => {
  return res.json(todos);
});

app.get("/todo", (req, res) => {
  //   const title = req.body.title;
  const { title } = req.body;
  const todo = {
    id: "",
    title,
    completed: false,
  };
  todos.push(todo);
  return res.json(todo);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

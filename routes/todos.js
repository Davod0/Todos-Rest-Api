
const router = require("express").Router();
const { v4 } = require("uuid");
const CheckAuth = require("../middleware/CheckAuth");

const todos = [
    {
      id: "1",
      title: "Todo 1",
      completed: false,
    },
    {
      id: "2",
      title: "Todo 2",
      completed: true,
    },
  ];
  

router.get("",CheckAuth, (req, res) => {
  return res.json(todos);
});

router.get("/:id", (req, res) => {
  // const {id} = req.params
  const { id } = req.query;
  const todo = todos.find((todo) => todo.id === id);
  return res.json(todo);
});

router.get("/post", (req, res) => {
  //   const { title } = req.body;
  //   const title = req.body.title;
  const title = req.query.title;
  const todo = {
    id: v4(),
    title,
    completed: false,
  };
  todos.push(todo);
  for (const element of todos) {
    console.log(`ALL todos: ${element.title}`);
  }
  return res.json(todos);
});

module.exports = router;

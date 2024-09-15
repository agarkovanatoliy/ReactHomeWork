import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";


function TodoList() {
  const [tasksList, setTasksList] = useState([]);
  const [task, setTask] = useState("");
  const [deletedTasks, setDeletedTasks] = useState([]);
  const [taskId, setTasktId] = useState(1);

  const updateId = () => {
    setTasktId(taskId + 1);
  };

  const addTask = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    setTasksList([...tasksList, { id: taskId, text: task }]);
    updateId();
    setTask("");
  };

  const deleteTask = (id) => {
    setDeletedTasks((prevDeletedTasks) => {
      return [...prevDeletedTasks, id];
    });
  };

  return (
    <div>
      <div>
        <TextField
          label="Введите новую задачу"
          variant="outlined"
          fullWidth
          margin="normal"
          value={task}
          onChange={(event) => setTask(event.target.value)}
        ></TextField>
        <div className="button">
          <Button
            variant="contained"
            color="primary"
            onClick={addTask}
            style={{ marginBottom: 20 }}
          >
            Добавить задачу
          </Button>
        </div>

      </div>
      <Box className='box'>
        {tasksList
          .filter((task) => !deletedTasks.includes(task.id))
          .map((task) => (
            <Card className="card"
              variant="outlined"
              key={task.id}
            >
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {task.text}
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton
                  aria-label="delete"
                  onClick={() => deleteTask(task.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </CardActions>
            </Card>
          ))}
      </Box>
    </div>
  );
}

export default TodoList;
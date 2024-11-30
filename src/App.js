import "./App.css";
import AddForm from "./components/AddForm";
import Header from "./components/Header";
import Item from "./components/Item";
import { useState, useEffect } from "react";
function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  const [title, setTitle] = useState("");
  const [editId, setEditId] = useState(null);
  const [theme, setTheme] = useState("light");
  function addTask(e) {
    e.preventDefault();
    if (!title) {
      alert("Please enter information.");
    } else if (editId) {
      const updateTask = tasks.map((item) => {
        if (item.id === editId) {
          return { ...item, title: title };
        }
        return item;
      });
      setTasks(updateTask);
      setEditId(null);
      setTitle("");
    } else {
      const newId =
        tasks.length > 0 ? Math.max(...tasks.map((task) => task.id)) + 1 : 1;
      const newTask = {
        id: newId,
        title: title,
      };
      setTasks([...tasks, newTask]);
      setTitle("");
    }
  }

  function editTask(id) {
    setEditId(id);
    const editTask = tasks.find((item) => item.id == id);
    // console.log(editTask.title);
    setTitle(editTask.title);
  }

  function deleteTask(id) {
    const result = tasks.filter((item) => item.id != id);
    // console.log(result);
    setTasks(result);
  }
  return (
    <div className={"App " + theme}>
      <Header theme={theme} setTheme={setTheme} />
      <div className="container">
        <AddForm
          title={title}
          setTitle={setTitle}
          addTask={addTask}
          editId={editId}
        />
        <section>
          {tasks.map((data, index) => (
            <Item
              key={index}
              data={data}
              deleteTask={deleteTask}
              editTask={editTask}
            />
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;

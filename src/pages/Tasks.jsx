import { useState, useEffect } from "react";
import TaskTable from "../components/TaskTable";

function Tasks() {

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=50")
      
      .then((response) => {
        if ( !response.ok){
            throw new Error("Failed to fetch tasks");
        }
        return response.json();
      })

      .then((data) => {
        const formattedTasks = data.map((item) => ({
          title: item.title,
          completed: item.completed
        }));

        setTasks(formattedTasks);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });   
  }, []);

  /*
<!-- <input type="text" 
            placeholder="Add a task.." 
            id="new_task" name="new_task" value={newTask} 
            onChange={(e) => setNewTask(e.target.value)} />
            <button onClick={()=> {
                if(newTask.trim() !== ""){
                  setTasks([...tasks,{title:newTask, completed:false}]);
                  setNewTask("");
                }
            }}>
                Add Task
            </button>
          <ul>
            {tasks.map((task,index) => (
              <Task 
                key={index} 
                title={task.title} 
                completed={task.completed}
                onDelete={() => deleteTask(index)}
                onToggle={() => toggleTask(index)}
              />
            ))}
          </ul> !-->
  */

    if(loading) return <p>Loading Tasks</p>;
    if(error) return <p>Error:{error}</p>;

  return (
    <div>
      <h2>Tasks</h2>
      <TaskTable tasks={tasks} />
    </div>
  );
}

export default Tasks;
import { TextField,Button } from "@mui/material";
const AddTaskForm = ({ newTask, setNewTask, addTask }) => {
    return(
      <>
        <div >
          <div >

            <TextField 
            sx={"width:400px"}
            placeholder="Add To Do List"
            value={newTask}
            onChange={ (e) => setNewTask(e.target.value)}
            />

          </div><br/>
          <div >
            <Button
            sx={"width:400px"}
            variant="contained"
            onClick={addTask}
            >Add Task</Button>
          </div>
        </div>
        <br />
      </>
    )
  }
  
  export default AddTaskForm;
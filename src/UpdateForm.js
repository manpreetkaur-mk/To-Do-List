import { TextField,Button } from "@mui/material";

const UpdateForm = ({ updateData, changeHolder, updateTask, cancelUpdate }) => {
    return(
      <>
        <div className="row">
          <div className="col">
            <TextField 
                        sx={"width:400px"}

              value={ updateData && updateData.title }
              onChange={ (e) => changeHolder(e)}
              className="form-control form-control-lg"
            />
          </div>
          <div className="col-auto">
          <br/>

            <Button
            variant="contained"
            sx={"width:200px"}
            onClick={updateTask}
            >Update</Button> &nbsp; &nbsp;

            <Button
            variant="contained"
            sx={"width:200px"}
            onClick={cancelUpdate}
            >Cancel</Button>
          </div>
        </div>
        <br />  
      </>
    )
  }
  
  export default UpdateForm;
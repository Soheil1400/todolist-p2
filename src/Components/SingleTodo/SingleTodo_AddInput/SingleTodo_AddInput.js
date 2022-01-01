import './SingleTodo_AddInput.css'
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import {useState} from "react";

const SingleTodo_AddInput = ({dispatch ,item}) => {
    const [open, setOpen] = useState(false);
    const [title ,setTitle] = useState({title: ''})
    const handleClose = () => {
        setOpen(false)
        setTitle({title: ''})
    }
    const handleSubmit = e => {
        e.preventDefault()
        const Title = title.title
        const TodoId = item.id
        dispatch({type:'AddNewItem' , payload: {Title ,TodoId}});
        setTitle({title: ''})
        setOpen(false)
    }
    const handleNewTodo = e => {
        setTitle({title: e.target.value})
    }
    return(
        <div className={'SingleTodo_AddInput'}>
            <Button sx={{backgroundColor: '#001E3C'}} size={'small'} variant="contained" onClick={()=>setOpen(true)}>
                Add Item<AddIcon/>
            </Button>
            <Dialog open={open} onClose={handleClose} onSubmit={handleSubmit}>
                <form>
                    <DialogTitle>Todo item Title</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please type new todo item title :)
                        </DialogContentText>
                        <TextField value={title.title} onChange={e=>handleNewTodo(e)} autoFocus margin="dense" id="name" label="Todo Title" type="text" fullWidth/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button type={'submit'}>Add New Todo</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    )
}

export default SingleTodo_AddInput
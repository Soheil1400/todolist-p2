import './MainApp_AddInput.css'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {useState} from "react";

const MainApp_AddInput = ({dispatch}) => {
    const [open, setOpen] = useState(false);
    const [title ,setTitle] = useState({title: ''})
    const handleClose = () => {
        setOpen(false)
        setTitle({title: ''})
    }
    const handleSubmit = e => {
        e.preventDefault()
        const Title =title.title
        dispatch({type:'AddNewTodo' , payload: {Title}});
        setTitle({title: ''})
        setOpen(false)
    }
    const handleNewTodo = e => {
        setTitle({title: e.target.value})
    }
    return (
        <div className={'MainApp_AddInput'}>
            <Button  sx={{backgroundColor: '#001E3C'}} size={'small'} variant="contained" onClick={()=>setOpen(true)}>
                <AddIcon/>
            </Button>
            <Dialog open={open} onClose={handleClose} onSubmit={handleSubmit}>
                <form>
                    <DialogTitle>Todo Title</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please type new todo title :)
                        </DialogContentText>
                        <TextField value={title.title} onChange={e=>handleNewTodo(e)} autoFocus margin="dense" id="name" label="Todo Title" type="text" fullWidth/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button type={'submit'}>Add New Todo</Button>
                    </DialogActions>
                </form>
            </Dialog>
            <div className={'MainApp_AddInput-addTitle'}>
                Add Todo
            </div>
        </div>
    )
}

export default MainApp_AddInput
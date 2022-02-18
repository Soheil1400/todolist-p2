import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, styled, TextField} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {useEffect, useState} from "react";

const SingleTodo_AddInput = ({dispatch ,item}) => {
    const [open, setOpen] = useState(false);
    const [title ,setTitle] = useState({title: ''})
    const [error,setError] = useState(false)
    const PrimeButton = styled(Button)({
        backgroundColor:'#E94560',
        boxShadow:'none',
        border:'1px solid #E94560',
        '&:hover':{
            backgroundColor:'#fff',
            color:'#E94560',
            border:'1px solid #E94560',
            boxShadow:'none',
        }
    })
    const handleClose = () => {
        setOpen(false)
        setTitle({title: ''})
    }
    const handleSubmit = e => {
        e.preventDefault()
        const Title = title.title
        const TodoId = item.id
        if(Title !== ''){
            dispatch({type:'AddNewItem' , payload: {Title ,TodoId}});
            setTitle({title: ''})
            setOpen(false)
        }
        setError(true)
    }
    const handleNewTodo = e => {
        setTitle({title: e.target.value})
    }
    useEffect(()=>{
        setError(false)
    },[open])
    useEffect(()=>{
        title.title === '' ? setError(true) : setError(false)
    },[title])
    return(
        <Grid width={'100%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
            <PrimeButton sx={{backgroundColor: '#E94560'}} size={'small'} variant="contained" onClick={()=>setOpen(true)}>
                Add Item<AddIcon/>
            </PrimeButton>
            <Dialog open={open} onClose={handleClose} onSubmit={handleSubmit}>
                <form>
                    <DialogTitle>Todo item Title</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please type new todo item title :)
                        </DialogContentText>
                        <TextField  error={error} helperText={error === true ? 'empty' : ''} value={title.title} onChange={e=>handleNewTodo(e)} autoFocus margin="dense" id="name" label="Todo Title" type="text" fullWidth/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button type={'submit'}>Add New Todo</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </Grid>
    )
}

export default SingleTodo_AddInput
import {Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, styled} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import {useEffect, useState} from "react";

const MainApp_AddInput = ({dispatch}) => {
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
        const Title =title.title
        if(Title !== ''){
            dispatch({type:'AddNewTodo' , payload: {Title}});
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
    return (
        <Grid display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'column'}>
            <PrimeButton size={'small'} variant="contained" onClick={()=>setOpen(true)}>
                <AddIcon/>
            </PrimeButton>
            <Dialog open={open} onClose={handleClose} onSubmit={handleSubmit}>
                <form>
                    <DialogTitle>Todo Title</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Please type new todo title :)
                        </DialogContentText>
                        <TextField error={error} helperText={error === true ? 'empty' : ''} value={title.title} onChange={e=>handleNewTodo(e)} autoFocus margin="dense" id="name" label="Todo Title" type="text" fullWidth/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button type={'submit'}>Add New Todo</Button>
                    </DialogActions>
                </form>
            </Dialog>
            <Grid fontWeight={700} my={2}>
                Add Todo
            </Grid>
        </Grid>
    )
}

export default MainApp_AddInput
import {Alert, Grid} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import {useNavigate} from "react-router-dom";

const SingleTodo_Alert = ({alert, setAlert, dispatch}) => {
    const navigate = useNavigate()
    const handleDeleteTodo = todoId =>{
        dispatch({type: 'DeleteTodo', payload: {todoId}})
        setAlert({display:'none',id:''})
        setTimeout(() => navigate('/todolist-p2'), 5);
    }
    return (
        <Grid p={'0.5rem'}>
            <Alert variant="filled" severity="error" style={{display: alert.display}} action={
                <Grid>
                    <CheckIcon cursor={'pointer'} onClick={()=>handleDeleteTodo(alert.id)}/>
                    <ClearIcon cursor={'pointer'} onClick={()=>setAlert({display:'none',id:''})} />
                </Grid>}>
                Are you sure to delete ?
            </Alert>
        </Grid>
    )
}

export default SingleTodo_Alert
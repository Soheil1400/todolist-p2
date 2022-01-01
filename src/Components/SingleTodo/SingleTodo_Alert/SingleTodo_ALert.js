import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import {useNavigate} from "react-router-dom";

const SingleTodo_Alert = ({alert, setAlert, dispatch}) => {
    const navigate = useNavigate()
    const handleDeleteTodo = todoId =>{
        dispatch({type: 'DeleteTodo', payload: {todoId}})
        setAlert({display:'none',id:''})
        setTimeout(() => navigate('/'), 5);
    }
    return (
        <div style={{padding:'0.5rem'}}>
            <Alert variant="filled" severity="error" style={{display: alert.display}} action={
                <div>
                    <CheckIcon onClick={()=>handleDeleteTodo(alert.id)}/>
                    <ClearIcon onClick={()=>setAlert({display:'none',id:''})} />
                </div>}>
                Are you sure to delete ?
            </Alert>
        </div>
    )
}

export default SingleTodo_Alert
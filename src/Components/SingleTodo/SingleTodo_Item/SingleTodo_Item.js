import {Checkbox, Grid} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const SingleTodo_Item = ({item , dispatch}) => {
    const handleCheckItem = (todoId, itemId, e) => {
        dispatch({type: 'CheckItem', payload: {todoId, itemId, e}})
    }
    const handleDeleteItem = (todoId, itemId) =>{
        dispatch({type:'DeleteItem' , payload: {itemId , todoId}});
    }
    return(
        <Grid>
            <ul style={{width:'80%',margin:'auto',maxWidth:'1000px'}}>
                {item.items.map(i => (
                    <li style={{display:'flex',justifyContent:'space-between',alignItems:'center'}} key={i.id}>
                        <Grid>
                            <Checkbox size={'small'} type={'checkbox'} checked={i.status} id={`${item.id} - ${i.id}`} onChange={(e) => handleCheckItem(item.id, i.id, e)} sx={{color: '#E94560', '&.Mui-checked': {color: '#E94560'}}}/>
                            <label style={{textDecoration: i.status === true ? 'line-through' : '',cursor:'pointer'}} htmlFor={`${item.id} - ${i.id}`}>{i.title}</label>
                        </Grid>
                        <DeleteIcon sx={{cursor:'pointer'}} onClick={()=>handleDeleteItem(item.id ,i.id)} className={'SingleTodo_Item-ListIcon'}/>
                    </li>))}
            </ul>
        </Grid>
    )
}

export default SingleTodo_Item
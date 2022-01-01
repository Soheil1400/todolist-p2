import Checkbox from "@mui/material/Checkbox";
import './SingleTodo_Item.css'
import DeleteIcon from '@mui/icons-material/Delete';

const SingleTodo_Item = ({item , dispatch}) => {
    const handleCheckItem = (todoId, itemId, e) => {
        dispatch({type: 'CheckItem', payload: {todoId, itemId, e}})
    }
    const handleDeleteItem = (todoId, itemId) =>{
        dispatch({type:'DeleteItem' , payload: {itemId , todoId}});
    }
    return(
        <div className={'SingleTodo_Item'}>
            <ul>
                {item.items.map(i => (
                    <li className={'SingleTodo_Item-List'} key={i.id}>
                        <Checkbox className={'SingleTodo_Item-ListCheckBox'} size={'small'} type={'checkbox'} checked={i.status} id={`${item.id} - ${i.id}`} onChange={(e) => handleCheckItem(item.id, i.id, e)} sx={{color: '#001E3C', '&.Mui-checked': {color: '#001E3C'}}}/>
                        <label className={'SingleTodo_Item-ListLabel'} style={{textDecoration: i.status === true ? 'line-through' : ''}} htmlFor={`${item.id} - ${i.id}`}>{i.title}</label>
                        <DeleteIcon onClick={()=>handleDeleteItem(item.id ,i.id)} className={'SingleTodo_Item-ListIcon'}/>
                    </li>))}
            </ul>
        </div>
    )
}

export default SingleTodo_Item
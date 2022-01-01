import './MainApp_Todos.css'
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import {Link} from "react-router-dom";

const MainApp_Todos = ({state , dispatch}) => {
    const handleCheckItem = (todoId, itemId, e) => {
        dispatch({type: 'CheckItem', payload: {todoId, itemId, e}})
    }
    return(
        <div className={'MainApp_Todos'}>
            <div className={'MainApp_Todos-tab'}>
                {state.map(todo => (
                    <Paper sx={{backgroundColor: '#001E3C'}} className={'MainApp_Todos-tab-card'} elevation={5} key={todo.id}>
                        <div>
                            <h4>
                                <Link to={`/${todo.id}`}>
                                    {todo.title}
                                </Link>
                            </h4>
                        </div>
                        <div className={'white-line'}/>
                        <div className={'TodoBar_Card-container-list'}>
                            <ul>
                                {todo.items.map(item => item.title !== 0 ? (
                                    <li key={item.id}>
                                        <Checkbox size={'small'} type={'checkbox'} checked={item.status} id={`${todo.id} - ${item.id}`} onChange={(e) => handleCheckItem(todo.id, item.id, e)} sx={{color: '#fff', '&.Mui-checked': {color: '#fff'}}}/>
                                        <label style={{textDecoration: item.status === true ? 'line-through' : ''}} htmlFor={`${todo.id} - ${item.id}`}>{item.title}</label>
                                    </li>) : '')}
                            </ul>
                        </div>
                    </Paper>))}
            </div>
        </div>
    )
}

export default MainApp_Todos
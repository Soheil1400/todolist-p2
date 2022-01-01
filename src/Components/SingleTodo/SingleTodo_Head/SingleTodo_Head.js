import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import DeleteIcon from '@mui/icons-material/Delete';
import './SingleTodo_Head.css'
import {Link} from 'react-router-dom'

const SingleTodo_Head = ({item ,setAlert}) => {
    return(
        <div className={'SingleTodo_Head'}>
            <div>
                <Link to={'/'}>
                    <KeyboardBackspaceIcon fontSize={'large'}/>
                </Link>
            </div>
            <div>
                <DeleteIcon onClick={()=>setAlert({display:'flex',id:item.id})} fontSize={'large'}/>
            </div>
        </div>
    )
}

export default SingleTodo_Head
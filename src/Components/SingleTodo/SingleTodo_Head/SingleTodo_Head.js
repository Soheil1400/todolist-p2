import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import DeleteIcon from '@mui/icons-material/Delete';
import {Link} from 'react-router-dom'
import {Grid} from "@mui/material";

const SingleTodo_Head = ({item ,setAlert}) => {
    return(
        <Grid p={'1rem'} width={'100%'} display={'flex'} alignItems={'center'} justifyContent={'space-between'} flexDirection={'row'}>
            <Grid>
                <Link to={'/todolist-p2'}>
                    <KeyboardBackspaceIcon fontSize={'large'}/>
                </Link>
            </Grid>
            <Grid>
                <DeleteIcon cursor={'pointer'} onClick={()=>setAlert({display:'flex',id:item.id})} fontSize={'large'}/>
            </Grid>
        </Grid>
    )
}

export default SingleTodo_Head
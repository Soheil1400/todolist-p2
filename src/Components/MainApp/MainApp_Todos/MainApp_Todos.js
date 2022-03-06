import {Paper, Checkbox, Typography, Grid, styled} from '@mui/material';
import {Link} from "react-router-dom";

const MainApp_Todos = ({state, dispatch}) => {
    const handleCheckItem = (todoId, itemId, e) => {
        dispatch({type: 'CheckItem', payload: {todoId, itemId, e}})
    }
    const Line = styled(Grid)({
        backgroundColor: '#fff',
        width: '180px',
        height: '2px',
        margin: '1rem 0',
    })
    const GridCards = styled(Grid)({
        padding: '2rem',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        overflowX: 'auto',
        overflowY: 'hidden',
        whiteSpace: 'nowrap',
    })
    const PaperCard = styled(Paper)({
        padding: '2rem 0 2rem 1rem',
        color: '#fff',
        borderRadius: '5px',
        marginRight: '1rem',
        cursor: 'pointer',
        backgroundColor: '#E94560',
        height:'350px',
        boxShadow: ' rgb(3 0 71 / 9%) 0px 1px 3px',
        '&:hover': {
            boxShadow: 'rgb(3 0 71 / 9%) 0px 8px 45px'
        }
    })
    return (
        <Grid>
            <GridCards>
                {state.map(todo => (
                    <PaperCard elevation={5} key={todo.id}>
                        <Link to={`/${todo.id}`}>
                            <div>
                                <Typography variant={"h5"}>
                                    {todo.title}
                                </Typography>
                            </div>
                        </Link>
                        <Line/>
                        <Grid>
                            <ul>
                                {todo.items.slice(0,5).map(item => item.title !== 0 ? (
                                    <li key={item.id}>
                                        <Checkbox size={'small'} type={'checkbox'} checked={item.status}
                                                  id={`${todo.id} - ${item.id}`}
                                                  onChange={(e) => handleCheckItem(todo.id, item.id, e)}
                                                  sx={{color: '#fff', '&.Mui-checked': {color: '#fff'}}}/>
                                        <label style={{textDecoration: item.status === true ? 'line-through' : ''}}
                                               htmlFor={`${todo.id} - ${item.id}`}>
                                            <Typography component={'span'} sx={{cursor:'pointer'}}>
                                                {item.title}
                                            </Typography>
                                        </label>
                                    </li>) : '')}
                                    <li style={{width:'100%',display:'flex',justifyContent:"center",paddingTop:'10px'}}>
                                        <Link  to={`/${todo.id}`}>
                                            {todo.items.length > 5 ? 'Show more ...' : ''}
                                        </Link>
                                    </li>
                            </ul>
                        </Grid>
                    </PaperCard>))}
            </GridCards>
        </Grid>
    )
}

export default MainApp_Todos
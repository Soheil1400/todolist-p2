import './SingleTodo_Title.css'
import CircularProgress from '@mui/material/CircularProgress';

const SingleTodo_Title = ({item}) => {
    return(
        <div className={'SingleTodo_Title'}>
            <div className={'SingleTodo_Title-Circle'}>
                <CircularProgress sx={{ color: '#001E3C' }} variant="determinate" value={((item.items.filter(i => i.status === true).length)/(item.items.length))*100} />
            </div>
            <div className={'SingleTodo_Title-Name'}>
                <div>
                    <h1>
                        {item.title}
                    </h1>
                </div>
                <div>
                    {item.items.filter(i => i.status === true).length} of {item.items.length} Complete
                </div>
            </div>
        </div>
    )
}

export default SingleTodo_Title
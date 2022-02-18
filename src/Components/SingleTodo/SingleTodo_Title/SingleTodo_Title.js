import {CircularProgress, Grid, Typography} from '@mui/material';

const SingleTodo_Title = ({item}) => {
    return(
        <Grid display={'flex'} alignItems={'center'} flexDirection={'row'} width={'80%'} margin={'auto'} maxWidth={'1000px'} mb={3}>
            <Grid mr={2}>
                <CircularProgress sx={{ color: '#E94560' }} variant="determinate" value={((item.items.filter(i => i.status === true).length)/(item.items.length))*100} />
            </Grid>
            <Grid mr={'1rem'}>
                <Grid>
                    <Typography variant={'h4'}>
                        {item.title}
                    </Typography>
                </Grid>
                <Grid>
                    {item.items.filter(i => i.status === true).length} of {item.items.length} Complete
                </Grid>
            </Grid>
        </Grid>
    )
}

export default SingleTodo_Title
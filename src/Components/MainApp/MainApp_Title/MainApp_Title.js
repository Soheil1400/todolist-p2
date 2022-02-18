import {Grid, styled, Typography} from "@mui/material";

const MainApp_Title = () => {
    const Line = styled(Grid)({
        height: '2px',
        width: '25%',
        backgroundColor: '#E7E7E9'
    })
    return (
        <Grid display={'flex'} alignItems={'center'} justifyContent={'center'} flexDirection={'row'} mt={4}>
            <Line/>
            <Grid display={'flex'} justifyContent={'center'} width={'50%'} flexDirection={'row'} my={3}
                  fontSize={'1.5rem'}>
                <Typography>Todo &nbsp;</Typography>
                <Typography color={'#B1B1B2'} fontWeight={'lighter'}>Lists</Typography>
            </Grid>
            <Line/>
        </Grid>
    )
}

export default MainApp_Title
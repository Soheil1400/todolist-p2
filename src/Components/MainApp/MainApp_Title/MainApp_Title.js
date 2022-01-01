import './MainApp_Title.css'

const MainApp_Title = () => {
    return (
        <div className={'MainApp_Title'}>
            <div className={'MainApp_Title-line'}/>
            <div className={'MainApp_Title-title'}>
                <p className={'MainApp_Title-boldTitle'}>Todo &nbsp;</p>
                <p className={'MainApp_Title-lightTitle'}>Lists</p>
            </div>
            <div className={'MainApp_Title-line'}/>
        </div>
    )
}

export default MainApp_Title
import MainApp_Title from "./MainApp_Title/MainApp_Title";
import MainApp_AddInput from "./MainApp_AddInput/MainApp_AddInput";
import MainApp_Todos from "./MainApp_Todos/MainApp_Todos";
import {useContext} from "react";
import {TodoContext} from "../../Context/Context";
import {useEffect} from "react";

const MainApp = () => {
    const {state, dispatch} = useContext(TodoContext)
    useEffect(() => {
        const data = localStorage.getItem('todo')
        if (data) {
            dispatch({type: 'LocalSave', payload: {data}})
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('todo', JSON.stringify(state))
    }, [state])
    return(
        <div className={'Container'}>
            <MainApp_Title/>
            <MainApp_AddInput dispatch={dispatch}/>
            <MainApp_Todos state={state} dispatch={dispatch}/>
        </div>
    )
}

export default MainApp
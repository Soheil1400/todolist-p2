import SingleTodo_Head from "./SingleTodo_Head/SingleTodo_Head";
import SingleTodo_Title from "./SingleTodo_Title/SingleTodo_Title";
import SingleTodo_Item from "./SingleTodo_Item/SingleTodo_Item";
import SingleTodo_AddInput from "./SingleTodo_AddInput/SingleTodo_AddInput";
import {useContext, useEffect, useState} from "react";
import {TodoContext} from "../../Context/Context";
import {useParams} from "react-router-dom";
import SingleTodo_Alert from "./SingleTodo_Alert/SingleTodo_ALert";

const SingleTodo = () => {
    const {state, dispatch} = useContext(TodoContext)
    const [item , setItem] = useState({id:'', title:'', items: []})
    const [alert , setAlert] = useState({display:'none',id:''})
    const params = useParams()
    useEffect(() => {
        const data = localStorage.getItem('todo')
        if (data) {
            dispatch({type: 'LocalSave', payload: {data}})
        }
    }, [])
    useEffect(()=>{
        localStorage.setItem('todo', JSON.stringify(state))
    },[item])
    useEffect(()=>{
        setItem(state.filter(item => item.id === Number(params.id))[0] || {id:'', title:'', items: []})
    },[state])
    return(
        <div className={'Container'}>
            <SingleTodo_Alert alert={alert} setAlert={setAlert} dispatch={dispatch}/>
            <SingleTodo_Head item={item} setAlert={setAlert}/>
            <SingleTodo_Title item={item}/>
            <SingleTodo_Item item={item} dispatch={dispatch}/>
            <SingleTodo_AddInput item={item} dispatch={dispatch}/>
        </div>
    )
}

export default SingleTodo
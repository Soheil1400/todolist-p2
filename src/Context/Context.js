import {useReducer, createContext} from "react";
import Data from "../Data/Data";
import Reducer from "../Reducer/Reducer";

export const TodoContext = createContext({state:[] , dispatch: ()=>{}})

const TodoContextProvider = ({children}) => {
    const [state ,dispatch] = useReducer(Reducer , Data)
    return(
        <TodoContext.Provider value={{state , dispatch}}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider
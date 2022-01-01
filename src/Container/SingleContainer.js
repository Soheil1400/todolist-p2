import SingleTodo from "../Components/SingleTodo/SingleTodo";
import TodoContextProvider from "../Context/Context";

const SingleContainer = () => {
    return(
        <TodoContextProvider>
            <SingleTodo />
        </TodoContextProvider>
    )
}

export default SingleContainer
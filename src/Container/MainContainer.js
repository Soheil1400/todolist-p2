import TodoContextProvider from "../Context/Context";
import MainApp from "../Components/MainApp/MainApp";

const MainContainer = () => {
    return(
        <TodoContextProvider>
            <MainApp/>
        </TodoContextProvider>
    )
}

export default MainContainer
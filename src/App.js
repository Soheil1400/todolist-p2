import './App.css';
import {BrowserRouter, Routes, Route ,HashRouter} from "react-router-dom";
import MainContainer from "./Container/MainContainer";
import SingleContainer from "./Container/SingleContainer";


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route index path={'/todolist-p2'} element={<MainContainer/>} />
          <Route path="/:id" element={<SingleContainer/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;

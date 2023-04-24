import { Route, Routes } from "react-router";
import Login from "../Molecules/Login";
import ErrorPage from "../Components/ErrorPage";
import Home from "../Page/Home";


function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="*" element={<ErrorPage />}></Route>
    </Routes>
    
    //<Layout />
  );
}

export default App;

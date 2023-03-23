import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Error from './components/Error';


function App() {
  return (
    <div className="App">
      
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path={"/"} exact element={<ItemListContainer/>}/>
            <Route path={"/category/:id"} exact element={<ItemListContainer/>}/>
            <Route path={"/item/id"} exact element={<ItemDetailContainer/>}/>
            <Route path={"*"} exact element={<Error/>}/>      
          </Routes>                
        </BrowserRouter>     
    </div>
  );
}

export default App;

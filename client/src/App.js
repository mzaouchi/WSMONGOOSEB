import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavContact from './Components/NavContact';
import Home from './Components/Home';
import ListContact from './Components/ListContact';
import AddContact from './Components/AddContact';
import UpdateContact from './Components/UpdateContact';

function App() {
  return (
    <div>
      <NavContact/>

      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/ListContact' element={<ListContact/>}/>
          <Route path='/AddContact' element={<AddContact/>}/>
          <Route path='/UpdateContact/:id' element={<UpdateContact/>}/>
      </Routes>

    </div>
  );
}

export default App;

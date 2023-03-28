import './App.css';
import NavBar from './components/navBar/NavBar';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import Menu from './pages/menu/Menu';
import SignIn from './pages/signIn/SignIn';
import WatchList from './pages/watchList/WatchList';



function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/watchlist' element={<WatchList/>} />
      </Routes>
    </div>
  );
}

export default App;

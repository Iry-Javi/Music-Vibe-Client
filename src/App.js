import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar'
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import AllConcerts from './pages/AllConcerts'
import AddConcert from './components/AddConcert';
import SingleConcert from './pages/SingleConcert';
import EditConcert from './pages/EditConcert';
import ConcertCard from './components/ConcertCard';
import ProfilePage from './pages/ProfilePage';
// import SearchBar from '../components/SearchBar'
import CommentForm from './components/CommentForm'
import './App.css';


function App() {
  return (
    <div className="App">
    <Navbar />
    <main>
        <div className="container">
          <div className="row">
            <div className="col">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path="/concerts" element={<AllConcerts/>} />
        <Route path="/addconcerts" element={<AddConcert/>} />
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/singleconcert/:concertId' element={<SingleConcert/>} />
        <Route path='/concerts/edit/:concertId' element={<EditConcert/>} />
        <Route path='/cardconcerts' element={<ConcertCard/>} />
        <Route path='/profile' element={<ProfilePage/>} />
        {/* <Route path='/search' element={<SearchBar/>} /> */}
        <Route path='/commentform' element={<CommentForm/>} />
      </Routes>
      </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

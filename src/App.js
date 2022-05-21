import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Contact from './Pages/Contact/Contact';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointments from './Pages/Dashboard/MyAppointments';
import MyHistory from './Pages/Dashboard/MyHistory';
import MyReview from './Pages/Dashboard/MyReview';
import Users from './Pages/Dashboard/Users';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Review from './Pages/Review/Review';
import Navbar from './Pages/Shared/Navbar';
import Login from './Pages/User/Login/Login';
import RequireAdmin from './Pages/User/Login/RequireAdmin';
import SignUp from './Pages/User/Login/SignUp';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/appointment' element={<RequireAuth><Appointment /></RequireAuth>} />
        <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>} >
          <Route index element={<MyAppointments />} />
          <Route path='review' element={<MyReview />} />
          <Route path='history' element={<MyHistory />} />
          <Route path='users' element={<RequireAdmin><Users /></RequireAdmin>} />
        </Route>
        <Route path='/review' element={<Review />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from "../components/Navbar.jsx";
import ProfilePage from "../pages/Profile/ProfiePage.jsx";
import HomePage from "../pages/HomePage.jsx";
import Login from "../pages/Login/Login.jsx";
import Signup from "../pages/Signup/Signup.jsx";
import { useAuthContext } from '../context/AuthContext.jsx';
import Stories from '../pages/Stories.jsx';
import CreatePostForm from '../pages/CreatePostForm.jsx';


function App() {
  const { authUser } = useAuthContext();
  
  return (
    <>
      <Toaster />
      <Navbar/>
      <Routes>
        <Route
          path="/"
          element={authUser ? <HomePage /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login/>}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <Signup />}
        />
        <Route
          path="/profile"
          element={<ProfilePage/>}
          />
        <Route
          path="/stories"
          element={<Stories/>}
          />
        <Route
          path="/createpost"
          element={<CreatePostForm/>}
          />
      </Routes>
    </>
  );
}

export default App;

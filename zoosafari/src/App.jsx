import "jquery";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Spinner from './Component/Spinner';
import Navbar from './Component/Navbar';
import Login from './Pages/Login';
import Register from './Pages/RegisterPage';
import PrivateRoute from './Pravate/Private';
import Dashboard from './Component/Dashboard';
import BookSafari from './Component/BookSafari';
import LandingPage from './Component/LandingPage';
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import AddAnimal from "./Component/Categeory/Cat";
import AnimalList from "./Component/Categeory/Display";
import EditAnimal from "./Component/Categeory/Edit";
import SingleAnimal from "./Component/Singlepage/Singlepage";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from "./Component/Footer/Footer";
import SingleAnimalPage from "./Component/Singlepage/Singlepage";
import New from "./Component/Animal/New";
import NotFoundPage from "./Component/PageNotFound/PageNotFound";
import Allpost from "./Component/DailyBlog/Allpost";
import SinglePage from "./Component/DummyData/SinglePageDummy";
import DummyPost from "./Component/DummyData/DummyPost";


function App() {
  const [loading, setLoading] = useState(true); // Start with `true`

  useEffect(() => {
    // Simulate data fetching
    const timer = setTimeout(() => {
      setLoading(false); // Hide spinner after 2 seconds
      
    }, 1000);
    
    return () => clearTimeout(timer); // Cleanup function
    
  }, []); // Run only on mount

  if (loading) {
    return <Spinner loading={loading} />; // Show spinner until loading is false
  }

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/*' element={<NotFoundPage />} />
         <Route path='/' element={<LandingPage/>} />
         <Route path='/about' element={<About />} />
         <Route path='/about' element={<About />} />
         <Route path='/AllPost' element={<DummyPost />} />
         <Route path='/add-animal' element={<AddAnimal />} />
         <Route path='/animals' element={ <AnimalList /> } />
         <Route path="/edit-animal/:id" element={<EditAnimal />} />
         <Route path='/contact' element={<Contact/>} />
          <Route path='/All' element={<New />} /> 
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        {/* <Route path='/' element={<CategoryList />} /> */}
        <Route path="/animal/:id" element={<SingleAnimalPage />} />
        <Route path="/animalS/:id" element={<SinglePage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/book' element={ < BookSafari />    } />
        <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>    } />
  
        
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;

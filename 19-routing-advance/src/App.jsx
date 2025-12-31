
import Navbar from './components/navbar'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Products from './pages/Products';
import Home from './pages/Home'
import NotFound from './pages/NotFound';
import Man from './pages/Man';
import Girl from './pages/Girl';
import Kids from './pages/Kids';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import Navbar2 from './pages/Navbar2';


const App = () => {
  
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar />
      <Navbar2/>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/course' element={<Courses/>} />
        <Route path='/product' element={<Products />}>
          <Route path='man' element={<Man />} />
          <Route path='girl' element={<Girl />} />
          <Route path='kids' element={<Kids />} />
        </Route>
        <Route path='/courses' element={<Courses/>} />
        <Route path='/courses/:id' element= {<CourseDetail/>}/>

        <Route path='*' element={<NotFound />} />
        

      </Routes>


      <Footer />
    </div>
  )
}

export default App


import { Counter } from './Counter';
import  '../styles/index.scss'
import { Link, Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage/AboutPage';
import MainPage from './pages/MainPage/MainPage';
import { AboutPageLazy } from './pages/AboutPage/AboutPage.lazy';
import { MainPageLazy } from './pages/MainPage/MainPage.lazy';
import { Suspense } from 'react';



const App = () => {
  return (

    <div className='app'>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
       <Suspense fallback={<div>Loading... </div>}><Routes>

<Route path={'/about'} element={<AboutPageLazy/>}/>
<Route path={'/'} element={<MainPageLazy/>}/>

   </Routes></Suspense>
    </div>
  );
};

export default App;
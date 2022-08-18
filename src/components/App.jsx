import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import Home from './Home/Home';
import Movies from './Movies/Movies';
import NotFoundPage from './NotFoundPage/NotFoundPage';


function App() {
return(
  <>
  <Routes>
    <Route putch='/' element={<Layout />}>
      <Route index putch='/' element={<Home />} />
      <Route putch='/Movies' element={<Movies />} />
      <Route putch='*' element={<NotFoundPage />} />
    </Route>
  </Routes>
  </>
)
}

export default App;
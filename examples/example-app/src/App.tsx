import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './view/home';
import Spinner from './view/spinner';
import BreadcrumbSegundo from './view/breadcrumb/segundo';
import BreadcrumbPrimeiro from './view/breadcrumb/primeiro';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/spinner' element={<Spinner />} />
        <Route path='/breadcrumbsegundo' element={<BreadcrumbSegundo />} />
        <Route path='/breadcrumbprimeiro' element={<BreadcrumbPrimeiro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
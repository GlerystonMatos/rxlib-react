import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './view/home';
import Spinner from './view/spinner';
import Button from './view/buttons/button';
import ButtonLink from './view/buttons/button-link';
import ButtonsCrud from './view/buttons/buttons-crud';
import BreadcrumbSegundo from './view/breadcrumb/segundo';
import BreadcrumbPrimeiro from './view/breadcrumb/primeiro';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/button' element={<Button />} />
        <Route path='/spinner' element={<Spinner />} />
        <Route path='/buttonlink' element={<ButtonLink />} />
        <Route path='/buttonscrud' element={<ButtonsCrud />} />
        <Route path='/breadcrumbsegundo' element={<BreadcrumbSegundo />} />
        <Route path='/breadcrumbprimeiro' element={<BreadcrumbPrimeiro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
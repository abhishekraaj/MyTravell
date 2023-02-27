import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom"
// import CardPage from './Pages/CardPage/CardPage';
import { RecoilRoot } from 'recoil';
import RoutingCard from './Component/Card/RoutingCard';
import YourHomePage from './Pages/HomePage/YourHomePage';
import ParticulaPage from './Pages/HomePage/ParticularPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/routingCard' element={<RoutingCard />} />
          <Route path='/host/home' element={<YourHomePage />} />
          <Route path='/particularPage' element={<ParticulaPage />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

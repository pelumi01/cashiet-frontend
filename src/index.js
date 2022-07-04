import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Layout from './views/layouts/index';
import Index from './views/public';
import SignIn from './views/auth/sign-in';
import SignUp from './views/auth/sign-up';
import Cart from './views/cart';
import UserProvider from './contexts/user-context';
import VerifyEmail from './views/auth/verify-email';
import DashboardIndex from './dashboard';
import ProtectRoute from './protect-route';

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
    <UserProvider>
      <BrowserRouter>
      <Routes>
        <Route path="" element={<App />} >
          <Route path='/' element={ <Layout/> }>
            <Route path='' element={ <Index/> } ></Route>
            <Route path='/sign-in' element={ <SignIn/> } ></Route>
            <Route path='/sign-up' element={ <SignUp/> } ></Route>
            <Route path='/confirm-email/:emailToken' element={ <VerifyEmail/> } ></Route>
            
            <Route path='/cart' element={ <Cart/> } ></Route>

            <Route element={ <ProtectRoute/> } >
              <Route path='/dashboard' element={ <DashboardIndex/> } >
                
              </Route>
            </Route>
          </Route>
        </Route>
      </Routes>
      </BrowserRouter>
    </UserProvider>
  
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import NavComp from './components/authentication/NavComp'
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import LoginComp from './components/authentication/LoginComp';
import Register from './components/authentication/Register';
import './App.css';
import Addauction from './components/authentication/Addauction';
import Home from './components/authentication/Home';
import Detail from './components/Detail';
import Checkout from './components/Checkout';
import { AuthProvider } from "./config/Auth";
import PrivateRoute from "./PrivateRoute";

function App(){
            return (
                <>
                <AuthProvider>
                <BrowserRouter>
                <NavComp />
                <div className="container-fluid">

                <Routes>
                    <Route path="" element={< Home  />} />
                     <Route path="login" element={< LoginComp />} />
                     <Route path="signup" element={< Register />} />
                     <Route path="auction" element={< Addauction  />} />
                     <Route path="detail" element={< Detail  />} />
                     <Route path="/checkout" element={<Checkout/>} />


                </Routes>
                </div>
                
                
                </BrowserRouter>
                </AuthProvider>
                </>
               
            )
} export default App


   
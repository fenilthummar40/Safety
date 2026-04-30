import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Signup from "./Page/Signup.jsx";
import Login from "./Page/Login.jsx";

import Home from "./Page/Home.jsx";
import Abouts from "./Page/About.jsx";
import Pricings from "./Page/Pricing.jsx";
import Book from "./Page/Book.jsx";
import BookDetail from "./Page/BookDetail.jsx";
import Contact from "./Page/ Contact.jsx";
import Faq from "./Page/Faq.jsx";
import Profile from "./Page/Profile.jsx";


function App() {

    return (
        <div className='relative overflow-hidden bg-[#0b0b0f]'>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500 opacity-20 blur-[120px]"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-500 opacity-10 blur-[100px]"></div>
            <BrowserRouter>
                <Routes>
                    <Route path="/Signup" element={<Signup/>}/>
                    <Route path="/Login" element={<Login/>}/>

                    <Route path="/" element={<Home/>}/>
                    <Route path="/About" element={<Abouts/>}/>
                    <Route path="/Pricing" element={<Pricings/>}/>
                    <Route path='/Book' element={<Book/>}/>
                    {/*<Route path='/BookingDetail' element={<BookDetail/>} />*/}
                    <Route path="/BookingDetail/:id" element={<BookDetail/>}/>
                    <Route path="/Contact" element={<Contact/>}/>
                    <Route path="/Faq" element={<Faq/>}/>
                    <Route path="/Profile" element={<Profile/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App

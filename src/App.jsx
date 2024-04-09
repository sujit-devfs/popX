import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Account from './pages/Account'
import Home from "./pages/Home"
import Signin from './pages/Signin'
import Signup from './pages/Signup'

function App() {

  return (
    <BrowserRouter>
    <Routes>
        <Route index element={<Home />} />
        <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<Signin />} />
        <Route path="account" element={<Account />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App

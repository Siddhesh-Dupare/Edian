
import { Routes, Route } from "react-router"

import SignUp from "@/pages/SignUp.tsx"
import LandingPage from "@/pages/LandingPage.tsx"
import './App.css'

function App() {

    return (
        <>

            <Routes>
                <Route path="/" element={ <LandingPage /> } />
                <Route path="/signup" element={ <SignUp /> } />
            </Routes>
            
        </>
    );
}

export default App

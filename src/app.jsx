import { BrowserRouter } from "react-router-dom";
import React from 'react';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Draw, Education } from "./components";


const App = () => {
    return (
        <BrowserRouter>
            <div className = "relative z-0 bg-primary">
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                    <Navbar />
                    <Hero />
                </div>
            </div>
            <About />
            <Education />
            <Experience />
            <Tech />
            <Works />
            <Feedbacks />
            {/* <div>
                <Draw />
            </div> */}
            {/* <Draw /> */}
            <div className='relative z-0'>
                <Contact />
                <StarsCanvas />
            </div>
        </BrowserRouter>
    );
    // return <div>Hello World</div>;
}

export default App;
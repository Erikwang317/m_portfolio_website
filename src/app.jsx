import { BrowserRouter } from "react-router-dom";
import React from 'react';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Draw, Education, UniverseCanvas } from "./components";


const App = () => {
    return (
        <BrowserRouter>
            <div className = "relative z-0 bg-primary">
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                    <Navbar />
                    <Hero />
                </div>
            </div>
            {/* <div className='relative z-0'>
                <Draw />
                <StarsCanvas />
            </div> */}
            <About />
            <div className='relative z-0'>
                <Education/>
                <Experience />
                <StarsCanvas />
            </div>
            <div className='relative z-0'>
                <Tech />
                <UniverseCanvas />              
            </div>
            <Works />
            <Feedbacks />
            {/* <div>
                <Draw />
            </div> */}
            <div className='relative z-0'>
                <Contact />
                <StarsCanvas />
            </div>
        </BrowserRouter>
    );
    // return <div>Hello World</div>;
}

export default App;
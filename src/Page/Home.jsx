import Hero from "../Component/Hero.jsx";
import Important from "../Component/Important.jsx";
import Works from "../Component/Works.jsx";
import Features from "../Component/Features.jsx";
import About from "../Component/About.jsx";
import Cta from "../Component/Cta.jsx";
import Footer from "../Component/Footer.jsx";

function Home() {
    return (
        <>
            <Hero/>
            <About/>
            <Important/>
            <Works/>
            <Features/>
            <Cta/>
            <Footer/>
        </>
    )
}

export default Home

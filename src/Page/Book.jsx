import Header from "../Component/Header.jsx";
import Footer from "../Component/Footer.jsx";
import {useNavigate} from "react-router-dom";
import {trips} from "../assets/assets";
import CTA from "../Component/Cta.jsx";
import {motion} from "framer-motion";

function Book() {

    const fadeUp = {
        hidden: {opacity: 0, y: 40},
        show: {opacity: 1, y: 0, transition: {duration: 0.6}}
    };

    const stagger = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const navigate = useNavigate();

    return (
        <>
            <Header/>

            <motion.section variants={fadeUp} initial="hidden" whileInView="show"
                            viewport={{once: true}} className="bg-[#0b0b0f] text-white py-16 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-2">Your <span
                    className="text-orange-500">Safety Trips</span></h1>
                <p className="text-gray-400">Manage your check-ins and stay protected</p>
            </motion.section>

            <section className="bg-[#0b0b0f] py-10 px-6">
                <motion.div variants={stagger} initial="hidden" whileInView="show"
                            viewport={{once: true}}
                            className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {trips.map((trip) => (
                        <motion.div key={trip.id} variants={fadeUp} whileHover={{scale: 1.05, y: -5}}
                                    onClick={() => navigate(`/BookingDetail/${trip.id}`)}
                                    className="bg-[#141419] border border-white/10 rounded-2xl overflow-hidden cursor-pointer transition">
                            <img src={trip.img} alt={trip.title} className="w-full h-60 object-cover"/>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-3 text-white">{trip.title}</h3>
                                <div className="text-gray-400 text-sm space-y-1 mb-4">
                                    <p>⏰ Time: {trip.time}</p>
                                    <p>⌛ Duration: {trip.duration}</p>
                                    <p>👤 Contact: {trip.contact}</p>
                                </div>

                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        navigate(`/BookingDetail/${trip.id}`);
                                    }}
                                    className="w-full bg-orange-500 text-black py-2 rounded-lg hover:bg-orange-600 hover:text-white transition">
                                    View Details
                                </button>
                            </div>
                        </motion.div>
                    ))}

                </motion.div>
            </section>

            <CTA/>
            <Footer/>
        </>
    );
}

export default Book;
import {IconCheck} from "@tabler/icons-react";
import PricingModal from "../Modal/PricingModal.jsx";
import {useState} from "react";
import {motion} from "framer-motion";

function Pricing() {
    const [pricing, setPricing] = useState(null);

    const fadeUp = {
        hidden: {opacity: 0, y: 40},
        show: {opacity: 1, y: 0, transition: {duration: 0.6}}
    };

    const stagger = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.25
            }
        }
    };

    return (
        <section className="py-20 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 text-center relative">
                <motion.h2 variants={fadeUp} initial="hidden" whileInView="show"
                           viewport={{once: true}} className="text-4xl md:text-5xl font-bold mb-16">
                    Simple & Transparent <span className="text-orange-500">Pricing</span>
                </motion.h2>

                <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{once: true}}
                            className="grid md:grid-cols-2 gap-10">

                    <motion.div variants={fadeUp} whileHover={{y: -10}}
                                className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl hover:border-orange-500/40 transition flex justify-between flex-col duration-500 cursor-pointer">
                        <h3 className="text-xl font-semibold mb-4">Basic Plan</h3>
                        <p className="text-4xl font-bold mb-2">$4.99 <span
                            className="text-lg text-gray-400">/month</span></p>
                        <p className="text-gray-400 mb-6">$48/year</p>

                        <ul className="space-y-3 mb-8 text-left text-gray-300">
                            {[
                                "2 email check-ins/day",
                                "3 emergency contacts",
                                "Alerts to contacts",
                                "Pause anytime",
                                "Extend check-ins"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-2">
                                    <IconCheck className="text-orange-400 w-4 h-4"/>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <button onClick={() => setPricing("basic")}
                                className="w-full border border-white/20 py-3 rounded-xl hover:bg-white/10 transition cursor-pointer">
                            Choose Plan
                        </button>
                    </motion.div>

                    <motion.div variants={fadeUp} whileHover={{scale: 1.05}}
                                className="relative bg-gradient-to-b from-orange-500/20 to-transparent border border-orange-500/30 p-8 rounded-2xl shadow-[0_0_40px_rgba(255,165,0,0.15)] flex justify-between flex-col duration-500 cursor-pointer">
                        <span
                            className="absolute top-4 right-4 bg-orange-500 text-black text-xs px-3 py-1 rounded-full">
                            Most Popular
                        </span>
                        <h3 className="text-xl font-semibold mb-4">Premium Plan</h3>
                        <p className="text-4xl font-bold mb-2">
                            $9.99 <span className="text-lg text-gray-400">/month</span>
                        </p>
                        <p className="text-gray-400 mb-6">$99/year</p>

                        <ul className="space-y-3 mb-8 text-left text-gray-300">
                            {[
                                "Everything in Basic",
                                "4 SMS check-ins/day",
                                "Faster verification"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-2">
                                    <IconCheck className="text-orange-400 w-4 h-4"/>{item}
                                </li>
                            ))}
                        </ul>
                        <button onClick={() => setPricing("premium")}
                                className="w-full bg-orange-500 text-black py-3 rounded-xl hover:bg-orange-600 hover:text-white transition cursor-pointer">
                            Choose Plan
                        </button>
                    </motion.div>
                </motion.div>
                <PricingModal pricing={pricing} setPricing={setPricing}/>

            </div>
        </section>
    );
}

export default Pricing;
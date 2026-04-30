import {IconCheck} from "@tabler/icons-react";
import PricingModal from "../Modal/PricingModal.jsx";
import {useState} from "react";

function Pricing() {
    const [pricing, setPricing] = useState(null);

    return (
        <section className="py-20 text-white overflow-hidden">

            <div className="max-w-7xl mx-auto px-6 text-center relative">

                <h2 className="text-4xl md:text-5xl font-bold mb-16">
                    Simple & Transparent <span className="text-orange-500">Pricing</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-10">

                    <div
                        className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl hover:-translate-y-2 hover:border-orange-500/40 transition flex justify-between flex-col duration-1000 cursor-pointer">
                        <h3 className="text-xl font-semibold mb-4">Basic Plan</h3>
                        <p className="text-4xl font-bold mb-2">
                            $4.99 <span className="text-lg text-gray-400">/month</span>
                        </p>
                        <p className="text-gray-400 mb-6">$48/year</p>
                        <ul className="space-y-3 mb-8 text-left text-gray-300">
                            <li className="flex gap-2"><IconCheck className="text-orange-400 w-4 h-4"/>2 email
                                check-ins/day
                            </li>
                            <li className="flex gap-2"><IconCheck className="text-orange-400 w-4 h-4"/>3 emergency
                                contacts
                            </li>
                            <li className="flex gap-2"><IconCheck className="text-orange-400 w-4 h-4"/>Alerts to
                                contacts
                            </li>
                            <li className="flex gap-2"><IconCheck className="text-orange-400 w-4 h-4"/>Pause anytime
                            </li>
                            <li className="flex gap-2"><IconCheck className="text-orange-400 w-4 h-4"/>Extend check-ins
                            </li>
                        </ul>

                        <button onClick={() => setPricing("basic")}
                                className="w-full border border-white/20 py-3 rounded-xl hover:bg-white/10 transition duration-1000 cursor-pointer">
                            Choose Plan
                        </button>
                    </div>

                    <div
                        className="relative bg-gradient-to-b from-orange-500/20 to-transparent border border-orange-500/30 p-8 rounded-2xl hover:scale-105 transition shadow-[0_0_40px_rgba(255,165,0,0.15)] flex justify-between flex-col duration-1000 cursor-pointer">
                        <span
                            className="absolute top-4 right-4 bg-orange-500 text-black text-xs px-3 py-1 rounded-full">Most Popular</span>
                        <h3 className="text-xl font-semibold mb-4">Premium Plan</h3>
                        <p className="text-4xl font-bold mb-2">
                            $9.99 <span className="text-lg text-gray-400">/month</span>
                        </p>
                        <p className="text-gray-400 mb-6">$99/year</p>
                        <ul className="space-y-3 mb-8 text-left text-gray-300">
                            <li className="flex gap-2"><IconCheck className="text-orange-400 w-4 h-4"/>Everything in
                                Basic
                            </li>
                            <li className="flex gap-2"><IconCheck className="text-orange-400 w-4 h-4"/>4 SMS
                                check-ins/day
                            </li>
                            <li className="flex gap-2"><IconCheck className="text-orange-400 w-4 h-4"/>Faster
                                verification
                            </li>
                        </ul>

                        <button onClick={() => setPricing("premium")}
                            className="w-full bg-orange-500 text-black py-3 rounded-xl hover:bg-orange-600 transition duration-1000 hover:text-white cursor-pointer">
                            Choose Plan
                        </button>
                    </div>

                </div>

                <PricingModal pricing={pricing} setPricing={setPricing}/>

            </div>
        </section>
    );
}

export default Pricing;
import {IconX} from "@tabler/icons-react";
import {useState} from "react";

function PricingModal({pricing, setPricing}) {
    const [form, setForm] = useState({
        name: "",
        email: "",
    });

    if (!pricing) return null;

    const plans = {
        basic: {name: "Basic Plan", price: "$4.99/month"},
        premium: {name: "Premium Plan", price: "$9.99/month"},
    };

    const selected = plans[pricing];

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">

            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={() => setPricing(null)}/>

            <div
                className="relative w-full max-w-2xl bg-[#141419]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-8 z-10 shadow-xl">

                <button onClick={() => setPricing(null)}
                        className="absolute top-4 right-4 text-gray-400 hover:text-white">
                    <IconX/>
                </button>

                <h2 className="text-2xl font-semibold mb-6">
                    Subscribe to <span className="text-orange-500">{selected.name}</span>
                </h2>

                <div className="mb-6 p-4 bg-white/5 border border-white/10 rounded-xl">
                    <p className="text-lg font-semibold">{selected.name}</p>
                    <p className="text-orange-400">{selected.price}</p>
                </div>

                <div className="space-y-4">

                    <input type="text" placeholder="Full Name"
                           value={form.name} onChange={(e) =>
                        setForm({...form, name: e.target.value})}
                           className="w-full px-4 py-3 rounded-xl bg-[#0b0b0f] border border-white/10 text-white focus:border-orange-500 outline-none"
                    />

                    <input type="email" placeholder="Email"
                           value={form.email} onChange={(e) =>
                        setForm({...form, email: e.target.value})}
                           className="w-full px-4 py-3 rounded-xl bg-[#0b0b0f] border border-white/10 text-white focus:border-orange-500 outline-none"
                    />

                    <input type="text" placeholder="Card Number"
                           className="w-full px-4 py-3 rounded-xl bg-[#0b0b0f] border border-white/10 text-white focus:border-orange-500 outline-none"
                    />

                    <div className="flex gap-4">
                        <input type="text" placeholder="MM/YY"
                               className="w-1/2 px-4 py-3 rounded-xl bg-[#0b0b0f] border border-white/10 focus:border-orange-500 outline-none"
                        />
                        <input type="text" placeholder="CVV"
                               className="w-1/2 px-4 py-3 rounded-xl bg-[#0b0b0f] border border-white/10 focus:border-orange-500 outline-none"
                        />
                    </div>
                </div>

                <button
                    className="w-full mt-6 bg-orange-500 text-black py-3 rounded-xl hover:bg-orange-600 transition font-semibold cursor-pointer">
                    Confirm & Pay
                </button>
            </div>
        </div>
    );
}

export default PricingModal;
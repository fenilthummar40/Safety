import {IconMail, IconMessage, IconClock, IconPlayerPause, IconPlayerPlay, IconMapOff} from "@tabler/icons-react";
import {motion} from "framer-motion";

function Features() {
    const features = [
        {
            icon: <IconMail size={28}/>,
            title: "Email Alerts",
            desc: "Receive automated safety check-ins via email.",
        },
        {
            icon: <IconMessage size={28}/>,
            title: "SMS Alerts",
            desc: "Instant text notifications when it matters most.",
        },
        {
            icon: <IconClock size={28}/>,
            title: "Custom Timing",
            desc: "Set check-ins based on your schedule and activity.",
        },
        {
            icon: <IconPlayerPause size={28}/>,
            title: "Pause Anytime",
            desc: "Temporarily disable check-ins when not needed.",
        },
        {
            icon: <IconPlayerPlay size={28}/>,
            title: "Resume Anytime",
            desc: "Quickly re-enable your safety monitoring.",
        },
        {
            icon: <IconMapOff size={28}/>,
            title: "No Location Tracking",
            desc: "Your privacy matters — we don’t track your location.",
        },
    ];

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
            <div className="max-w-7xl mx-auto px-6 relative">
                <motion.div variants={fadeUp} initial="hidden" whileInView="show"
                            viewport={{once: true}} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold">Powerful <span
                        className="text-orange-500">Features</span></h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        Everything you need to stay safe — simple, reliable, and private.
                    </p>
                </motion.div>

                <motion.div variants={stagger} initial="hidden" whileInView="show"
                            viewport={{once: true}} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {features.map((item, index) => (
                        <motion.div key={index} variants={fadeUp}
                                    className="group bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl hover:translate-y-[-6px] hover:border-orange-500/40 transition duration-500 cursor-pointer">
                            <div
                                className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#141419] text-orange-400 mb-4 group-hover:scale-110 transition">{item.icon}
                            </div>

                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}

                </motion.div>
            </div>
        </section>
    );
}

export default Features;
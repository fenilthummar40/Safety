import {IconUserPlus, IconUsers, IconClock, IconShieldCheck} from "@tabler/icons-react";
import {motion} from "framer-motion";

function Works() {
    const steps = [
        {
            icon: <IconUserPlus size={28}/>,
            title: "Create Account",
            desc: "Sign up in seconds and get started instantly.",
        },
        {
            icon: <IconUsers size={28}/>,
            title: "Add Contacts",
            desc: "Choose trusted people who’ll be notified if needed.",
        },
        {
            icon: <IconClock size={28}/>,
            title: "Set Time",
            desc: "Schedule your check-in based on your activity.",
        },
        {
            icon: <IconShieldCheck size={28}/>,
            title: "Auto Check-in",
            desc: "We alert your contacts if you don’t respond.",
        },
    ];

    const fadeUp = {
        hidden: {opacity: 0, y: 50},
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

    const scaleIn = {
        hidden: {opacity: 0, scale: 0.7},
        show: {opacity: 1, scale: 1, transition: {duration: 0.5}}
    };

    return (
        <section className="py-20 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative">
                <motion.div initial="hidden" whileInView="show" viewport={{once: true}}
                            variants={fadeUp} className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold">How <span
                        className="text-orange-500">Keep in Touch</span> Works
                    </h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">A simple 4-step process to keep you safe
                        automatically—without stress or constant check-ins.
                    </p>
                </motion.div>

                <motion.div variants={stagger} initial="hidden" whileInView="show"
                            viewport={{once: true}} className="relative grid md:grid-cols-4 gap-10">
                    <motion.div initial={{scaleX: 0}} whileInView={{scaleX: 1}} transition={{duration: 1}}
                                className="hidden md:block absolute top-10 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500/40 to-transparent origin-left"/>

                    {steps.map((step, index) => (
                        <motion.div key={index} variants={fadeUp} className="relative text-center group">
                            <motion.div variants={scaleIn} whileHover={{scale: 1.15, rotate: 8}}
                                        className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-[#141419] border border-orange-500/30 text-orange-400 cursor-pointer duration-1000">{step.icon}
                            </motion.div>
                            <motion.div whileHover={{y: -8, scale: 1.03}}
                                        className="mt-6 bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl duration-1000 cursor-pointer">
                                <h3 className="font-semibold text-lg">{step.title}</h3>
                                <p className="text-gray-400 text-sm mt-2">{step.desc}</p>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default Works;
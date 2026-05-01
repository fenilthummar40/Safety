import {IconTarget, IconEye, IconAward} from "@tabler/icons-react";
import {motion} from "framer-motion";

function About() {

    const items = [
        {
            icon: <IconTarget size={30}/>,
            title: "Our Mission",
            desc: "To make personal safety simple, proactive, and accessible for everyone—without fear or complexity.",
        },
        {
            icon: <IconEye size={30}/>,
            title: "Our Vision",
            desc: "A world where staying safe is effortless, empowering people to live freely with confidence.",
        },
        {
            icon: <IconAward size={30}/>,
            title: "40+ Years of Experience",
            desc: "Built on decades of expertise in safety and reliability, ensuring a system you can trust every day.",
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
                staggerChildren: 0.2
            }
        }
    };

    return (
        <section className="py-20 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative">

                <motion.div initial="hidden" whileInView="show" viewport={{once: true}}
                            variants={fadeUp} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold">About <span
                        className="text-orange-500">Keep in Touch</span></h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        Built with experience, driven by purpose, and designed for your peace of mind.
                    </p>
                </motion.div>

                <motion.div variants={stagger} initial="hidden" whileInView="show"
                            viewport={{once: true}} className="grid md:grid-cols-3 gap-8 mb-20">
                    {items.map((item, index) => (
                        <motion.div key={index} variants={fadeUp} whileHover={{y: -8, scale: 1.03}}
                                    className="group bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl text-center hover:border-orange-500/40 transition duration-300 cursor-pointer">
                            <motion.div whileHover={{scale: 1.15, rotate: 5}}
                                        className="w-16 h-16 mx-auto flex items-center justify-center rounded-xl bg-[#141419] text-orange-400 mb-5">
                                {item.icon}
                            </motion.div>

                            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div initial="hidden" whileInView="show" viewport={{once: true}} variants={fadeUp}
                            className="bg-gradient-to-r from-orange-500/20 to-transparent border border-orange-500/30 rounded-2xl p-10 text-center backdrop-blur-lg">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">Trusted Experience That Matters</h3>
                    <p className="text-gray-300 max-w-2xl mx-auto mb-6">With over <span
                        className="text-orange-500 font-semibold">40 years of combined experience</span>, we understand
                        what safety truly means—and how to make it effortless for you.
                    </p>

                    <div className="flex justify-center gap-10 mt-6 flex-wrap">
                        {[
                            {value: "40+", label: "Years Experience"},
                            {value: "100%", label: "Privacy Focus"},
                            {value: "24/7", label: "Reliability"}
                        ].map((item, i) => (
                            <motion.div key={i} whileHover={{scale: 1.1}}>
                                <h4 className="text-2xl font-bold text-orange-400">{item.value}</h4>
                                <p className="text-gray-400 text-sm">{item.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default About;
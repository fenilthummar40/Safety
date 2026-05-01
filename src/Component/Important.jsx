import {IconUserHeart, IconUser, IconUsers} from "@tabler/icons-react";
import {motion} from "framer-motion";

function Important() {

    const audience = [
        {
            icon: <IconUserHeart size={30}/>,
            title: "Parents",
            desc: "Stay reassured about your children while respecting their independence.",
        },
        {
            icon: <IconUser size={30}/>,
            title: "Seniors",
            desc: "Simple and reliable check-ins to keep loved ones worry-free.",
        },
        {
            icon: <IconUsers size={30}/>,
            title: "Everyone",
            desc: "An extra layer of safety for everyday life—anytime, anywhere.",
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
                staggerChildren: 0.2
            }
        }
    };

    return (
        <section className="py-20 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative">
                <motion.div initial="hidden" whileInView="show" viewport={{once: true}}
                            variants={fadeUp} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold">Built for <span
                        className="text-orange-500">Everyone</span></h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Designed to fit your lifestyle—whether you're
                        caring for others or just want peace of mind.
                    </p>
                </motion.div>

                <motion.div variants={stagger} initial="hidden" whileInView="show"
                            viewport={{once: true}} className="grid md:grid-cols-3 gap-8 mb-20">
                    {audience.map((item, index) => (
                        <motion.div key={index} variants={fadeUp} whileHover={{y: -10, scale: 1.04}}
                                    className="group bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl text-center hover:border-orange-500/40 transition cursor-pointer">
                            <motion.div
                                whileHover={{scale: 1.15, rotate: 5}}
                                className="w-16 h-16 mx-auto flex items-center justify-center rounded-xl bg-[#141419] text-orange-400 mb-5"
                            >
                                {item.icon}
                            </motion.div>

                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* TEXT BLOCK */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: true}}
                    variants={fadeUp}
                    className="text-center max-w-3xl mx-auto mb-12"
                >
                    <p className="text-gray-400 mb-4">
                        You might already check in with loved ones—but not always consistently.
                    </p>
                    <p className="text-gray-400 mb-4">
                        And small delays can create unnecessary worry.
                    </p>
                    <p className="text-lg font-medium">
                        Let <span className="text-orange-500">Keep in Touch</span> handle it quietly in the background—
                        so you can live freely with peace of mind.
                    </p>
                </motion.div>

                {/* BUTTON */}
                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: true}}
                    variants={fadeUp}
                    className="text-center"
                >
                    <motion.button
                        whileHover={{scale: 1.08}}
                        whileTap={{scale: 0.95}}
                        className="bg-orange-500 text-black px-10 py-4 rounded-xl text-lg font-semibold hover:bg-orange-600 hover:text-white transition shadow-[0_0_30px_rgba(255,165,0,0.3)] cursor-pointer"
                    >
                        Start Free Today
                    </motion.button>
                </motion.div>

            </div>
        </section>
    );
}

export default Important;
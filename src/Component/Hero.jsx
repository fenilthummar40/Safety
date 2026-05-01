import Header from "./Header.jsx";
import {IconArrowRight, IconBolt, IconCloud, IconLock, IconCpu} from "@tabler/icons-react";
import {motion} from "framer-motion";

function Hero() {
    const fadeUp = {
        hidden: {opacity: 0, y: 40},
        show: {opacity: 1, y: 0, transition: {duration: 0.6}}
    };

    const staggerContainer = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };
    return (
        <section className="min-h-screen text-white overflow-hidden">
            <Header/>

            <div className='flex items-center justify-center min-h-[calc(100vh-73px)]'>
                <div className="max-w-7xl mx-auto px-6 py-6 grid md:grid-cols-2 gap-12 items-center">

                    <motion.div variants={staggerContainer} initial="hidden" animate="show">
                        <motion.span variants={fadeUp}
                                     className="px-4 py-1 bg-[#1a1a1f] text-sm rounded-full text-orange-400 border border-orange-500/30 cursor-pointer">
                            🚀 Next-Gen Technology
                        </motion.span>

                        <motion.h1 variants={fadeUp}
                                   className="text-4xl md:text-6xl font-bold leading-tight mt-6">Innovate <br/><span
                            className="text-orange-500">The Future</span>
                        </motion.h1>

                        <motion.p variants={fadeUp} className="text-gray-400 mt-6 text-sm sm:text-lg max-w-lg">
                            Harness cutting-edge technology solutions that transform your business and accelerate growth
                            in the digital era.
                        </motion.p>

                        <motion.div variants={fadeUp} className="flex gap-4 mt-8">
                            <motion.button whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                                           className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl flex items-center gap-2 font-medium text-[12px] sm:text-lg cursor-pointer">
                                Get Started <IconArrowRight size={18}/>
                            </motion.button>

                            <motion.button whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                                           className="border border-gray-600 px-6 py-3 rounded-xl text-gray-300 hover:bg-white/5 text-[12px] sm:text-lg cursor-pointer">
                                Watch Demo
                            </motion.button>
                        </motion.div>

                        <motion.div variants={fadeUp}
                                    className="flex gap-10 mt-12 bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 w-fit">
                            <div>
                                <h3 className="text-xl font-bold text-orange-400">99.9%</h3>
                                <p className="text-sm text-gray-400">Uptime</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-orange-400">1M+</h3>
                                <p className="text-sm text-gray-400">Users</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-orange-400">24/7</h3>
                                <p className="text-sm text-gray-400">Support</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div variants={staggerContainer} initial="hidden" animate="show"
                                className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                        {[{
                            icon: <IconCpu className="text-orange-400 mb-4"/>,
                            title: "AI-Powered",
                            desc: "Smart automation"
                        },
                            {
                                icon: <IconBolt className="text-orange-400 mb-4"/>,
                                title: "Lightning Fast",
                                desc: "Optimized performance"
                            },
                            {
                                icon: <IconLock className="text-orange-400 mb-4"/>,
                                title: "Secure",
                                desc: "Enterprise-grade"
                            },
                            {
                                icon: <IconCloud className="text-orange-400 mb-4"/>,
                                title: "Cloud-Ready",
                                desc: "Scalable infrastructure"
                            }
                        ].map((item, i) => (

                            <motion.div key={i} variants={fadeUp} whileHover={{scale: 1.08}}
                                        className="bg-[#141419] p-6 rounded-2xl border border-orange-500/20 cursor-pointer">{item.icon}
                                <h4 className="font-semibold">{item.title}</h4>
                                <p className="text-sm text-gray-400">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
import {IconUserPlus} from "@tabler/icons-react";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";

function CTA() {

    const fadeUp = {
        hidden: {opacity: 0, y: 40},
        show: {opacity: 1, y: 0, transition: {duration: 0.7}}
    };
    return (
        <section className="py-20 bg-[#0b0b0f] text-white relative overflow-hidden">

            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-orange-500 opacity-20 blur-[140px]"/>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-yellow-500 opacity-10 blur-[100px]"/>
            <div className="max-w-5xl mx-auto px-6 text-center relative">
                <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{once: true}}
                           className="text-4xl md:text-6xl font-bold leading-tight mb-6">Your Safety Should Never Be
                    an <br/><span className="text-orange-500">Afterthought</span>
                </motion.h2>

                <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{once: true}}
                          transition={{delay: 0.2}}
                          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                    Stay connected, stay protected, and give your loved ones peace of mind— without changing your
                    lifestyle.
                </motion.p>

                <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{once: true}}
                            transition={{delay: 0.4}} className="flex items-center justify-center">
                    <Link to='/Signup'>
                        <motion.button whileHover={{scale: 1.08}} whileTap={{scale: 0.95}}
                                       className="flex items-center gap-2 border border-white/20 px-8 py-4 rounded-xl text-lg font-semibold text-gray-300 hover:bg-white/10 transition cursor-pointer">Sign
                            Up <IconUserPlus size={20}/>
                        </motion.button>
                    </Link>
                </motion.div>

                <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{once: true}}
                          transition={{delay: 0.6}} className="text-gray-500 text-sm mt-6">
                    No tracking. No stress. Just peace of mind.
                </motion.p>

            </div>
        </section>
    );
}

export default CTA;
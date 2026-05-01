import {useState} from "react";
import {IconChevronDown} from "@tabler/icons-react";
import {motion, AnimatePresence} from "framer-motion";

function Questions() {
    const faqs = [
        {
            question: "What happens if I forget to check in?",
            answer: "We’ll send an alert to your designated loved one(s) notifying them that you missed your check-in.",
        },
        {
            question: "Who gets alerted?",
            answer: "You can choose up to three emergency contacts for your alerts. You’re free to change them whenever you like.",
        },
        {
            question: "Can I extend a check-in time?",
            answer: "Keep in Touch is as flexible as you are. You can extend your check-in time by 30 minute increments. Just be sure to extend it more than 10 minutes before your original check-in time.",
        },
        {
            question: "Does Keep in Touch track my location or see what I’m doing?",
            answer: "No. Keep in Touch is perfect as a back up to your personal safety plans, like sharing your location with loved ones.",
        },
        {
            question: "Is Keep in Touch only for emergencies or dangerous situations?",
            answer: "Keep in Touch is for any situation you enter where you’d like to add an extra layer of reassurance. That might look different for different people.",
        },
    ];

    const [open, setOpen] = useState(null);

    const fadeUp = {
        hidden: {opacity: 0, y: 40},
        show: {opacity: 1, y: 0, transition: {duration: 0.5}}
    };

    const stagger = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.15
            }
        }
    };
    return (
        <section className="py-20 text-white overflow-hidden">
            <div className="max-w-4xl mx-auto px-6">
                <motion.h2 variants={fadeUp} initial="hidden" whileInView="show"
                           viewport={{once: true}} className="text-4xl md:text-5xl font-bold text-center mb-16">
                    Frequently Asked <span className="text-orange-500">Questions</span>
                </motion.h2>

                <motion.div variants={stagger} initial="hidden" whileInView="show"
                            viewport={{once: true}} className="space-y-4">

                    {faqs.map((item, i) => {
                        const isOpen = open === i;

                        return (
                            <motion.div key={i} variants={fadeUp}
                                        className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden">
                                <button onClick={() => setOpen(isOpen ? null : i)}
                                        className="w-full flex justify-between items-center p-6 text-left">
                                    <span className="font-medium text-lg">{item.question}</span>

                                    <motion.div animate={{rotate: isOpen ? 180 : 0}}
                                                transition={{duration: 0.3}}>
                                        <IconChevronDown className={isOpen ? "text-orange-400" : "text-gray-400"}/>
                                    </motion.div>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div key="content" initial={{height: 0, opacity: 0}}
                                                    animate={{height: "auto", opacity: 1}}
                                                    exit={{height: 0, opacity: 0}} transition={{duration: 0.3}}>
                                            <p className="px-6 pb-6 text-gray-400 text-sm leading-relaxed">{item.answer}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}

export default Questions;
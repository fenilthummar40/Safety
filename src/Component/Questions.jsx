import {useState} from "react";
import {IconChevronDown} from "@tabler/icons-react";

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

    return (
        <section className="py-20 bg-[#0b0b0f] text-white relative overflow-hidden">

            <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-orange-500 opacity-10 blur-[100px]"/>
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-yellow-500 opacity-10 blur-[100px]"/>

            <div className="max-w-4xl mx-auto px-6 relative">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Frequently Asked <span
                    className="text-orange-500">Questions</span></h2>

                <div className="space-y-4">
                    {faqs.map((item, i) => (
                        <div key={i}
                             className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden transition">

                            <button onClick={() => setOpen(open === i ? null : i)}
                                    className="w-full flex justify-between items-center p-6 text-left">
                                <span className="font-medium text-lg">{item.question}</span>

                                <IconChevronDown
                                    className={`transition-transform duration-300 ${
                                        open === i ? "rotate-180 text-orange-400" : "text-gray-400"
                                    }`}/>
                            </button>

                            <div
                                className={`grid transition-all duration-300 ease-in-out ${
                                    open === i
                                        ? "grid-rows-[1fr] opacity-100"
                                        : "grid-rows-[0fr] opacity-0"
                                }`}>
                                <div className="overflow-hidden">
                                    <p className="px-6 pb-6 text-gray-400 text-sm leading-relaxed">{item.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Questions;
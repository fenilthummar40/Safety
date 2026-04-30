import {
    IconUserPlus,
    IconUsers,
    IconClock,
    IconShieldCheck
} from "@tabler/icons-react";

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

    return (
        <section className="py-20 bg-[#0b0b0f] text-white relative overflow-hidden">

            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-orange-500 opacity-10 blur-[120px]"/>
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-yellow-500 opacity-10 blur-[120px]"/>

            <div className="max-w-7xl mx-auto px-6 relative">

                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold">How <span
                        className="text-orange-500">Keep in Touch</span> Works
                    </h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">A simple 4-step process to keep you safe
                        automatically—without stress or constant check-ins.
                    </p>
                </div>

                <div className="relative grid md:grid-cols-4 gap-10">
                    <div
                        className="hidden md:block absolute top-10 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500/40 to-transparent"/>

                    {steps.map((step, index) => (
                        <div key={index} className="relative text-center group">

                            <div
                                className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-[#141419] border border-orange-500/30 text-orange-400 group-hover:scale-110 transition cursor-pointer">{step.icon}
                            </div>

                            <div
                                className="mt-6 bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl hover:translate-y-[-5px] transition cursor-pointer">
                                <h3 className="font-semibold text-lg">{step.title}</h3>
                                <p className="text-gray-400 text-sm mt-2">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Works;
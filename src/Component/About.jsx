import {IconTarget, IconEye, IconAward} from "@tabler/icons-react";

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

    return (
        <section className="py-20 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold">About <span
                        className="text-orange-500">Keep in Touch</span></h2>

                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        Built with experience, driven by purpose, and designed for your peace of mind.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-20">

                    {items.map((item, index) => (
                        <div key={index}
                             className="group bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl text-center hover:translate-y-[-6px] hover:border-orange-500/40 transition cursor-pointer">
                            <div
                                className="w-16 h-16 mx-auto flex items-center justify-center rounded-xl bg-[#141419] text-orange-400 mb-5 group-hover:scale-110 transition">
                                {item.icon}
                            </div>

                            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}

                </div>

                <div
                    className="bg-gradient-to-r from-orange-500/20 to-transparent border border-orange-500/30 rounded-2xl p-10 text-center backdrop-blur-lg">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">Trusted Experience That Matters</h3>
                    <p className="text-gray-300 max-w-2xl mx-auto mb-6">With over <span
                        className="text-orange-500 font-semibold">40 years of combined experience</span>,
                        we understand what safety truly means—and how to make it effortless for you.
                    </p>

                    <div className="flex justify-center gap-10 mt-6">
                        <div>
                            <h4 className="text-2xl font-bold text-orange-400">40+</h4>
                            <p className="text-gray-400 text-sm">Years Experience</p>
                        </div>
                        <div>
                            <h4 className="text-2xl font-bold text-orange-400">100%</h4>
                            <p className="text-gray-400 text-sm">Privacy Focus</p>
                        </div>
                        <div>
                            <h4 className="text-2xl font-bold text-orange-400">24/7</h4>
                            <p className="text-gray-400 text-sm">Reliability</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
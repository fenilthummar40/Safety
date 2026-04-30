import {
    IconUserHeart,
    IconUser,
    IconUsers
} from "@tabler/icons-react";

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

    return (
        <section className="py-20 bg-[#0b0b0f] text-white relative overflow-hidden">

            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-orange-500 opacity-10 blur-[120px]"/>
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-yellow-500 opacity-10 blur-[120px]"/>

            <div className="max-w-7xl mx-auto px-6 relative">

                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold">Built for <span
                        className="text-orange-500">Everyone</span></h2>

                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Designed to fit your lifestyle—whether you're
                        caring for others or just want peace of mind.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-20">
                    {audience.map((item, index) => (
                        <div
                            key={index}
                            className="group bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl text-center hover:translate-y-[-6px] hover:border-orange-500/40 transition cursor-pointer">
                            <div
                                className="w-16 h-16 mx-auto flex items-center justify-center rounded-xl bg-[#141419] text-orange-400 mb-5 group-hover:scale-110 transition">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}

                </div>

                <div className="text-center max-w-3xl mx-auto mb-12">
                    <p className="text-gray-400 mb-4">You might already check in with loved ones—but not always
                        consistently.</p>
                    <p className="text-gray-400 mb-4">And small delays can create unnecessary worry.</p>
                    <p className="text-lg font-medium">Let <span className="text-orange-500">Keep in Touch</span> handle
                        it quietly in the background— so you can live freely with peace of mind.
                    </p>
                </div>

                <div className="text-center">
                    <button
                        className="bg-orange-500 text-black px-10 py-4 rounded-xl text-lg font-semibold hover:bg-orange-600 hover:scale-105 transition shadow-[0_0_30px_rgba(255,165,0,0.3)] cursor-pointer">Start
                        Free Today
                    </button>
                </div>

            </div>
        </section>
    );
}

export default Important;
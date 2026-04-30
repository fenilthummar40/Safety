import {IconUserPlus} from "@tabler/icons-react";
import {Link} from "react-router-dom";

function CTA() {
    return (
        <section className="py-20 bg-[#0b0b0f] text-white relative overflow-hidden">

            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-orange-500 opacity-20 blur-[140px]"/>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-yellow-500 opacity-10 blur-[100px]"/>

            <div className="max-w-5xl mx-auto px-6 text-center relative">
                <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">Your Safety Should Never Be an <br/>
                    <span className="text-orange-500">Afterthought</span>
                </h2>
                <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">Stay connected, stay protected,
                    and give your loved ones peace of mind— without changing your lifestyle.
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link to='/Signup'>
                        <button
                            className="flex items-center justify-center gap-2 border border-white/20 px-8 py-4 rounded-xl text-lg font-semibold text-gray-300 hover:bg-white/10 transition cursor-pointer">Sign
                            Up <IconUserPlus size={20}/>
                        </button>
                    </Link>
                </div>
                <p className="text-gray-500 text-sm mt-6">No tracking. No stress. Just peace of mind.</p>

            </div>
        </section>
    );
}

export default CTA;
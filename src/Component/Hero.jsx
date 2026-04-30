import Header from "./Header.jsx";
import {
    IconArrowRight,
    IconBolt,
    IconCloud,
    IconLock,
    IconCpu
} from "@tabler/icons-react";

function Hero() {
    return (
        <section className="bg-[#0b0b0f] min-h-screen text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500 opacity-20 blur-[120px]"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-500 opacity-10 blur-[100px]"></div>

            <Header/>

            <div className="max-w-7xl mx-auto px-6 pt-20 grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <span
                        className="px-4 py-1 bg-[#1a1a1f] text-sm rounded-full text-orange-400 border border-orange-500/30 cursor-pointer">
                      🚀 Next-Gen Technology</span>

                    <h1 className="text-5xl md:text-6xl font-bold leading-tight mt-6">Innovate <br/>
                        <span className="text-orange-500">The Future</span>
                    </h1>

                    <p className="text-gray-400 mt-6 text-lg max-w-lg">Harness cutting-edge technology solutions that
                        transform your business and accelerate growth in the digital era.
                    </p>

                    <div className="flex gap-4 mt-8">
                        <button
                            className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl flex items-center gap-2 font-medium text-[12px] sm:text-lg cursor-pointer">
                            Get Started <IconArrowRight size={18}/>
                        </button>
                        <button
                            className="border border-gray-600 px-6 py-3 rounded-xl text-gray-300 hover:bg-white/5 text-[12px] sm:text-lg cursor-pointer">
                            Watch Demo
                        </button>
                    </div>

                    <div
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
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div
                        className="bg-[#141419] p-6 rounded-2xl border border-orange-500/20 hover:scale-105 transition cursor-pointer">
                        <IconCpu className="text-orange-400 mb-4"/>
                        <h4 className="font-semibold">AI-Powered</h4>
                        <p className="text-sm text-gray-400">Smart automation</p>
                    </div>

                    <div
                        className="bg-[#141419] p-6 rounded-2xl border border-orange-500/20 hover:scale-105 transition cursor-pointer">
                        <IconBolt className="text-orange-400 mb-4"/>
                        <h4 className="font-semibold">Lightning Fast</h4>
                        <p className="text-sm text-gray-400">Optimized performance</p>
                    </div>

                    <div
                        className="bg-[#141419] p-6 rounded-2xl border border-orange-500/20 hover:scale-105 transition cursor-pointer">
                        <IconLock className="text-orange-400 mb-4"/>
                        <h4 className="font-semibold">Secure</h4>
                        <p className="text-sm text-gray-400">Enterprise-grade</p>
                    </div>

                    <div
                        className="bg-[#141419] p-6 rounded-2xl border border-orange-500/20 hover:scale-105 transition cursor-pointer">
                        <IconCloud className="text-orange-400 mb-4"/>
                        <h4 className="font-semibold">Cloud-Ready</h4>
                        <p className="text-sm text-gray-400">Scalable infrastructure</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
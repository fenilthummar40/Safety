import {
    IconMail,
    IconPhone,
    IconMapPin,
    IconSend
} from "@tabler/icons-react";
import Header from "../Component/Header.jsx";
import Footer from "../Component/Footer.jsx";

function Contact() {
    return (
        <>
            <Header/>

            <section className="min-h-screen py-20 text-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 relative">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Get in <span className="text-orange-500">Touch</span>
                        </h2>
                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                            Have questions or need help? We’re here for you anytime.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <div
                                className="flex items-center gap-4 bg-white/5 border border-white/10 p-5 rounded-2xl cursor-pointer">
                                <IconMail className="text-orange-400"/>
                                <div>
                                    <p className="text-sm text-gray-400">Email :</p>
                                    <p className="font-medium">support@keepintouch.com</p>
                                </div>
                            </div>

                            <div
                                className="flex items-center gap-4 bg-white/5 border border-white/10 p-5 rounded-2xl cursor-pointer">
                                <IconPhone className="text-orange-400"/>
                                <div>
                                    <p className="text-sm text-gray-400">Phone :</p>
                                    <p className="font-medium">+91 98765 43210</p>
                                </div>
                            </div>

                            <div
                                className="flex items-center gap-4 bg-white/5 border border-white/10 p-5 rounded-2xl cursor-pointer">
                                <IconMapPin className="text-orange-400"/>
                                <div>
                                    <p className="text-sm text-gray-400">Location :</p>
                                    <p className="font-medium">Surat, India</p>
                                </div>
                            </div>

                        </div>

                        <form className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl space-y-5">

                            <div>
                                <label className="text-sm text-gray-400">Full Name :</label>
                                <input type="text" placeholder="Enter your name"
                                       className="w-full mt-1 px-4 py-3 rounded-xl bg-[#141419] border border-white/10 focus:border-orange-500 outline-none"
                                />
                            </div>

                            <div>
                                <label className="text-sm text-gray-400">Email :</label>
                                <input type="email" placeholder="Enter your email"
                                       className="w-full mt-1 px-4 py-3 rounded-xl bg-[#141419] border border-white/10 focus:border-orange-500 outline-none"
                                />
                            </div>

                            <div>
                                <label className="text-sm text-gray-400">Phone Number :</label>
                                <input type="number" placeholder="Enter your phone number"
                                       className="w-full mt-1 px-4 py-3 rounded-xl bg-[#141419] border border-white/10 focus:border-orange-500 outline-none"
                                />
                            </div>

                            <div>
                                <label className="text-sm text-gray-400">Message :</label>
                                <textarea rows="4" placeholder="Write your message..."
                                          className="w-full mt-1 px-4 py-3 rounded-xl bg-[#141419] border border-white/10 focus:border-orange-500 outline-none"
                                />
                            </div>

                            <button type="submit"
                                    className="w-full bg-orange-500 text-black py-3 rounded-xl flex items-center justify-center gap-2 font-semibold hover:bg-orange-600 transition cursor-pointer">Send
                                Message <IconSend size={18}/>
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer/>
        </>
    );
}

export default Contact;
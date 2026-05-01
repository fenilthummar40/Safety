import {
    IconMail,
    IconPhone,
    IconMapPin,
    IconSend
} from "@tabler/icons-react";
import Header from "../Component/Header.jsx";
import Footer from "../Component/Footer.jsx";
import {motion} from "framer-motion";

function Contact() {
    const fadeUp = {
        hidden: {opacity: 0, y: 40},
        show: {opacity: 1, y: 0, transition: {duration: 0.6}}
    };

    const stagger = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };
    return (
        <>
            <Header/>

            <section className="min-h-screen py-20 text-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 relative">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="show"
                                viewport={{once: true}} className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Get in <span className="text-orange-500">Touch</span>
                        </h2>
                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                            Have questions or need help? We’re here for you anytime.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <motion.div variants={stagger} initial="hidden" whileInView="show"
                                    viewport={{once: true}} className="space-y-6">

                            {[{
                                icon: <IconMail/>,
                                title: "Email",
                                value: "support@keepintouch.com"
                            }, {
                                icon: <IconPhone/>,
                                title: "Phone",
                                value: "+91 98765 43210"
                            }, {
                                icon: <IconMapPin/>,
                                title: "Location",
                                value: "Surat, India"
                            }].map((item, i) => (

                                <motion.div key={i} variants={fadeUp} whileHover={{scale: 1.05}}
                                            className="flex items-center gap-4 bg-white/5 border border-white/10 p-5 rounded-2xl cursor-pointer duration-1000">
                                    <div className="text-orange-400">{item.icon}</div>
                                    <div>
                                        <p className="text-sm text-gray-400">{item.title} :</p>
                                        <p className="font-medium">{item.value}</p>
                                    </div>
                                </motion.div>
                            ))}

                        </motion.div>

                        <motion.form variants={stagger} initial="hidden" whileInView="show"
                                     viewport={{once: true}}
                                     className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl space-y-5">

                            {[{
                                label: "Full Name",
                                type: "text",
                                placeholder: "Enter your name"
                            }, {
                                label: "Email",
                                type: "email",
                                placeholder: "Enter your email"
                            }, {
                                label: "Phone Number",
                                type: "number",
                                placeholder: "Enter your phone number"
                            }].map((field, i) => (

                                <motion.div key={i} variants={fadeUp}>
                                    <label className="text-sm text-gray-400">{field.label} :</label>
                                    <input type={field.type} placeholder={field.placeholder}
                                           className="w-full mt-1 px-4 py-3 rounded-xl bg-[#141419] border border-white/10 focus:border-orange-500 outline-none"
                                    />
                                </motion.div>
                            ))}

                            <motion.div variants={fadeUp}>
                                <label className="text-sm text-gray-400">Message :</label>
                                <textarea rows="4" placeholder="Write your message..."
                                          className="w-full mt-1 px-4 py-3 rounded-xl bg-[#141419] border border-white/10 focus:border-orange-500 outline-none"/>
                            </motion.div>

                            <motion.button variants={fadeUp} whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}
                                           type="submit"
                                           className="w-full bg-orange-500 text-black py-3 rounded-xl flex items-center justify-center gap-2 font-semibold hover:bg-orange-600 transition duration-1000 hover:text-white">
                                Send Message <IconSend size={18}/>
                            </motion.button>
                        </motion.form>
                    </div>
                </div>
            </section>

            <Footer/>
        </>
    );
}

export default Contact;
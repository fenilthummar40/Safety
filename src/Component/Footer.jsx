import {
    IconMail,
    IconPhone,
    IconMapPin,
    IconBrandInstagram,
    IconBrandTwitter,
    IconBrandFacebook,
    IconBrandLinkedin
} from "@tabler/icons-react";
import {motion} from "framer-motion";

function Footer() {
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
        <footer className="bg-[#0b0b0f] text-white pt-20 pb-10 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div variants={stagger} initial="hidden" whileInView="show"
                            viewport={{once: true}} className="grid md:grid-cols-4 gap-10 mb-12">

                    <motion.div variants={fadeUp}>
                        <h3 className="text-2xl font-bold text-orange-500 mb-4">Keep in Touch</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">A simple, reliable way to stay safe and
                            connected. Built to give you peace of mind—without tracking your location.
                        </p>
                    </motion.div>

                    <motion.div variants={fadeUp}>
                        <h4 className="font-semibold mb-4">Contact</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li className="flex items-center gap-2"><IconMail size={16}/> support@keepintouch.com</li>
                            <li className="flex items-center gap-2"><IconPhone size={16}/> +91 98765 43210</li>
                            <li className="flex items-center gap-2"><IconMapPin size={16}/> Global Service</li>
                        </ul>
                    </motion.div>

                    <motion.div variants={fadeUp}>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            {["Home", "About", "Pricing", "FAQ"].map((item, i) => (
                                <li key={i} className="hover:text-orange-400 cursor-pointer transition">{item}</li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Policies */}
                    <motion.div variants={fadeUp}>
                        <h4 className="font-semibold mb-4">Policies</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item, i) => (
                                <li key={i} className="hover:text-orange-400 cursor-pointer transition">{item}</li>
                            ))}
                        </ul>
                    </motion.div>

                </motion.div>

                <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{once: true}}
                            className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/10 pt-6">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Keep in Touch. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        {[IconBrandInstagram, IconBrandTwitter, IconBrandFacebook, IconBrandLinkedin].map((Icon, i) => (
                            <motion.div key={i} whileHover={{scale: 1.2, y: -3}}
                                        transition={{type: "spring", stiffness: 200}}
                                        className="cursor-pointer text-gray-400 hover:text-orange-400">
                                <Icon/>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </footer>
    );
}

export default Footer;
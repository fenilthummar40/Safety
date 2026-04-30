import {
    IconMail,
    IconPhone,
    IconMapPin,
    IconBrandInstagram,
    IconBrandTwitter,
    IconBrandFacebook,
    IconBrandLinkedin
} from "@tabler/icons-react";

function Footer() {
    return (
        <footer className="bg-[#0b0b0f] text-white pt-20 pb-10 border-t border-white/10">

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-10 mb-12">
                    <div>
                        <h3 className="text-2xl font-bold text-orange-500 mb-4">Keep in Touch</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">A simple, reliable way to stay safe and
                            connected. Built to give you peace of mind—without tracking your location.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Contact</h4>

                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li className="flex items-center gap-2"><IconMail size={16}/> support@keepintouch.com</li>
                            <li className="flex items-center gap-2"><IconPhone size={16}/> +1 (000) 123-4567</li>
                            <li className="flex items-center gap-2"><IconMapPin size={16}/> Global Service</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>

                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li className="hover:text-orange-400 cursor-pointer">Home</li>
                            <li className="hover:text-orange-400 cursor-pointer">Features</li>
                            <li className="hover:text-orange-400 cursor-pointer">Pricing</li>
                            <li className="hover:text-orange-400 cursor-pointer">FAQ</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">Policies</h4>

                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li className="hover:text-orange-400 cursor-pointer">Privacy Policy</li>
                            <li className="hover:text-orange-400 cursor-pointer">Terms of Service</li>
                            <li className="hover:text-orange-400 cursor-pointer">Cookie Policy</li>
                        </ul>
                    </div>

                </div>

                <div
                    className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/10 pt-6">

                    <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Keep in Touch. All rights
                        reserved.</p>
                    <div className="flex gap-4">
                        <IconBrandInstagram className="cursor-pointer text-gray-400 hover:text-orange-400"/>
                        <IconBrandTwitter className="cursor-pointer text-gray-400 hover:text-orange-400"/>
                        <IconBrandFacebook className="cursor-pointer text-gray-400 hover:text-orange-400"/>
                        <IconBrandLinkedin className="cursor-pointer text-gray-400 hover:text-orange-400"/>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
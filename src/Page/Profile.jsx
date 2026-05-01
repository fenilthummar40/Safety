import {useState} from "react";
import Header from "../Component/Header.jsx";
import {
    IconUserPlus,
    IconSettings,
    IconCalendar,
    IconMenu2,
    IconX
} from "@tabler/icons-react";

function Profile() {
    const [activeTab, setActiveTab] = useState("add");
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const menu = [
        {id: "add", label: "Add Profile", icon: <IconUserPlus size={18}/>},
        {id: "settings", label: "Settings", icon: <IconSettings size={18}/>},
        {id: "bookings", label: "Bookings", icon: <IconCalendar size={18}/>},
    ];

    return (
        <>
            <Header/>

            <section className="min-h-[calc(100vh-73px)] text-white py-6 px-4">
                <div className="max-w-7xl mx-auto flex gap-6">
                    <button onClick={() => setSidebarOpen(true)}
                            className="md:hidden fixed top-20 left-4 z-50 bg-orange-500 p-2 rounded-lg"><IconMenu2/>
                    </button>
                    {sidebarOpen && (
                        <div onClick={() => setSidebarOpen(false)}
                             className="fixed inset-0 bg-black/50 z-40 md:hidden"/>
                    )}
                    <div
                        className={`fixed md:static top-0 left-0 h-full md:h-[765px] w-72 bg-[#0b0b0f] md:bg-transparent backdrop-blur-lg border border-white/10 rounded-2xl p-6 z-50 transform transition-transform duration-300
                        ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}>

                        <div className="flex justify-between items-center mb-6 md:hidden">
                            <h2 className="text-lg font-semibold text-orange-400">My Account</h2>
                            <button onClick={() => setSidebarOpen(false)}><IconX/></button>
                        </div>
                        <h2 className="hidden md:block text-lg font-semibold mb-6 text-orange-400">My Account</h2>
                        <ul className="space-y-2">
                            {menu.map((item) => (
                                <li key={item.id} onClick={() => {
                                    setActiveTab(item.id);
                                    setSidebarOpen(false);
                                }}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition
                                    ${
                                        activeTab === item.id
                                            ? "bg-orange-500 text-white font-medium shadow-[0_0_20px_rgba(255,165,0,0.3)]"
                                            : "text-gray-400 hover:bg-white/10 hover:text-white"
                                    }`}>{item.icon} {item.label}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div
                        className="flex-1 backdrop-blur-lg border border-white/10 rounded-2xl p-6 md:p-8 h-[765px] overflow-y-scroll no-scrollbar">

                        {activeTab === "add" && (
                            <>
                                <h2 className="text-2xl font-semibold mb-4 text-orange-400">Add Profile</h2>
                                <p className="text-gray-400">Add your profile information here.</p>
                                <hr className='border border-gray-800 mt-5'/>

                                <form action="">
                                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5'>
                                        <div><label className="text-sm text-gray-400" htmlFor="">First Name :</label>
                                            <input
                                                className="w-full mt-2 px-4 py-3 rounded-xl bg-[#141419] border border-white/10 text-white placeholder-gray-500 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none"
                                                type="text" placeholder='Enter any your first name'/>
                                        </div>
                                        <div>
                                            <label className='text-sm text-gray-400' htmlFor="">Last Name :</label>
                                            <input
                                                className="w-full mt-2 px-4 py-3 rounded-xl bg-[#141419] border border-white/10 text-white placeholder-gray-500 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none"
                                                type="text" placeholder='Enter any your last name'/>
                                        </div>
                                        <div>
                                            <label className='text-sm text-gray-400' htmlFor="">E-mail :</label>
                                            <input
                                                className="w-full mt-2 px-4 py-3 rounded-xl bg-[#141419] border border-white/10 text-white placeholder-gray-500 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none"
                                                type="email" placeholder='Enter any your email'/>
                                        </div>
                                        <div>
                                            <label className='text-sm text-gray-400' htmlFor="">Phone Number :</label>
                                            <input
                                                className="w-full mt-2 px-4 py-3 rounded-xl bg-[#141419] border border-white/10 text-white placeholder-gray-500 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none"
                                                type="number" placeholder='Enter any your phone number'/>
                                        </div>
                                        <div>
                                            <label className='text-sm text-gray-400' htmlFor="">City :</label>
                                            <input
                                                className="w-full mt-2 px-4 py-3 rounded-xl bg-[#141419] border border-white/10 text-white placeholder-gray-500 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none"
                                                type="text" placeholder='Enter any your city'/>
                                        </div>
                                        <div>
                                            <label className='text-sm text-gray-400' htmlFor="">Pin Code :</label>
                                            <input
                                                className="w-full mt-2 px-4 py-3 rounded-xl bg-[#141419] border border-white/10 text-white placeholder-gray-500 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none"
                                                type="number" placeholder='Enter any your pin code'/>
                                        </div>
                                    </div>
                                    <div className='mt-5'>
                                        <label className='text-sm text-gray-400' htmlFor="">Message :</label>
                                        <textarea
                                            className="w-full mt-2 px-4 py-3 rounded-xl bg-[#141419] border border-white/10 text-white placeholder-gray-500 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none"
                                            name="" id="" cols="30" rows="5"
                                            placeholder='Enter any your meassage ?'></textarea>
                                    </div>
                                    <div className='mt-5'>
                                        <button type="submit"
                                                className="w-full bg-orange-500 text-black py-3 rounded-xl font-semibold hover:bg-orange-600 duration-1000 hover:text-white cursor-pointer">Submit
                                        </button>
                                    </div>
                                </form>
                            </>
                        )}

                        {activeTab === "settings" && (
                            <>
                                <h2 className="text-2xl font-semibold mb-4 text-orange-400">Settings</h2>
                                <p className="text-gray-400">Update your preferences and account settings.</p>
                                <div className='mt-5'>
                                    <div
                                        className="bg-[#141419] border border-white/10 rounded-xl p-5 flex items-center justify-between">
                                        <div>
                                            <h5 className="text-lg font-semibold text-white">My Account</h5>
                                            <p className="text-sm text-gray-400">Primary Email</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm text-white mb-2">feni@gmail.com</p>
                                            <button
                                                className="px-4 py-1.5 text-sm rounded-lg border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black transition cursor-pointer">Change
                                            </button>
                                        </div>
                                    </div>
                                    <div
                                        className="bg-[#141419] border border-white/10 rounded-xl p-5 flex items-center justify-between mt-5">
                                        <h5 className="text-lg font-semibold text-white">Account Verify</h5>
                                        <button
                                            className="px-4 py-1.5 text-sm rounded-lg border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black transition cursor-pointer">Verify
                                        </button>
                                    </div>
                                    <div
                                        className="bg-[#141419] border border-white/10 rounded-xl p-5 flex items-center justify-between mt-5">
                                        <h5 className="text-lg font-semibold text-white">Password Change</h5>
                                        <button
                                            className="px-4 py-1.5 text-sm rounded-lg border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black transition cursor-pointer">Change
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}

                        {activeTab === "bookings" && (
                            <>
                                <h2 className="text-2xl font-semibold mb-6 text-orange-400">Your Safety Trips
                                    History</h2>

                                {(() => {
                                    const data = JSON.parse(localStorage.getItem("activity")) || [];
                                    if (!Array.isArray(data) || data.length === 0) {
                                        return (
                                            <p className="text-gray-400">No activity found. Start a check-in to see
                                                history.</p>
                                        );
                                    }

                                    return (
                                        <div className="space-y-4">
                                            {data.slice().reverse().map((item, index) => (
                                                <div key={item.id || index}
                                                     className="bg-[#141419] border border-white/10 p-5 rounded-xl flex justify-between items-center">
                                                    <div>
                                                        <h3 className="text-lg font-semibold text-white">{item.trip || "No Trip"}</h3>
                                                        <p className="text-sm text-gray-400">Contact: {item.contact || "N/A"}</p>
                                                        <p className="text-xs text-gray-500 mt-1">{item.date || ""} • {item.time || ""}</p>
                                                    </div>

                                                    <span
                                                        className={`px-3 py-1 text-sm rounded-full font-medium cursor-pointer
                                                            ${
                                                            item.action === "START"
                                                                ? "bg-blue-500/20 text-blue-400"
                                                                : item.action === "PAUSE"
                                                                    ? "bg-yellow-500/20 text-yellow-400"
                                                                    : item.action === "SAFE"
                                                                        ? "bg-green-500/20 text-green-400"
                                                                        : item.action === "ALERT"
                                                                            ? "bg-red-500/20 text-red-400"
                                                                            : "bg-gray-500/20 text-gray-300"
                                                        }`}>{item.action || "UNKNOWN"}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    );
                                })()}
                            </>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Profile;
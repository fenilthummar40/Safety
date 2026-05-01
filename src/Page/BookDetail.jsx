import {useParams, useNavigate} from "react-router-dom";
import Header from "../Component/Header.jsx";
import {trips} from "../assets/assets.js";
import Footer from "../Component/Footer.jsx";
import {useState, useEffect, useRef} from "react";
import {ToastContainer, toast} from "react-toastify";
import {motion} from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

function BookDetail() {

    const {id} = useParams();
    const navigate = useNavigate();
    const trip = trips.find((t) => t.id === parseInt(id));
    const [status, setStatus] = useState("idle");
    const [timeLeft, setTimeLeft] = useState(0);
    const [isSafe, setIsSafe] = useState(false);
    const [showConnect, setShowConnect] = useState(false);
    const [connected, setConnected] = useState(false);
    const alertTimerRef = useRef(null);
    const connectTimerRef = useRef(null);
    const contactIndexRef = useRef(0);
    const contacts = [trip?.contact, "Backup +91 000"];

    const fadeUp = {
        hidden: {opacity: 0, y: 40},
        show: {opacity: 1, y: 0, transition: {duration: 0.6}}
    };

    const stagger = {
        hidden: {},
        show: {
            transition: {staggerChildren: 0.2}
        }
    };

    useEffect(() => {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        const user = JSON.parse(localStorage.getItem("currentUser"));

        if (!isLoggedIn || !user) {
            toast.error("Please login first");
            setTimeout(() => navigate("/Login"), 1500);
        }
    }, [navigate]);

    const getSeconds = (duration) => {
        if (duration.includes("Hour")) return parseInt(duration) * 3600;
        if (duration.includes("Min")) return parseInt(duration) * 60;
        return 3600;
    };

    const formatTime = (sec) => {
        const m = Math.floor(sec / 60);
        const s = sec % 60;
        return `${m}:${s < 10 ? "0" : ""}${s}`;
    };

    const saveActivity = (type, contactUsed = "") => {
        const user = JSON.parse(localStorage.getItem("currentUser"));
        if (!user) return;

        const data = {
            id: Date.now(),
            userId: user.id,
            trip: trip.title,
            contact: contactUsed || trip.contact,
            action: type,
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString(),
        };

        const existing = JSON.parse(localStorage.getItem("activity")) || [];
        existing.push(data);
        localStorage.setItem("activity", JSON.stringify(existing));
    };

    const startAlertFlow = () => {
        contactIndexRef.current = 0;
        setConnected(false);

        const runCycle = () => {
            if (isSafe || connected) return;
            const currentContact = contacts[contactIndexRef.current];

            toast.error(`Alert sent to ${currentContact}`);
            saveActivity("ALERT", currentContact);

            connectTimerRef.current = setTimeout(() => {
                if (isSafe || connected) return;
                setShowConnect(true);
                alertTimerRef.current = setTimeout(() => {
                    if (isSafe || connected) return;
                    setShowConnect(false);
                    contactIndexRef.current =
                        (contactIndexRef.current + 1) % contacts.length;
                    runCycle();
                }, 30000);

            }, 30000);
        };
        runCycle();
    };

    const handleConnect = () => {
        setConnected(true);
        setShowConnect(false);

        clearTimeout(connectTimerRef.current);
        clearTimeout(alertTimerRef.current);

        toast.success("📞 Call Connected. Alerts stopped.");
        saveActivity("CONNECTED");
    };

    useEffect(() => {
        let timer;

        if (status === "running" && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        }

        if (timeLeft === 0 && status === "running" && !isSafe) {
            setStatus("completed");
            startAlertFlow();
        }

        return () => clearInterval(timer);
    }, [status, timeLeft, isSafe]);

    useEffect(() => {
        if (isSafe) {
            clearTimeout(alertTimerRef.current);
            clearTimeout(connectTimerRef.current);
            toast.success("You're Safe");
        }
    }, [isSafe]);
    if (!trip) return <p className="text-white p-10">Trip not found</p>;

    return (
        <>
            <Header/>

            <motion.section initial="hidden" animate="show" variants={stagger}
                            className="bg-[#0b0b0f] text-white px-6 py-10">
                <div className="max-w-7xl mx-auto">
                    <motion.img variants={fadeUp} whileHover={{scale: 1.03}} src={trip.img}
                                className="w-full h-[400px] object-cover rounded-xl mb-6 duration-1000 cursor-pointer"/>

                    <motion.div variants={stagger} className="grid md:grid-cols-3 gap-6 mb-8">
                        {[
                            {label: "Time", value: trip.time},
                            {label: "Duration", value: trip.duration},
                            {label: "Emergency Contact", value: trip.contact},
                        ].map((item, i) => (
                            <motion.div key={i} variants={fadeUp} whileHover={{scale: 1.05}}
                                        className="bg-[#141419] p-5 rounded-xl duration-1000 cursor-pointer">
                                <p className="text-sm text-gray-500">{item.label}</p>
                                <h3>{item.value}</h3>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.h1 variants={fadeUp} className="text-3xl text-orange-500 mb-4">{trip.title}</motion.h1>
                    <p>Status: {status.toUpperCase()}</p>
                    {status !== "idle" && <p>Time Left: {formatTime(timeLeft)}</p>}

                    {showConnect && !connected && (
                        <motion.div initial={{scale: 0}} animate={{scale: 1}} className="mt-5">
                            <motion.button whileTap={{scale: 0.9}} onClick={handleConnect}
                                           className="px-6 py-3 bg-green-500 text-black rounded-xl">
                                📞 Connect
                            </motion.button>
                        </motion.div>
                    )}

                    <motion.div variants={stagger} className="flex gap-4 mt-6 flex-wrap">
                        {[
                            {
                                label: "Start",
                                disabled: status !== "idle",
                                action: () => {
                                    setStatus("running");
                                    setTimeLeft(getSeconds(trip.duration));
                                    setIsSafe(false);
                                    setConnected(false);
                                    setShowConnect(false);
                                    saveActivity("START");
                                    toast.success("Started");
                                },
                                style: status !== "idle"
                                    ? "bg-gray-600"
                                    : "bg-orange-500 text-black"
                            },
                            {
                                label: "Pause",
                                disabled: status !== "running",
                                action: () => {
                                    setStatus("paused");
                                    saveActivity("PAUSE");
                                    toast.info("Paused");
                                }
                            },
                            {
                                label: "I'm Safe",
                                disabled: !(status === "running" || status === "paused"),
                                action: () => {
                                    setIsSafe(true);
                                    setStatus("completed");
                                    saveActivity("SAFE");
                                },
                                style: (status === "running" || status === "paused")
                                    ? "bg-green-500 text-black"
                                    : "bg-gray-600"
                            },
                            {
                                label: "Reset",
                                disabled: status === "idle",
                                action: () => {
                                    setStatus("idle");
                                    setTimeLeft(0);
                                    setIsSafe(false);
                                    setConnected(false);
                                    setShowConnect(false);
                                    clearTimeout(alertTimerRef.current);
                                    clearTimeout(connectTimerRef.current);
                                    saveActivity("RESET");
                                    toast.warn("Reset");
                                }
                            }
                        ].map((btn, i) => (
                            <motion.button key={i}
                                           variants={fadeUp}
                                           whileHover={{scale: btn.disabled ? 1 : 1.1}}
                                           whileTap={{scale: btn.disabled ? 1 : 0.9}}
                                           disabled={btn.disabled}
                                           onClick={btn.action}
                                           className={`px-5 py-2 rounded-xl cursor-pointer ${btn.style || "border"}`}>
                                {btn.label}
                            </motion.button>
                        ))}
                    </motion.div>
                </div>
            </motion.section>

            <Footer/>
            <ToastContainer position="top-right" autoClose={2000}/>
        </>
    );
}

export default BookDetail;
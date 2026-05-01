import {useParams, useNavigate} from "react-router-dom";
import Header from "../Component/Header.jsx";
import {trips} from "../assets/assets.js";
import Footer from "../Component/Footer.jsx";
import {useState, useEffect, useRef} from "react";
import {ToastContainer, toast} from "react-toastify";
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

    useEffect(() => {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        const user = JSON.parse(localStorage.getItem("currentUser"));

        if (!isLoggedIn || !user) {
            toast.error("Please login first 🔐");
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

            <section className="bg-[#0b0b0f] text-white px-6 py-10">
                <div className="max-w-7xl mx-auto">
                    <img alt={trip.title} src={trip.img} className="w-full h-[400px] object-cover rounded-xl mb-6"/>

                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-[#141419] p-5 rounded-xl cursor-pointer">
                            <p className="text-sm text-gray-500">Time</p>
                            <h3>{trip.time}</h3>
                        </div>

                        <div className="bg-[#141419] p-5 rounded-xl cursor-pointer">
                            <p className="text-sm text-gray-500">Duration</p>
                            <h3>{trip.duration}</h3>
                        </div>

                        <div className="bg-[#141419] p-5 rounded-xl cursor-pointer">
                            <p className="text-sm text-gray-500">Emergency Contact</p>
                            <h3>{trip.contact}</h3>
                        </div>
                    </div>

                    <h1 className="text-3xl text-orange-500 mb-4">{trip.title}</h1>
                    <p>Status: {status.toUpperCase()}</p>{status !== "idle" && <p>Time Left: {formatTime(timeLeft)}</p>}

                    {showConnect && !connected && (
                        <div className="mt-5">
                            <button onClick={handleConnect}
                                    className="px-6 py-3 bg-green-500 text-black rounded-xl">
                                📞 Connect
                            </button>
                        </div>
                    )}

                    <div className="flex gap-4 mt-6 flex-wrap">

                        <button disabled={status !== "idle"}
                                onClick={() => {
                                    setStatus("running");
                                    setTimeLeft(getSeconds(trip.duration));
                                    setIsSafe(false);
                                    setConnected(false);
                                    setShowConnect(false);
                                    saveActivity("START");
                                    toast.success("Started");
                                }} className={`px-5 py-2 rounded-xl 
                                ${status !== "idle"
                            ? "bg-gray-600 cursor-not-allowed"
                            : "bg-orange-500 text-black"}`}>
                            Start
                        </button>

                        <button disabled={status !== "running"}
                                onClick={() => {
                                    setStatus("paused");
                                    saveActivity("PAUSE");
                                    toast.info("Paused");
                                }} className={`px-5 py-2 rounded-xl border
                                 ${status !== "running"
                            ? "border-gray-600 text-gray-500 cursor-not-allowed"
                            : "border-white/20"}`}>
                            Pause
                        </button>

                        <button disabled={!(status === "running" || status === "paused")}
                                onClick={() => {
                                    setIsSafe(true);
                                    setStatus("completed");
                                    saveActivity("SAFE");
                                }} className={`px-5 py-2 rounded-xl
                            ${(status === "running" || status === "paused")
                            ? "bg-green-500 text-black"
                            : "bg-gray-600 cursor-not-allowed"}`}>
                            I'm Safe
                        </button>

                        <button disabled={status === "idle"}
                                onClick={() => {
                                    setStatus("idle");
                                    setTimeLeft(0);
                                    setIsSafe(false);
                                    setConnected(false);
                                    setShowConnect(false);
                                    clearTimeout(alertTimerRef.current);
                                    clearTimeout(connectTimerRef.current);
                                    saveActivity("RESET");
                                    toast.warn("Reset");
                                }} className={`px-5 py-2 rounded-xl border
                                ${status === "idle"
                            ? "border-gray-600 text-gray-500 cursor-not-allowed"
                            : "border-red-500 text-red-400"}`}>
                            Reset
                        </button>

                    </div>
                </div>
            </section>

            <Footer/>
            <ToastContainer position="top-right" autoClose={2000}/>
        </>
    );
}

export default BookDetail;
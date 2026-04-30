import {useParams} from "react-router-dom";
import Header from "../Component/Header.jsx";
import {trips} from "../assets/assets.js";
import Footer from "../Component/Footer.jsx";
import {useState, useEffect} from "react";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function BookDetail() {

    const {id} = useParams();
    const trip = trips.find((t) => t.id === parseInt(id));

    const [status, setStatus] = useState("idle");
    const [timeLeft, setTimeLeft] = useState(0);
    const [alertSent, setAlertSent] = useState(false);
    const [isSafe, setIsSafe] = useState(false);

    const getMinutes = (duration) => {
        if (duration.includes("Hour")) return parseInt(duration) * 60;
        if (duration.includes("Min")) return parseInt(duration);
        return 60;
    };

    const saveActivity = (type) => {
        const data = {
            trip: trip.title,
            contact: trip.contact,
            action: type,
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString(),
        };

        const existing = JSON.parse(localStorage.getItem("activity")) || [];
        existing.push(data);
        localStorage.setItem("activity", JSON.stringify(existing));
    };

    const sendAlert = () => {
        saveActivity("ALERT");

        setAlertSent(true);
        toast.error(`Alert sent to ${trip.contact}`);
    };

    useEffect(() => {
        let timer;

        if (status === "running" && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 60000);
        }

        if (timeLeft === 0 && status === "running" && !isSafe) {
            setStatus("completed");
            sendAlert();
        }

        return () => clearInterval(timer);
    }, [status, timeLeft, isSafe]);

    if (!trip) {
        return <p className="text-white p-10">Trip not found</p>;
    }

    return (
        <>
            <Header/>

            <section className="min-h-screen bg-[#0b0b0f] text-white px-6 py-10">
                <div className="max-w-7xl mx-auto">
                    <img src={trip.img} alt={trip.title} className="w-full h-[500px] object-cover rounded-2xl mb-8"/>
                    <h1 className="text-3xl font-bold text-orange-500 mb-4">{trip.title}</h1>
                    <div className="grid md:grid-cols-3 gap-6 mb-8">

                        <div className="bg-[#141419] p-5 rounded-xl">
                            <p className="text-sm text-gray-500">Time</p>
                            <h3>{trip.time}</h3>
                        </div>

                        <div className="bg-[#141419] p-5 rounded-xl">
                            <p className="text-sm text-gray-500">Duration</p>
                            <h3>{trip.duration}</h3>
                        </div>

                        <div className="bg-[#141419] p-5 rounded-xl">
                            <p className="text-sm text-gray-500">Emergency Contact</p>
                            <h3>{trip.contact}</h3>
                        </div>

                    </div>

                    <div className="mb-6">
                        <p>Status:
                            <span className="text-orange-400 ml-2 font-semibold">
                                {status.toUpperCase()}
                            </span>
                        </p>

                        {status !== "idle" && (
                            <p className="text-gray-400">Time Left: {timeLeft} minutes</p>
                        )}
                    </div>

                    {alertSent && (
                        <div className="bg-red-500/20 border border-red-500 p-4 rounded-xl mb-6">
                            Alert sent to <strong>{trip.contact}</strong>
                        </div>
                    )}

                    {isSafe && (
                        <div className="bg-green-500/20 border border-green-500 p-4 rounded-xl mb-6">
                            You are safe. No alert was sent.
                        </div>
                    )}

                    <div className="flex items-center flex-wrap gap-4">

                        <button onClick={() => {
                            setStatus("running");
                            setTimeLeft(getMinutes(trip.duration));
                            setAlertSent(false);
                            setIsSafe(false);
                            saveActivity("START");
                            toast.success("Check-in Started");
                        }} className="bg-orange-500 text-black px-6 py-3 rounded-xl cursor-pointer">
                            Start Check-in
                        </button>

                        <button onClick={() => {
                            setStatus("paused");
                            saveActivity("PAUSE");
                            toast.info("Check-in Paused");
                        }} className="border border-white/20 px-6 py-3 rounded-xl cursor-pointer">
                            Pause
                        </button>

                        <button onClick={() => {
                            setStatus("completed");
                            setIsSafe(true);
                            setTimeLeft(0);
                            saveActivity("SAFE");
                            toast.success("You're Safe");
                        }} className="bg-green-500 text-black px-6 py-3 rounded-xl cursor-pointer">
                            I'm Safe
                        </button>

                        <button onClick={() => {
                            setStatus("idle");
                            setTimeLeft(0);
                            setAlertSent(false);
                            setIsSafe(false);
                            saveActivity("RESET");
                            toast.warn("Reset Done");
                        }} className="border border-red-500 text-red-400 px-6 py-3 rounded-xl cursor-pointer">
                            Reset
                        </button>
                    </div>
                </div>
            </section>

            <Footer/>
            <ToastContainer position="top-right" autoClose={3000}/>
        </>
    );
}

export default BookDetail;
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const generateId = () => {
        return Date.now().toString();
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (form.password.length < 6) {
            toast.error("Password must be at least 6 characters");
            return;
        }

        const users = JSON.parse(localStorage.getItem("users")) || [];

        const exists = users.find((u) => u.email === form.email);
        if (exists) {
            toast.error("User already exists with this email");
            return;
        }

        const newUser = {
            id: generateId(),
            name: form.name,
            email: form.email,
            password: form.password,
        };

        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));

        toast.success("Signup Successful");

        setTimeout(() => {
            navigate("/Login");
        }, 1500);
    };

    return (
        <section className="min-h-screen flex items-center justify-center text-white overflow-hidden">
            <div
                className="relative w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-[0_0_40px_rgba(0,0,0,0.6)]">
                <h2 className="text-3xl font-semibold text-center mb-6">
                    Create <span className="text-orange-500">Account</span>
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="text-sm text-gray-400">User Name</label>
                        <input type="text" name="name" value={form.name}
                               onChange={handleChange}
                               className="w-full mt-2 px-4 py-3 rounded-xl bg-[#141419] border border-white/10 text-white"
                               required/>
                    </div>

                    <div>
                        <label className="text-sm text-gray-400">Email</label>
                        <input type="email" name="email" value={form.email}
                               onChange={handleChange}
                               className="w-full mt-2 px-4 py-3 rounded-xl bg-[#141419] border border-white/10 text-white"
                               required/>
                    </div>

                    <div>
                        <label className="text-sm text-gray-400">Password</label>
                        <input type="password" name="password" value={form.password}
                               onChange={handleChange}
                               className="w-full mt-2 px-4 py-3 rounded-xl bg-[#141419] border border-white/10 text-white"
                               required/>
                    </div>

                    <button type="submit"
                            className="w-full bg-orange-500 text-black py-3 rounded-xl font-semibold">Sign Up
                    </button>
                </form>

                <p className="text-gray-400 text-sm text-center mt-6">
                    Already have an account?{" "}
                    <span onClick={() => navigate("/Login")}
                          className="text-orange-500 cursor-pointer">Log In
                    </span>
                </p>
            </div>
            <ToastContainer position="top-right" autoClose={5000}/>
        </section>
    );
}

export default Signup;
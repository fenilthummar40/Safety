import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {IconEye, IconEyeOff} from "@tabler/icons-react";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const [show, setShow] = useState(false);
    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find(
            (u) => u.email === form.email && u.password === form.password
        );

        if (!users.length) {
            toast.error("No account found. Please sign up first");
            return;
        }

        if (user) {
            localStorage.setItem("isLoggedIn", true);
            localStorage.setItem("currentUser", JSON.stringify(user));
            toast.success(`Welcome ${user.name}`);
            setTimeout(() => {
                navigate("/");
            }, 1500);
        } else {
            toast.error("Invalid email or password");
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center text-white overflow-hidden">
            <div
                className="relative w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8">

                <h2 className="text-3xl font-semibold text-center mb-6">Welcome <span
                    className="text-orange-500">Back</span>
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="text-sm text-gray-400">Email</label>
                        <input type="email" name="email" value={form.email}
                               onChange={handleChange}
                               className="w-full mt-2 px-4 py-3 rounded-xl bg-[#141419] border border-white/10 text-white"
                               required/>
                    </div>

                    <div className="relative">
                        <label className="text-sm text-gray-400">Password</label>
                        <input type={show ? "text" : "password"} name="password"
                               value={form.password}
                               onChange={handleChange}
                               className="w-full mt-2 px-4 py-3 rounded-xl bg-[#141419] border border-white/10 text-white"
                               required/>

                        <button type="button" onClick={() => setShow(!show)}
                                className="absolute right-3 top-[38px] text-gray-400">
                            {show ? <IconEyeOff size={18}/> : <IconEye size={18}/>}
                        </button>
                    </div>

                    <button type="submit"
                            className="w-full bg-orange-500 text-black py-3 rounded-xl font-semibold">Log In
                    </button>
                </form>

                <p className="text-gray-400 text-sm text-center mt-6">Don’t have an account?{" "}
                    <span onClick={() => navigate("/Signup")}
                          className="text-orange-500 cursor-pointer">Sign Up
                    </span>
                </p>
            </div>
            <ToastContainer position="top-right" autoClose={5000}/>
        </section>
    );
}

export default Login;
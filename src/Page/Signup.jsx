import {useState} from "react";
import {useNavigate} from "react-router-dom";

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

    const handleSubmit = (e) => {
        e.preventDefault();

        if (form.password.length < 6) {
            alert("Password must be at least 6 characters");
            return;
        }

        localStorage.setItem("user", JSON.stringify(form));
        alert("Signup Successful");
        navigate("/Login");
    };

    return (
        <section
            className="min-h-screen flex items-center justify-center bg-[#0b0b0f] text-white relative overflow-hidden">

            <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-orange-500 opacity-10 blur-[100px]"/>
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-yellow-500 opacity-10 blur-[100px]"/>

            <div
                className="relative w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-[0_0_40px_rgba(0,0,0,0.6)]">
                <h2 className="text-3xl font-semibold text-center mb-6">
                    Create <span className="text-orange-500">Account</span>
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="text-sm text-gray-400">User Name</label>
                        <input type="text" name="name" value={form.name}
                               onChange={handleChange} placeholder="Enter your name"
                               className="w-full mt-2 px-4 py-3 rounded-xl bg-[#141419] border border-white/10 text-white placeholder-gray-500 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none"
                               required
                        />
                    </div>

                    <div>
                        <label className="text-sm text-gray-400">Email</label>
                        <input type="email" name="email" value={form.email}
                               onChange={handleChange} placeholder="Enter your email"
                               className="w-full mt-2 px-4 py-3 rounded-xl bg-[#141419] border border-white/10 text-white placeholder-gray-500 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none"
                               required
                        />
                    </div>

                    <div>
                        <label className="text-sm text-gray-400">Password</label>
                        <input type="password" name="password" value={form.password}
                               onChange={handleChange} placeholder="Enter password"
                               className="w-full mt-2 px-4 py-3 rounded-xl bg-[#141419] border border-white/10 text-white placeholder-gray-500 focus:border-orange-500 focus:ring-1 focus:ring-orange-500 outline-none"
                               required
                        />
                    </div>

                    <button type="submit"
                            className="w-full bg-orange-500 text-black py-3 rounded-xl font-semibold hover:bg-orange-600 hover:scale-105 transition shadow-[0_0_20px_rgba(255,165,0,0.3)]">
                        Sign Up
                    </button>

                </form>

                <p className="text-gray-400 text-sm text-center mt-6">
                    Already have an account?{" "}
                    <span onClick={() => navigate("/Login")}
                          className="text-orange-500 cursor-pointer hover:underline">Log In
                    </span>
                </p>

            </div>
        </section>
    );
}

export default Signup;
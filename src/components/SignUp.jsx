import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        if (!username || !email || !password) {
            alert("Please fill in all fields");
            return;
        }
        fetch("https://academics.newtonschool.co/api/v1/user/signup", {
            method: "POST",
            headers: {
                accept: "application/json",
                projectId: "d6jz2wxqn6bw",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: username,
                email: email,
                password: password,
                appType: "bookingportals",
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status === "success") {
                    alert("User Created");
                    navigate("/signin");
                } else {
                    alert(data.message);
                }
            })
            .catch((error) => {
                alert("Error creating user");
            });
    };

    return (
        <div className="flex flex-col justify-center items-center h-auto m-20">
            <div className="relative mt-7 text-neutral-700 text-3xl text-left text-black w-full text-center">
                Create an account
            </div>
            <div>
                <form
                    className="flex relative flex-col px-2 pt-2.5 pb-8 max-w-full bg-black bg-opacity-0 w-[412px] h-[262px]"
                    onSubmit={handleSignUp}
                >
                    <div className="mt-2">
                        <label htmlFor="nameInput" className="block text-black-600 text-sm">
                            Your name
                        </label>
                        <input
                            id="nameInput"
                            type="text"
                            placeholder="Enter your name"
                            className="block w-[397px] h-[46px] py-2.5 px-3 border border-solid border-blue-500 bg-white text-black"
                            aria-label="Your name"
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mt-2">
                        <label htmlFor="emailInput" className="block text-black-600 text-sm">
                            Email address
                        </label>
                        <input
                            id="emailInput"
                            type="email"
                            placeholder="Enter your email address"
                            className="block w-[397px] h-[46px] py-2.5 px-3 border border-solid border-blue-500 bg-white text-black"
                            aria-label="emailInput"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mt-2">
                        <label htmlFor="passwordInput" className="block text-black-600 text-sm">
                            Password
                        </label>
                        <input
                            id="passwordInput"
                            type="password"
                            placeholder="Enter your password"
                            className="block w-[397px] h-[46px] py-2.5 px-3 border border-solid border-blue-500 bg-white text-black"
                            aria-label="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="mt-5 block w-full items-center px-16 pt-3.5 pb-2 bg-[#006CE4] text-lg text-blue-100 max-md:px-5"
                    >
                        Register
                    </button>
                    <div className="flex gap-5 self-center mt-1 text-xs">
                        <div className="flex-auto text-neutral-600">
                            Already have an account?
                        </div>
                        <Link to="/signin" className="text-blue-400">
                            Sign In
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
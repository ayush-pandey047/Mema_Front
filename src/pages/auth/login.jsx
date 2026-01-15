import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const handleSignup = () => {
        navigate('/signup'); 
    };

    return (
        <>
        <h3>Welcome to MeMo</h3>
            <form action="Login" method="post">
                <div>
                    <h2>Login</h2>
                    <hr/>
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="Enter Email" name="email" required/>
                    <br/><br/>
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter Password" name="password" required/>
                    <br/><br/>
                    <label>
                        <input type="checkbox" defaultChecked name="Remember"/>Remember_me
                    </label>
                    <br/>
                    <button type="submit">Login</button>
                    <button onClick={handleSignup}>Sign Up</button>
                </div>
            </form>

            
        </>
    );
}

export default Login;

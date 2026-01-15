import React from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
    const navigate = useNavigate();

    return (
        <div id="id01" className="modal">
            <form className="modal-content">
                <h1>Sign Up</h1>
                <hr/>
                <div>
                    <label htmlFor="Name">Name</label>
                    <input type="text" placeholder="Enter Name" name="Name" required/>
                    <br/>
                    <label htmlFor="Email">Email</label>
                    <input type="email" placeholder="Enter Email" name="Email" required/>
                    <br/>
                    <label htmlFor="Password">Password</label>
                    <input type="password" placeholder="Enter Password" name="Password" required/>
                    <br/>
                    <label htmlFor="Repate password">Repate Password</label>
                    <input type="password" placeholder="Repate Password" name="Repate Password" required/>
                    <br/>
                    <label>
                        <input type="checkbox" defaultChecked name="remember" style={{ marginBottom: "15px" }}/> Remember Me
                    </label>
                </div>
                <div>
                    <button type="button" onClick={() => navigate("/")} className="cancelbtn">Cancel</button>
                    <button type="submit" className="signup">Sign Up</button>
                </div>
            </form>
        </div>
    );
}

export default Signup;
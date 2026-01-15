// import React from "react"
// import {useNavigate} from "react-router-dom";

// function Signup(){

//     const navigate = useNavigate();

//     const handelcancel = () =>{
//         navigate("/")
//     }

//         return (
// <>
// <div id="id01" className="modal">
//     <form className="modal-content" action="/login">
//         <h1>Sign Up</h1>
//         <p>Please fill in this form to create an account</p>
//         <hr/>
//         <label htmlFor="Email">Email</label>
//         <input type="email" placeholder="Enter Email" name="Email" required/>

//         <label htmlFor="Password">Password</label>
//         <input type="password" placeholder="Enter Password" name="Password" required/>

//         <label htmlFor="Repate password">Repate Password</label>
//         <input type="password" placeholder="Repate Password" name="Repate Password" required/>

//         <label>
//             <input type="checkbox" defaultChecked name="remember" style={{marginBottom:" 15px"}}/> Remember Me
//         </label>

//         <div>
          
//             <button type="button" onClick={handelcancel} className="cancelbtn">Cancel</button>
//             <button type="submit" className="signup">Sign Up</button>
//         </div>
//     </form>

// </div>
// </>
// )
// };

// export default Signup;


import React from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
    const navigate = useNavigate();

    return (
        <div id="id01" className="modal">
            <form className="modal-content">
                <h1>Sign Up</h1>
                <hr/>
                <label htmlFor="Email">Email</label>
                <input type="email" placeholder="Enter Email" name="Email" required/>
            
                <label htmlFor="Password">Password</label>
                <input type="password" placeholder="Enter Password" name="Password" required/>

                <label htmlFor="Repate password">Repate Password</label>
                <input type="password" placeholder="Repate Password" name="Repate Password" required/>

                <label>
                   <input type="checkbox" defaultChecked name="remember" style={{ marginBottom: "15px" }}/> Remember Me
                </label>

                <div>
                    <button type="button" onClick={() => navigate("/")} className="cancelbtn">Cancel</button>
                    <button type="submit" className="signup">Sign Up</button>
                </div>
            </form>
        </div>
    );
}

export default Signup;
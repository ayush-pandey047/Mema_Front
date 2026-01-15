import React from "react";
import Nav  from "./facnav";

const Dash = () => {

    const User_Name = "name of user"

    return (
    <>
    <Nav/>
      <div>
       <h6>Hi {User_Name}, Welcome to MeMo </h6>
       <p>Here you can see the Progress of Students and Conect with their Mentors</p>

       <h5>Total Mentors: "{25}"</h5>
       <h5>Total Mentees: "{420}"</h5>
      </div>

    </>
)
}
export default Dash;
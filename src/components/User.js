import { useEffect, useState } from "react";
const User =()=>{
    const[count]=useState(0);
    const[count1]=useState(1);


   
    return(
        <div className="user-card">
           
            <h2>Rahul Biya</h2>
            <h3>location : Mumbai</h3>
            <h3>email : rahulbiya26@gmail.com</h3>
            <h3>instagram: @biyarahul</h3>
        </div>
    )
}
export default User;

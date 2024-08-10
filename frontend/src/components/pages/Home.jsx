import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = ()=>{
    const nav = useNavigate();
    useEffect(() => { 
        if(!localStorage.getItem("user")){
          nav("/login")
        }
      }, [nav]);
    
    return (
        <>
            <h1 className="text-2xl">Home Page</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quos fuga dolor, rem reprehenderit, quam ut architecto atque dicta deserunt cum aperiam sequi! Aut tempora velit quos tenetur asperiores voluptatibus.</p>
        </>
    );
}

export default Home;
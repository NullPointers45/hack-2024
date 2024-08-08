import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GiArchiveResearch } from "react-icons/gi";

const Chatbot = () => {
    const nav = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("userToken")) {
            nav("/login")
        }
    }, [nav]);
    return (
        <>
          <div className="mx-56 flex items-center justify-center relative">
            <input
              className="p-3 rounded-2xl bg-transparent border-2 w-full"
              type="text"
              placeholder="Enter here"
            />
          </div>
    
          <div className="flex flex-col p-3 justify-center items-center my-5 text-9xl opacity-35">
            <GiArchiveResearch />
            <label className="pt-5 text-6xl">Hello Rutul</label>
            <label className="pt-2 text-4xl">Search content will appear here...</label>
          </div>
        </>
      );
}

export default Chatbot;
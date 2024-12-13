import React, { useState, useEffect } from "react";
import Navigation from "./components/Navigation/Navigation";
import { Outlet } from "react-router-dom";
import { FaUser } from "react-icons/fa";

function Layout() {
  const [input, setInput] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setName(storedName);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(input);
    localStorage.setItem("name", input);
    setInput("");
  };

  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZone: "Asia/Kolkata",
  };

  const formattedDate = currentDate.toLocaleString("en-IN", options);

  return (
    <>
    <div className="box-sizing: border-box overflow-hidden">
      {name === "" ? (
        <div className="flex items-center justify-center h-screen p-4">
          <div className="flex flex-col items-center w-full max-w-sm">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Enter your name
            </h2>
            <form onSubmit={handleSubmit} className="w-full">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter your name"
                className="p-2 border border-gray-300 rounded-md mb-4 w-full"
                required
              />
              <button
                type="submit"
                className="bg-indigo-500 text-white px-4 py-2 rounded-md w-full"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      ) : (
        <>
          <div className="hidden sm:flex fixed top-4 right-4 w-[70%] sm:w-[25%] md:w-[20%] lg:w-[25%]  items-center gap-4 sm:gap-6 bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-full shadow-md">
  <div className="avatar flex-shrink-0">
    <FaUser size={28} className="text-indigo-500 sm:text-[35px]" />
  </div>
  <div className="flex flex-col">
    <span className="text-indigo-400 text-sm sm:text-lg font-semibold truncate max-w-[100px] sm:max-w-[200px]">
      {name}
    </span>
    <span className="text-indigo-300 text-xs sm:text-sm text-center">
      {formattedDate}
    </span>
  </div>
</div>


          
          <Navigation />
          <Outlet />
        </>
      )}
      </div>
    </>
  );
}

export default Layout;

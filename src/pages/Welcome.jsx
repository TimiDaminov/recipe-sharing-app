import React from 'react'
import videoBg from "../assets/4122746-uhd_3840_2160_24fps.mp4"
const Welcome = () => {
  return (
    <div className="welcome__screen flex items-center justify-center min-h-screen bg-gray-100">
      <div className="overlay"></div>
      <video src={videoBg} autoPlay loop muted />
      
      <div className="flex flex-col items-center justify-center text-center ml-4 content">
        <h1 className="text-6xl">Cook Book.</h1>
        <h3 className="text-4xl mb-7">Discuss recipes, share tips, and find like-minded people.</h3>
        <a className="text-2xl bg-[#FFC470] text-center mb-7" style={{ border: "1px #ffc470 solid", borderRadius: "60px", padding: "11px 60px" }} href="/feed">
          Explore
        </a>
        </div>
    </div>
  )
}

export default Welcome
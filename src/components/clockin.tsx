import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi"; 
import { AiOutlineClockCircle } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import "./clockin-tailwind.css";


const clockin: React.FC = () => {
  return (
    <div className="app-container">
      {/* Header */}
      <header className="top-bar">
        <div className="logo">
          <div className="logo-icon"><FaPlay /></div>
          <div>
            <h1>PlayZone Manager</h1>
            <span>Staff Time Clock</span>
          </div>
        </div>

        <div className="time-box">
          <div className="time">08:51:57 AM</div>
          <div className="date">Friday, Jan 9</div>
        </div>
      </header>

      {/* Main Card */}
      <main className="content">
        {/* User Card */}
        <div className="card">
          <div className="user-info">
            <div className="avatar">JH</div>
            <div>
              <h3>Kevin</h3>
              <p>ID: Kevin</p>
            </div>
          </div>
        </div>

        {/* Shift Card */}
        <div className="card">
          <div className="shift-header">
            <AiOutlineClockCircle /> <span>No Active Shift</span>
          </div>
          <div className="hours-box">
            <span>Total Hours Today</span>
            <strong>0h 0m</strong>
          </div>
        </div>

        {/* Clock In Button */}
        <button className="clock-btn">
          <FiLogIn /> <Link to="/ClockOut">Clock In 
        </Link></button>
        <p className="hint">
          Hold for 2 seconds for manager override
        </p>

        {/* Dashboard Button */}
        <Link to="/dashboard">
          <button className="dashboard-btn">
            Continue to Dashboard <FiArrowRight />
          </button>
        </Link>
      </main>
    </div>
  );
};

export default clockin;

import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi"; 
import { AiOutlineClockCircle } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";

export default function ClockOut() {
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
             <div className="time">08:52:51 AM</div>
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
            
      <div className="card-out">
      {/* Header */}
      <div className="shift-header-out">
       
        <div className="shift-title">
          <div className="flex items-center">
            <span className="text-orange-400"><AiOutlineClockCircle size={20} /></span>
            &nbsp;<span className="text-white">Active Shift</span>
          </div>
          <span className="shift-status flex items-center gap-2">
  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
  Clocked In
</span>
        </div>
      </div>

      {/* Content */}
      <div className="shift-content">
        <div className="shift-box">
          <span className="label">Clock In Time</span>
          <strong className="value">08:52:48 AM</strong>
        </div>

        <div className="shift-box">
          <span className="label">Duration</span>
          <strong className="value duration">0h 0m</strong>
        </div>
      </div>
    </div>

  
   
           {/* Clock out Button */}
           <button className="clock-btn-out">
             <FiLogIn /> <Link to="/clockout">Clock Out</Link>
           </button>
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
   
   

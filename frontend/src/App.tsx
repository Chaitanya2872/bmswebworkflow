
//  import React, { useState, useEffect } from 'react';
//  import './App.css';
// import PricingPlans from './components/PricingPlans';
// import UserProfile from './components/UserProfile';
// import SignInPage from './components/SignInPage';

// import HomeIcon from '@mui/icons-material/Home';
// import StarIcon from '@mui/icons-material/Star';
// import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
// import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

// const App: React.FC = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(() => {
//     return !!localStorage.getItem("authToken");
//   });

//   useEffect(() => {
//     const params = new URLSearchParams(window.location.search);
//     const token = params.get("token");
//     if (token) {
//       localStorage.setItem("authToken", token);
//       setIsLoggedIn(true);
//       window.history.replaceState({}, document.title, "/pricing");
//     }
//   }, []);

//   return (
//     <div className="dashboard">
//       {!isLoggedIn ? (
//         <SignInPage onLogin={() => setIsLoggedIn(true)} />
//       ) : (
//         <>
//           <div className="sidebar">
//             <div className="profile-header">
//               <h2 className="profile-heading">Profile</h2>
//               <UserProfile />
//               <img
//                 src="https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg?semt=ais_items_boosted&w=740"
//                 alt="Avatar"
//                 className="avatar"
//               />
//             </div>

//            <nav className="menu">
//   <ul>
//     <li><HomeIcon className="icon" style={{ color: '#4a90e2', fontSize: 40 }} /> Home</li>
//     <li><StarIcon className="icon" style={{ color: '#f5a623', fontSize: 40 }} /> Features</li>
//     <li><HelpOutlineIcon className="icon" style={{ color: '#7b61ff', fontSize: 40 }} /> Help & Support</li>
//     <li><AttachMoneyIcon className="icon" style={{ color: '#28a745', fontSize: 40 }} /> Pricing</li>
//   </ul>
// </nav>

//           </div>

//           <div className="main-content">
//             <h1 className="pricing-title">Pricing</h1>
//             <PricingPlans />
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default App;
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import './App.css';

// // import UserProfile from './components/UserProfile';
// import SignInPage from './components/SignInPage';
// import Dashboard from './components/Dashboard';


// // import HomeIcon from '@mui/icons-material/Home';
// // import StarIcon from '@mui/icons-material/Star';
// // import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
// // import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

// const App: React.FC = () => {
//    const [isLoggedIn, setIsLoggedIn] = useState(() => {
//    return !!localStorage.getItem("authToken");
//  });

//   // useEffect(() => {
//   //   const params = new URLSearchParams(window.location.search);
//   //   const token = params.get("token");
//   //   if (token) {
//   //     localStorage.setItem("authToken", token);
//   //     setIsLoggedIn(true);
//   //     window.history.replaceState({}, document.title, "/pricing");
//   //   }
//   // }, []);

//   // if (!isLoggedIn) {
//   //   return <SignInPage onLogin={() => setIsLoggedIn(true)} />;
//   // }

//   return (
   
//       // <div className="dashboard">
//       //   <div className="sidebar">
//       //     <div className="profile-header">
//       //       <h2 className="profile-heading">Profile</h2>
//       //       <UserProfile />
//       //       <img
//       //         src="https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg?semt=ais_items_boosted&w=740"
//       //         alt="Avatar"
//       //         className="avatar"
//       //       />
//       //     </div>

          
//       //   </div>

//         <div className="main-content">
//           <Router>
      

//       <Routes>
//          <Route path="/" element={<SignInPage onLogin={() => setIsLoggedIn(true)} />} /> 
//         <Route path="/dashboard" element={<Dashboard/>} />
        
//       </Routes>
//       </Router>
//       </div>
      
    
//       // </div>

   
//   );
// };

// export default App;
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import './App.css';

// import SignInPage from './components/SignInPage';
// import Dashboard from './components/Dashboard';
// import AssetDashboard from './components/AssetDashboard';

// const App: React.FC = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(() => {
//     return !!localStorage.getItem('authToken'); // check if token exists
//   });>
//       <Router>
//         <Routes>
//           {/* Sign-in route */}
//           <Route path="/" element={<SignInPage onLogin={() => setIsLoggedIn(true)} />} />

//           {/* Protected dashboard route */}
//           <Route
//             path="/dashboard"
//             element={
//               isLoggedIn ? (
//                 <Dashboard />
//               ) : (
//                 <Navigate to="/" replace />
//               )
//             }
//           />
//         </Routes>
//       </Router>
//     </div>
//   );
// };

// export default App;
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import './App.css';

// import SignInPage from './components/SignInPage';
// import Dashboard from './components/Dashboard';
// import AssetDashboard from './components/AssetDashboard';

// const App: React.FC = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(() => {
//     return !!localStorage.getItem('authToken');
//   });

//   return (
//     <div className="main-content">
//       <Router>
//         <Routes>
//           {/* Sign-in route */}
//           <Route
//             path="/"
//             element={<SignInPage onLogin={() => setIsLoggedIn(true)} />}
//           />

//           {/* Protected dashboard route */}
//           <Route
//             path="/dashboard"
//             element={
//               isLoggedIn ? (
//                 <Dashboard />
//               ) : (
//                 <Navigate to="/" replace />
//               )
//             }
//           />

//           {/* Protected AssetDashboard route */}
//           <Route
//             path="/assets"
//             element={
//               isLoggedIn ? (
//                 <AssetDashboard />
//               ) : (
//                 <Navigate to="/" replace />
//               )
//             }
//           />
//         </Routes>
//       </Router>
//     </div>
//   );
// };

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import AssetDashboard from './components/AssetDashboard';
import './App.css';

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<AssetDashboard />} />
    </Routes>
  </Router>
);

export default App;


//   return (
//     <div className="main-content"

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import {
//   LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid
// } from "recharts";

// // ✅ Using your actual API Gateway Invoke URL
// const API_URL = "https://nb3zp1cpwl.execute-api.ap-south-1.amazonaws.com/data?deviceId=sensor001";

// function App() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios.get(API_URL)
//       .then((res) => {
//         // Sort data by timestamp if available
//         const sorted = res.data.sort((a, b) => a.timestamp - b.timestamp);
//         setData(sorted);
//       })
//       .catch((err) => {
//         console.error("Error fetching data:", err);
//       });
//   }, []);

//   return (
//     <div className="App" style={{ textAlign: "center", padding: "20px" }}>
//       <h2>📊 IoT Temperature Graph</h2>
//       <LineChart width={800} height={400} data={data}>
//         <CartesianGrid stroke="#ccc" />
//         <XAxis dataKey="timestamp" />
//         <YAxis domain={['auto', 'auto']} />
//         <Tooltip />
//         <Line type="monotone" dataKey="temperature" stroke="#ff7300" />
//       </LineChart>
//     </div>
//   );
// }

// export default App;
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import {
//   LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid
// } from "recharts";

// // ✅ Define the structure of one data point
// type SensorData = {
//   timestamp: number;
//   temperature: number;
// };

// // ✅ API Endpoint
// const API_URL = "https://nb3zp1cpwl.execute-api.ap-south-1.amazonaws.com/data?deviceId=sensor001";

// function App() {
//   const [data, setData] = useState<SensorData[]>([]); // ✅ strong type

//   useEffect(() => {
//     axios.get<SensorData[]>(API_URL)
//       .then((res) => {
//         const sorted = res.data.sort((a, b) => a.timestamp - b.timestamp);
//         setData(sorted);
//       })
//       .catch((err) => {
//         console.error("Error fetching data:", err);
//       });
//   }, []);

//   return (
//     <div className="App" style={{ textAlign: "center", padding: "20px" }}>
//       <h2>📊 IoT Temperature Graph</h2>
//       <LineChart width={800} height={400} data={data}>
//         <CartesianGrid stroke="#ccc" />
//         <XAxis
//           dataKey="timestamp"
//           tickFormatter={(tick) => new Date(tick).toLocaleTimeString()} // optional formatting
//         />
//         <YAxis domain={['auto', 'auto']} />
//         <Tooltip />
//         <Line type="monotone" dataKey="temperature" stroke="#ff7300" />
//       </LineChart>
//     </div>
//   );
// }

// export default App;


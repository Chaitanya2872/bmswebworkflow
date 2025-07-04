
// import React, { useState, useEffect } from 'react';
// import './App.css';
// import PricingPlans from './components/PricingPlans';
// import UserProfile from './components/UserProfile';
// import SignInPage from './components/SignInPage';

// const App: React.FC = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(() => {
//     // Check localStorage or cookie for auth token
//     return !!localStorage.getItem("authToken");
//   });

//   // Listen for token in URL (after Google OAuth)
//   useEffect(() => {
//     const params = new URLSearchParams(window.location.search);
//     const token = params.get("token");
//     if (token) {
//       localStorage.setItem("authToken", token);
//       setIsLoggedIn(true);
//       // Optionally, remove token from URL
//       window.history.replaceState({}, document.title, "/pricing");
//     }
//   }, []);

//   return (
//     <div className="dashboard">
//       {!isLoggedIn ? (
//         // Show SignIn page first
//         <SignInPage onLogin={() => setIsLoggedIn(true)} />
//       ) : (
//         // Show Dashboard after login
//         <>
//           {/* Sidebar */}
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

//             <nav className="menu">
//               <ul>
//                 <li>🏠 Home</li>
//                 <li>✨ Features</li>
//                 <li>❓ Help & Support</li>
//               </ul>
//             </nav>
//           </div>

//           {/* Main Content */}
//           <div className="main-content">
//             <h1 className="pricing-title">🐦 Pricing</h1>
//             <PricingPlans />
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default App;
import React, { useState, useEffect } from 'react';
import './App.css';
import PricingPlans from './components/PricingPlans';
import UserProfile from './components/UserProfile';
import SignInPage from './components/SignInPage';

import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return !!localStorage.getItem("authToken");
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    if (token) {
      localStorage.setItem("authToken", token);
      setIsLoggedIn(true);
      window.history.replaceState({}, document.title, "/pricing");
    }
  }, []);

  return (
    <div className="dashboard">
      {!isLoggedIn ? (
        <SignInPage onLogin={() => setIsLoggedIn(true)} />
      ) : (
        <>
          <div className="sidebar">
            <div className="profile-header">
              <h2 className="profile-heading">Profile</h2>
              <UserProfile />
              <img
                src="https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg?semt=ais_items_boosted&w=740"
                alt="Avatar"
                className="avatar"
              />
            </div>

           <nav className="menu">
  <ul>
    <li><HomeIcon className="icon" style={{ color: '#4a90e2', fontSize: 40 }} /> Home</li>
    <li><StarIcon className="icon" style={{ color: '#f5a623', fontSize: 40 }} /> Features</li>
    <li><HelpOutlineIcon className="icon" style={{ color: '#7b61ff', fontSize: 40 }} /> Help & Support</li>
    <li><AttachMoneyIcon className="icon" style={{ color: '#28a745', fontSize: 40 }} /> Pricing</li>
  </ul>
</nav>

          </div>

          <div className="main-content">
            <h1 className="pricing-title">Pricing</h1>
            <PricingPlans />
          </div>
        </>
      )}
    </div>
  );
};

export default App;

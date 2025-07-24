// import React from 'react';
// import PricingPlans from './PricingPlans';
// import UserProfile from './UserProfile';
// import '../App.css';

// import HomeIcon from '@mui/icons-material/Home';
// import StarIcon from '@mui/icons-material/Star';
// import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
// import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

// const Dashboard: React.FC = () => {
//   return (
//      <div className="dashboard">
//        <div className="sidebar">
//           <div className="profile-header">
//             <h2 className="profile-heading">Profile</h2>
//             <img
//               src="https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg?semt=ais_items_boosted&w=740"
//               alt="Avatar"
//               className="avatar"
//             />
//             </div>
//             <div style={{marginTop:"-120px"}}> <UserProfile/></div>
                                 

          


//           <nav className="menu">
//             <ul>
//               <li><HomeIcon className="icon" style={{ color: '#4a90e2', fontSize: 40 }} /> Home</li>
//               <li><StarIcon className="icon" style={{ color: '#f5a623', fontSize: 40 }} /> Features</li>
//               <li><HelpOutlineIcon className="icon" style={{ color: '#7b61ff', fontSize: 40 }} /> Help & Support</li>
//               <li><AttachMoneyIcon className="icon" style={{ color: '#28a745', fontSize: 40 }} /> Pricing</li>
//             </ul>
//           </nav>
//         </div>

//     <div className="dashboard-container">
//       {/* <h1 className="dashboard-heading">Dashboard</h1> */}
      

//       <div className="dashboard-sections">
//         <div className="dashboard-user">
//           {/* <UserProfile /> */}
//         </div>

//         <div className="dashboard-pricing">
//           <PricingPlans />
//         </div>
//       </div>
//     </div>
//     </div>
    
//   );
// };

// export default Dashboard;
import React from 'react';
import PricingPlans from './PricingPlans';
import SidebarLayout from './SidebarLayout';

const Dashboard: React.FC = () => {
  return (
    <SidebarLayout>
      <PricingPlans />
    </SidebarLayout>
  );
};

export default Dashboard;

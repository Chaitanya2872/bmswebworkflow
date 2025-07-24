// src/components/SidebarLayout.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import UserProfile from './UserProfile';

import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

import '../App.css';

interface Props {
  children: React.ReactNode;
}

const SidebarLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="profile-header">
          <h2 className="profile-heading">Profile</h2>
          <img
            src="https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg?semt=ais_items_boosted&w=740"
            alt="Avatar"
            className="avatar"
          />
        </div>

        <div style={{ marginTop: '-120px' }}>
          <UserProfile />
        </div>

        <nav className="menu">
          <ul>
            <li>
              <Link to="/dashboard" className="flex items-center gap-2 no-underline text-black">
                <HomeIcon style={{ color: '#4a90e2', fontSize: 40 }} />
                Home
              </Link>
            </li>
            <li>
              <Link to="/assets" className="flex items-center gap-2 no-underline text-black">
                <StarIcon style={{ color: '#f5a623', fontSize: 40 }} />
                Assets
              </Link>
            </li>
            <li>
              <Link to="#" className="flex items-center gap-2 no-underline text-black">
                <HelpOutlineIcon style={{ color: '#7b61ff', fontSize: 40 }} />
                Help & Support
              </Link>
            </li>
            <li>
              <Link to="#" className="flex items-center gap-2 no-underline text-black">
                <AttachMoneyIcon style={{ color: '#28a745', fontSize: 40 }} />
                Pricing
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="dashboard-container p-6">{children}</div>
    </div>
  );
};

export default SidebarLayout;

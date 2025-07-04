import React, { useEffect, useState } from 'react';
import '../App.css';

type User = {
  id: number;
  name: string;
  email: string;
 
};

const UserProfile: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/api/users/10')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch user');
        }
        return res.json();
        
      })
      .then((data) => {
        setUser(data);
        
        
      })
      .catch((err) => {
        setError(err.message);
    
      });
  }, []);

  
  if (error) return <p>Error: {error}</p>;
  // console.log(user);
  

  if (!user) return <p>Loading...</p>;

  return (
    <div className="parent-container">
      <div className="user-profile">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
    </div>
  );
};

export default UserProfile;

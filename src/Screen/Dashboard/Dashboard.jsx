import React, { useState, useEffect } from 'react';
import './DashboardStyle.css';

const Dashboard = () => {
  const [fetchData, setFetchData] = useState([]);
  const [heartStatus, setHeartStatus] = useState({});

  // heart icon chnage code hear.....
  const handleHeart = (photoId) => {
    setHeartStatus((prevStatus) => ({
      ...prevStatus,
      [photoId]: !prevStatus[photoId],
    }));
  };

  // Api bind Hear.....
  const fetchAll_Data = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos', {
        method: 'GET',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const initialHeartStatus = {};
      data.forEach((photo) => {
        initialHeartStatus[photo.id] = false;
      });

      setFetchData(data);
      setHeartStatus(initialHeartStatus);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchAll_Data();
  }, []);

  return (
    <>
      <div className='bind_menu_data'>
        home
        {fetchData.map((photo) => (
          <div key={photo.id}>
            <img src={photo.url} alt={photo.title} />
            <p>{photo.title}</p>
            <div onClick={() => handleHeart(photo.id)}>
              {heartStatus[photo.id] ? (
                <i className='fa-solid fa-heart red-heart'></i>
              ) : (
                <i className='fa-regular fa-heart'></i>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Dashboard;

import React from 'react';
import Navbar from './Navbar';
const VoterID = () => {
  const voterCardData = JSON.parse(localStorage.getItem('voterCardData'));

  return (
    <div style={{width:'390px',height:'335px', marginLeft:'600px', marginTop:'110px', paddingTop:'0px'}}>
      <h2>Voter ID</h2>
      <p>Name: {voterCardData.name}</p>
      <p>Father's Name: {voterCardData.fatherName}</p>
      <p>Birth Year: {voterCardData.birthYear}</p>
      <p>Phone Number: {voterCardData.phoneNumber}</p>
      <p>State: {voterCardData.state}</p>
      <p>Village: {voterCardData.village}</p>
      <p>Tehasli: {voterCardData.tehasli}</p>
      <p>District: {voterCardData.district}</p>
      <p>Pincode: {voterCardData.pincode}</p>
      <div style={{marginLeft:'-600px',marginTop:'-568px'}}>
       <Navbar />
    </div>
    </div>
    
  );
};

export default VoterID;













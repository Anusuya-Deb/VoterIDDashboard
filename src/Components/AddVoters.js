
import React, { useState } from 'react';
import Navbar from './Navbar';

const AddVoters = () => {
  const [formData, setFormData] = useState({
    name: '',
    fatherName: '',
    birthYear: '',
    phoneNumber: '',
    state: '',
    village: '',
    tehasli: '',
    district: '',
    pincode: '',
    photo: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      photo: file,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const voterCardData = {
      name: formData.name,
      fatherName: formData.fatherName,
      birthYear: formData.birthYear,
      phoneNumber: formData.phoneNumber,
      state: formData.state,
      village: formData.village,
      tehasli: formData.tehasli,
      district: formData.district,
      pincode: formData.pincode,
      photo: formData.photo,
    };
    localStorage.setItem('voterCardData', JSON.stringify(voterCardData));
    window.location.href = '/VoterID'; 
  };

  return (
    <div style={{width:'390px',height:'335px', marginLeft:'589px', marginTop:'170px', paddingTop:'0px'}}>
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Father Name:
        <input
          type="text"
          name="fatherName"
          value={formData.fatherName}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Birth Year:
        <input
          type="text"
          name="birthYear"
          value={formData.birthYear}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Phone Number:
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        State:
        <select name="state" value={formData.state} onChange={handleInputChange}>
          <option value="">Select State</option>
          <option value="Up">Up</option>
          <option value="Rajasthan">Rajasthan</option>
          <option value="Punjab">Punjab</option>
          <option value="Haryana">Haryana</option>
        </select>
      </label>
      <br />
      <label>
        Village:
        <select name="village" value={formData.village} onChange={handleInputChange}>
          <option value="">Select Village</option>
          <option value="Silari">Silari</option>
          <option value="Boyal">Boyal</option>
          <option value="Jhak">Jhak</option>
          <option value="Tilawasni">Tilawasni</option>
        </select>
      </label>
      <br />
      <label>
        Tehasli:
        <select name="tehasli" value={formData.tehasli} onChange={handleInputChange}>
          <option value="">Select Tehasli</option>
          <option value="Piparcity">Piparcity</option>
          <option value="Jodhpur">Jodhpur</option>
          <option value="Osia">Osia</option>
          <option value="Bhopalgad">Bhopalgad</option>
        </select>
      </label>
      <br />
      <label>
        District:
        <select name="district" value={formData.district} onChange={handleInputChange}>
          <option value="">Select District</option>
          <option value="Jodhpur South">Jodhpur South</option>
          <option value="Jodhpur North">Jodhpur North</option>
          <option value="Pali">Pali</option>
          <option value="Falodi">Falodi</option>
        </select>
      </label>
      <br />
      <label>
        Pincode:
        <input
          type="text"
          name="pincode"
          value={formData.pincode}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Photo:
        <input type="file" accept="image/*" onChange={handlePhotoUpload} />
      </label>
      <br />
      <button type="submit">Generate Voter Card</button>
    </form>
    <div style={{marginLeft:'-590px',marginTop:'-502px'}}>
       <Navbar />
    </div>
    </div>
   
  );
}

export default AddVoters;























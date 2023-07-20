import React from 'react'

const DataCard = ({ image_url, id, name, live_status, live_status_text, permalink, experience, degree, speciality, gender, specialist_doctor }) => {
    return (
        <div style={{ border: '1px dashed black', padding: "20px", margin: "20px", justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column",boxSizing:"border-box" }}>
            <p>Live Status: {live_status ? 'online' : 'offline'}</p>
            <p>Avalable: {live_status_text}</p>
            <img src={image_url} alt={name} />
            <p>Name: {name}</p>
            <h5>Experiance: {experience} Year</h5>
            <h3>Qualification: {degree}</h3>
            <h2>Speciality: {speciality}</h2>
            <p>Link: {permalink}</p>


            <p></p>
        </div>
    )
}

export default DataCard

/*
      "image_url": "https://doctor.myupchar.com/18437/test1843720181129-1175-15cybye.jpg",
      "id": 18437,
      "name": "Dr. Vikrant Mittal",
      "live_status": true,
      "live_status_text": "Available",
      "permalink": "https://www.myupchar.com/doctors/rupnagar/chandigarh-sector-59-s-o/ent/dr-vikrant-mittal-18437",
      "experience": 9,
      "degree": "MBBS,MS",
      "speciality": "Infectious Disease",
      "gender": "male",
      "specialist_doctor": true
*/
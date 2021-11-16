import axios from 'axios';
import React, { useState } from "react";
const UploadAndDisplayImage = ({user, email}) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleUploader = async () => {
    let data = {
        "user":user,
        "email": email,
        "img": selectedImage
    }
    await axios.post('/profile/', data)
        .then((result) => {
            console.log(`http response result: ${result}`);
        })
        .catch((error) => {
            console.error(error);
        });
  }
  return (
    
    <div>
      {selectedImage && (
        <div>
        <img alt=" " width={"250px"} src={selectedImage} />

        <br />
        <button onClick={()=>handleUploader()}>Upload</button>
        </div>
      )}
      <br />
      <br /> 
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(URL.createObjectURL(event.target.files[0]));
        }}
      />
    </div>
  );
};

export default UploadAndDisplayImage;

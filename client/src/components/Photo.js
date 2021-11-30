import React, {useEffect, useState} from "react";
import Axios from 'axios';
import {Image} from 'cloudinary-react'



function Photo({user}){
const [imageSelected, setImageSelected] = useState("");
const [publicId, setPublicId] = useState("");


useEffect(() => {
    Axios.get(`/profile/image/get?user=${user}`)
    .then((res) => {
        console.log(res.data.imageUrl);
        setPublicId(res.data.imageUrl)
    })
    .catch(err => {
        console.log(err)
    });
},[])


const updateDB = (url) => {
    const entry = {
        user: user,
        imageURL: url
    }
    Axios.post("/profile/image/upload", entry)
    .then((res) => {
        console.log('post',res);
    })
    .catch(err => {
        console.log(err)
    });
}

const uploadImage = async () => {
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "neverlate");

    await Axios.post("https://api.cloudinary.com/v1_1/df7tgik1m/image/upload", formData
    ).then((response) => {
        setPublicId(response.data.secure_url);
        updateDB(response.data.secure_url);
    });

    
};



    return(
        <div data-testid='photo-${user}'>
              <Image
             style = {{width: 100, height:100}}
            cloudName= "df7tgik1m"
            publicId={publicId}/>
            <input type="file"
            onChange={(event) =>{
               setImageSelected(event.target.files[0]);
            }}
            
            />
            <button onClick={uploadImage}> Upload Image </button>
        
           
            </div>

    );
}
export default Photo;
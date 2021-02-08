import React from 'react';
import './PictureList.css';

const PictureList = ({pictures}) => {
    return (
      <div className="container">
          {pictures.map(pic => {
            return <img src={pic.urls.regular} alt="img" value={pic} />
          })}
      </div>
    )
}

export default PictureList;
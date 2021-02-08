import React, {useState} from 'react';
import './PictureSelector.css';

const PictureSelector = ({onSearch}) => {
  const [photo, setPhoto] = useState('');

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSearch(photo)
    }
    console.log(photo)
  };

  return (
    <>
      <div>
        <div>
          <h1 className="title">Search Photos</h1>
        </div>
      </div>

      <div>
        <div className="text-center">
          <input
            placeholder="Search Pictures..."
            onChange={(e) => setPhoto(e.target.value)}
            value={photo}
            onKeyDown={onKeyDown}
          />
        </div>
      </div>

      <div>
        <div>
          <button onClick={() => onSearch(photo)}>Search</button>
        </div>
      </div>
    </>
  )
}

export default PictureSelector;
import "./platform.css";
import ChosePlatform from "./chosePlatform/ChosePlatform";
import React, { useState } from 'react';

function Platform({ onSelectPlay }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const handleSelectPlay = (item) => {
    setSelectedItem(item);
    onSelectPlay(item)
};
  return (
    <div className="platform-container">
      
      <ChosePlatform onSelectPlay={handleSelectPlay}></ChosePlatform>
    </div>
  );
}

export default Platform;

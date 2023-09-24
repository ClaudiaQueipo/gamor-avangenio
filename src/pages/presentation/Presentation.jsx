import "./presentation.css";
import Start from "./start/Start";
import NewSeason from "./newSeason/NewSeason";
import Platform from "./platform/platform";
import React, { useState } from 'react';

function Presentation({ themeText }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const handleSelectPlay = (item) => {
    setSelectedItem(item);
  };
  
  return (
    <div className="container">
      <section>
        <div className="presentation">
          <Start></Start>
          <NewSeason themeText={themeText} selectedItem={selectedItem}></NewSeason>
          <Platform onSelectPlay={handleSelectPlay} ></Platform>
        </div>
      </section>
    </div>
  );
}

export default Presentation;

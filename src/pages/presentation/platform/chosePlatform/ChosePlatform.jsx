import './chosePlatform.css'
import Tabs from './Tabs/Tabs';
import PlatformTitle from './PlatformTitle/PlatformTitle';
import Search from './Search/Search';
import React, { useState } from 'react';

function ChosePlatform({ onSelectPlay }) {
    const [selectedItem, setSelectedItem] = useState(null); 
    const handleSelectPlay = (item) => {
        setSelectedItem(item);
        onSelectPlay(item)
    };
    return (
        <div className='chose-platform-container'>
            <PlatformTitle number="01." title1="Choose" title2="Platform"></PlatformTitle>
            <Tabs></Tabs>
            <PlatformTitle number="02." title1="Searching" title2="Game"></PlatformTitle>
            <Search onSelectPlay={handleSelectPlay}></Search>
            
        </div>
    );
}

export default ChosePlatform;
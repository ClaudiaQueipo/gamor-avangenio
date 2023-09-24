import "./table.css";
import React, { useState } from 'react';
import TableRow from "./TableRow";

function Table({ onSelectPlay , data}) {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelectPlay = (item) => {
    setSelectedItem(item);
    onSelectPlay(item)
  };
  return (
    <div className="search-table">
      <table>
        <tbody>
          {data.map((item) => (
            <TableRow key={item.id} item={item} onSelectPlay={handleSelectPlay}/>
          ))}
        </tbody>
      </table>
    </div>
  );
}


export default Table;
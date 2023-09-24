import { FaUser } from "react-icons/fa";
import randomColor from "randomcolor";


function IconsTable() {
  let randomColor1 = randomColor();
  let randomColor2 = randomColor();

  while (randomColor1 === randomColor2) {
    randomColor2 = randomColor();
  }


    return (
      <div className="icon-table-conatiner">
        <div className="icons-table">
          <div className="icon-user-table1" style={{ backgroundColor: randomColor1 }}>
            <FaUser color="white"></FaUser>
          </div>
          <div className="icon-user-table2" style={{ backgroundColor: randomColor2 }}>
            <FaUser color="white"></FaUser>
          </div>
        </div>
      </div>
    );
  }

  export default IconsTable
import {FaArrowRight } from "react-icons/fa";


const CategoriesList = (props) => {
  const { id, name, number,image } = props.item;
  const containerStyle = {
    //backgroundImage: `url(${imagen1})`,
    backgroundImage: `url(${image})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    zIndex: '1'
    // Otros estilos opcionales
  };

  return (
    <div className="categories-list-container">
      <span className="slash">/</span>
      <span className="id-categorie-list">{number}</span>
      <h3 className="name-categorie-list">{name}</h3>
      <a href="" className="arrow"><FaArrowRight></FaArrowRight></a>
      
      <div className="background-violet"></div>
      <div className="background-violet-hover" style={containerStyle}></div>
    </div>
  );
}

export default CategoriesList;

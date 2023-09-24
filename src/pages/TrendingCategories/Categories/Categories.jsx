import "./categories.css";

import CategoriesList from "./CategoriesList";
import imagenFondo from "../../../assets/categories/categories.png"
import imagenFondo2 from "../../../assets/categories/categories1.png"
import imagenFondo3 from "../../../assets/categories/categories2.png"
import imagenFondo4 from "../../../assets/categories/categories3.png"
import imagenFondo5 from "../../../assets/categories/categories4.png"
import imagenFondo6 from "../../../assets/categories/categories5.png"
import imagenFondo7 from "../../../assets/categories/categories6.png"

const data = [
  {
    id: 1,
    number: "01",
    name: "Actions Games",
    image: imagenFondo3
  },
  {
    id: 2,
    number: "02",
    name: "Sport Games",
    image: imagenFondo5
  },
  {
    id: 3,
    number: "03",
    name: "Adventure Games",
    image: imagenFondo
  },
  {
    id: 4,
    number: "04",
    name: "Arcade Games",
    image: imagenFondo7
  },
  {
    id: 5,
    number: "05",
    name: "Fantasy Games",
    image: imagenFondo2
  },
  {
    id: 6,
    number: "06",
    name: "Strategy Games",
    image: imagenFondo6
  },
  {
    id: 7,
    number: "07",
    name: "Shooter Games",
    image: imagenFondo4
  },
];
const viewAll = {
  id : 8,
  number: "View More",
  name: "All Categories"
}

function Categories() {
  return(
    <div className="categories-container">
        {data.map((item) => (
            <CategoriesList key={item.id} item={item} />
          ))}
        <CategoriesList key={8} item={viewAll}></CategoriesList>
        
    </div>
  );
}

export default Categories;



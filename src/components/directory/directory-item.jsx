import "./directory-item.sytles.scss";
import CategoryItem from "../category-item/category-item-component";

const DirectoryItem = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default DirectoryItem;

import React from 'react';
import PropTypes from 'prop-types';

const Categories = ({ activeCategory, items, onClickCategory }) => {
  // const [activeItem,setActiveItem]=useState(null)

  return (
    <div className="categories">
      <ul>
        <li
          className = {activeCategory === null ? 'active' : ''}
          onClick={() => onClickCategory(null)}
        >
                Все
        </li>
        {items &&
                items.map((element, index) =>
                  <li
                    className = {activeCategory === index ? 'active' : ''}
                    onClick = {() => onClickCategory(index)}
                    key={element}
                  >
                    {element}
                  </li>)}
      </ul>
    </div>
  );
};
Categories.propTypes = {

  // activeCategory: PropTypes.oneOf([PropTypes.number, null]),
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func,
  // name: PropTypes.string.isRequired,
  // imageUrl: PropTypes.string.isRequired,
  // types: PropTypes.arrayOf(PropTypes.number).isRequired,
  // sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
  // price: PropTypes.number.isRequired,
  // category: PropTypes.number.isRequired,
  // rating: PropTypes.number.isRequired,
};
Categories.defaultProps  = {
  activeCategory: null,
  items: [],
};
export default React.memo(Categories);

import React from "react"
import { useState } from "react"


const Categories = ({items, onClickItem}) => {
    const [activeItem,setActiveItem]=useState(null)
    const onSelectItem = (index) => {
        setActiveItem(index)
        onClickItem(index)
    }
    return (
        <div className="categories">
        <ul> 
            <li 
            className = {activeItem === null ? 'active' : ''}
            onClick={() => onSelectItem(null)}
            >
                Все
            </li>
            {items && 
                items.map((element, index) => 
            <li 
            className = {activeItem === index ? 'active' : ''}
            onClick = {() => onSelectItem(index)} key={element}
            >
                {element}
            </li>)}
        </ul>
        

      </div>
    )
}
export default React.memo(Categories)

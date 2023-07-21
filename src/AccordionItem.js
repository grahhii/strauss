// AccordionItem.js
import React from "react";

const AccordionItem = ({ item, setItems }) => {
  const handleIncrement = () => {
    setItems((prevItems) =>
      prevItems.map((prevItem) =>
        prevItem.id === item.id
          ? { ...prevItem, count: prevItem.count + 0.5 }
          : prevItem
      )
    );
  };

  const handleDecrement = () => {
    setItems((prevItems) =>
      prevItems.map((prevItem) =>
        prevItem.id === item.id
          ? { ...prevItem, count: prevItem.count - 0.5 }
          : prevItem
      )
    );
  };

  return (
    <div className="accordion-item">
      <p>{item.title}</p>
      <div className="counter">
        <p>כמות: {item.count}</p>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </div>
    </div>
  );
};

export default AccordionItem;

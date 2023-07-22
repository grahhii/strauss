import React from "react";
import "./AccordionItem.css";

const AccordionItem = ({ item, setItems, className }) => {
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
    <div className={className}>
      <img src={item.image} alt={item.title} width="35" height="35" />
      <div>{item.title}</div>

      <div className="counter">
        <p className="number">{item.count}</p>
        <button className="button1" onClick={handleDecrement}>
          -
        </button>

        <button className="button2" onClick={handleIncrement}>
          +
        </button>
      </div>
    </div>
  );
};

export default AccordionItem;

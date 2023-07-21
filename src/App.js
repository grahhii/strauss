import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import firebase from "firebase/compat/app"; // Import Firebase from 'firebase/compat/app'
import "firebase/compat/database";

// Конфигурация вашего проекта Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCgW7aq9KKx59APJOAbRj_3sBrl-eAaJps",
  authDomain: "azmanot-c5dc8.firebaseapp.com",
  databaseURL:
    " https://azmanot-c5dc8-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "azmanot-c5dc8",
  storageBucket: "azmanot-c5dc8.appspot.com",
  messagingSenderId: "231622403612",
  appId: "1:231622403612:web:4d775ae7d648ee95a161d9",
};

// Инициализация Firebase
firebase.initializeApp(firebaseConfig);

const App = () => {
  const [customerName, setCustomerName] = useState("");
  const [itemsVisible, setItemsVisible] = useState(false);
  const [items, setItems] = useState([
    { id: 1, title: "קוטג 5%", count: 0 },
    { id: 2, title: "סקי 5%", count: 0 },
    { id: 3, title: "סימפוניה בצל", count: 0 },
    { id: 4, title: "פרימור תפוזים 2ל", count: 0 },
    { id: 5, title: "חומוס 750גרם", count: 0 },
  ]);

  const handleNameChange = (event) => {
    setCustomerName(event.target.value);
  };

  const handleCompleteOrder = () => {
    const orderData = {
      customerName,
      items: items.filter((item) => item.count > 0),
    };

    // Отправка данных на сервер Firebase
    firebase
      .database()
      .ref("orders")
      .push(orderData)
      .then(() => {
        console.log("Заказ успешно отправлен на сервер Firebase.");
      })
      .catch((error) => {
        console.error("Ошибка при отправке заказа:", error);
      });
  };

  return (
    <div>
      <input
        type="text"
        value={customerName}
        onChange={handleNameChange}
        placeholder="שם החנות"
      />
      <button onClick={handleCompleteOrder}>סיום</button>

      <button
        className="accordion-title"
        onClick={() => setItemsVisible(!itemsVisible)}
      >
        מוצרים
      </button>

      {itemsVisible && (
        <div className="accordion">
          {items.map((item) => (
            <AccordionItem key={item.id} item={item} setItems={setItems} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;

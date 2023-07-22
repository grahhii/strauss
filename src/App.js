import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "./App.css";
import Modal from "react-modal";
import itemsData from "./itemsData"; // Импортируем список товаров
import logo from "./logo.png";

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
  // Состояние для отображения/скрытия модального окна
  const [showModal, setShowModal] = useState(false);
  // Состояния для ввода данных
  const [customerName, setCustomerName] = useState("");
  const [items, setItems] = useState(itemsData); // Используем список товаров из itemsData

  // Состояние для отслеживания текущего открытого аккордеона
  const [activeAccordion, setActiveAccordion] = useState(null);

  // Функция для управления состоянием аккордеонов
  const handleAccordionToggle = (accordionId) => {
    if (activeAccordion === accordionId) {
      // Если текущий аккордеон уже открыт, закрываем его
      setActiveAccordion(null);
    } else {
      // Иначе закрываем текущий аккордеон и открываем новый
      setActiveAccordion(accordionId);
    }
  };
  const [nameInputFilled, setNameInputFilled] = useState(true);

  // Функции для обработки изменений ввода данных
  const handleNameChange = (event) => {
    setCustomerName(event.target.value);
  };
  // ... и т.д. для обработки других изменений ввода данных

  // Функция для обработки завершения заказа
  const handleCompleteOrder = () => {
    if (!customerName) {
      // Если имя не введено, устанавливаем состояние nameInputFilled в false
      setNameInputFilled(false);
      setShowModal(true); // Показываем модальное окно с напоминанием о необходимости ввести имя
      return;
    }

    // Если имя введено, отправляем заказ на сервер и показываем модальное окно
    const orderData = {
      customerName,
      items: items.filter((item) => item.count > 0),
    };

    firebase
      .database()
      .ref("orders")
      .push(orderData)
      .then(() => {
        console.log("Заказ успешно отправлен на сервер Firebase.");
        setShowModal(true);
        // После успешной отправки заказа, очищаем состояние
        setCustomerName("");
        setItems(items.map((item) => ({ ...item, count: 0 })));
        // ... и т.д. для очистки состояния других аккордеонов
      })
      .catch((error) => {
        console.error("Ошибка при отправке заказа:", error);
      });
  };

  // Функция для обработки закрытия модального окна и сброса состояния nameInputFilled
  const handleCloseModal = () => {
    setNameInputFilled(true);
    setShowModal(false);
  };

  return (
    <div className="container">
      <img src={logo} alt="logo" className="logo" />
      <input
        type="text"
        value={customerName}
        onChange={handleNameChange}
        placeholder="שם החנות"
      />
      <button
        className="accordion-title"
        onClick={() => handleAccordionToggle(1)}
      >
        גבינות
      </button>

      {activeAccordion === 1 && (
        <div className="accordion">
          {/* Внутренние товары для аккордеона 1 */}
          <AccordionItem
            key={items[0].id}
            item={items[0]}
            setItems={setItems}
            className="accordion-item"
          />
          <AccordionItem
            key={items[1].id}
            item={items[1]}
            setItems={setItems}
            className="accordion-item"
          />
          <AccordionItem
            key={items[2].id}
            item={items[2]}
            setItems={setItems}
            className="accordion-item"
          />
          <AccordionItem
            key={items[3].id}
            item={items[3]}
            setItems={setItems}
            className="accordion-item"
          />
          <AccordionItem
            key={items[4].id}
            item={items[4]}
            setItems={setItems}
            className="accordion-item"
          />
          <AccordionItem
            key={items[5].id}
            item={items[5]}
            setItems={setItems}
            className="accordion-item"
          />
          <AccordionItem
            key={items[6].id}
            item={items[6]}
            setItems={setItems}
            className="accordion-item"
          />
          <AccordionItem
            key={items[7].id}
            item={items[7]}
            setItems={setItems}
            className="accordion-item"
          />
          <AccordionItem
            key={items[8].id}
            item={items[8]}
            setItems={setItems}
            className="accordion-item"
          />
          <AccordionItem
            key={items[9].id}
            item={items[9]}
            setItems={setItems}
            className="accordion-item"
          />
        </div>
      )}

      {/* Повторите те же шаги для создания остальных аккордеонов */}
      <button
        className="accordion-title"
        onClick={() => handleAccordionToggle(2)}
      >
        מעדנים
      </button>

      {activeAccordion === 2 && (
        <div className="accordion">
          {/* Внутренние товары для аккордеона 2 */}
          <AccordionItem
            key={items[10].id}
            item={items[10]}
            setItems={setItems}
            className="accordion-item"
          />
          <AccordionItem
            key={items[11].id}
            item={items[11]}
            setItems={setItems}
            className="accordion-item"
          />
          <AccordionItem
            key={items[12].id}
            item={items[12]}
            setItems={setItems}
            className="accordion-item"
          />
          <AccordionItem
            key={items[13].id}
            item={items[13]}
            setItems={setItems}
            className="accordion-item"
          />
          <AccordionItem
            key={items[14].id}
            item={items[14]}
            setItems={setItems}
            className="accordion-item"
          />
          <AccordionItem
            key={items[15].id}
            item={items[15]}
            setItems={setItems}
            className="accordion-item"
          />
          <AccordionItem
            key={items[16].id}
            item={items[16]}
            setItems={setItems}
            className="accordion-item"
          />
          <AccordionItem
            key={items[17].id}
            item={items[17]}
            setItems={setItems}
            className="accordion-item"
          />
          <AccordionItem
            key={items[18].id}
            item={items[18]}
            setItems={setItems}
            className="accordion-item"
          />
          <AccordionItem
            key={items[19].id}
            item={items[19]}
            setItems={setItems}
            className="accordion-item"
          />
          <AccordionItem
            key={items[20].id}
            item={items[20]}
            setItems={setItems}
            className="accordion-item"
          />
          <AccordionItem
            key={items[21].id}
            item={items[21]}
            setItems={setItems}
            className="accordion-item"
          />
        </div>
      )}

      {/* ... повторите те же шаги для остальных аккордеонов */}

      <button onClick={handleCompleteOrder} className="complete-button">
        סיום
      </button>
      <Modal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        contentLabel="Modal"
        className="modal"
        overlayClassName="modal-overlay"
      >
        {nameInputFilled ? (
          // Если имя введено, показываем сообщение об успешной отправке заказа

          <>
            <h2>הזמנה נשלחה בהצלחה!</h2>
            <button onClick={handleCloseModal} className="modal-close-button">
              סגור
            </button>
          </>
        ) : (
          // Если имя не введено, показываем сообщение о забытом имени
          <>
            <h2>שכחת להזין את שמך</h2>
            <button onClick={handleCloseModal} className="modal-close-button">
              סגור
            </button>
          </>
        )}
      </Modal>
    </div>
  );
};

export default App;

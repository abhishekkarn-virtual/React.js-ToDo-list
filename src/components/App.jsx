import React, { useState } from "react";
import Header from "./Header.jsx";
import Input from "./Input";
import Item from "./Item";

function App() {
  const defaultItems = [ { item: "Click ✔ to mark done" },{item:"Click 🗑 to delete"}];
  const [items, setItems] = useState([...defaultItems]);

  function addItem(newItem) {
    setItems(prevItems => {
      return [...prevItems, newItem];
    });
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((listItem, index) => {
        return index !== id;
      });
    });
  }

  function completeHandler(id){
    setItems(items.map((item,index)=>{
      if(index===id){
        return{
          ...item,
          completed: !item.completed,
        };
      }
      return item;
    }));
  };

  return (
    <div >
      <Header />
      <div class="box">
        <Input onAdd={addItem} />
        {items.map((listItem, index) => {
          return <Item key={index} id={index} item={listItem.item} completed={listItem.completed} onDelete={deleteItem} onComplete={completeHandler} />
        })}
      </div>

    </div>
  )
};


export default App;
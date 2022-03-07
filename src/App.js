import "./App.css";
import { useState } from "react";
import ItemsOnList from "./components/dataBase.js";
import List from "./components/ItemList.js";
import Title from "./components/Title";
import AddItem from "./components/AddItem";
import { nanoid } from "nanoid";
import BackgroundOverlay from "./components/Background";

function App() {
  const [shoppinList, setShoppingList] = useState(ItemsOnList);

  function addItem(name) {
    const newItem = {
      _id: nanoid(),
      name: { en: name, de: "" },
    };
    setShoppingList([...shoppinList, newItem]);
  }

  return (
    <div className='App'>
      <h1 className='Title'>shopping List</h1>
      <ul className='shopping-list'>
        {shoppinList.map((item) => (
          <List key={item._id} name={item.name.en} />
        ))}
      </ul>
      <AddItem onAddItem={addItem} />
    </div>
  );
}

export default App;

// function handOnDelete(articleId) {
//   setArticles(articles.filter((article) => article._id !== articleId));
// }

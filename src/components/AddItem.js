import { useState } from "react";

export default function AddItem({ onAddItem }) {
  const [item, setItem] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onAddItem(item);
    setItem("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='new-item' className='Add-Text'>
        What else do you need? Add it here...
      </label>
      <input
        type='text'
        id='new-item'
        onChange={(event) => setItem(event.target.value)}
        value={item}
        className='input-area'
      />
      <button>Add</button>
    </form>
  );
}

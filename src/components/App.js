import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);


 useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then(resp => resp.json())
      .then(data => setToys(data));
 }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  };

  function handleDelete(event) {
    fetch(`http://localhost:3001/toys/${event.target.id}`, {method: 'DELETE'})
      .then(resp => resp.json())
      .then(setToys(toys.filter(toy => toy.id !== event.target.id)))
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} handleDelete={handleDelete}/>
    </>
  );
}

export default App;

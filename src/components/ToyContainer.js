import React, { useState } from "react";
import ToyCard from "./ToyCard";

function ToyContainer( { toys, handleDelete } ) {

  const eachToy = toys.map((toy) => <ToyCard key={toy.id} toy={toy} handleDelete={handleDelete}/> )
  return (
    <div id="toy-collection">{eachToy}</div>
  );
}

export default ToyContainer;

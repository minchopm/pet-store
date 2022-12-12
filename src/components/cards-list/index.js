import React from 'react';
import { usePets } from '../context';

function Cards() {

  const { pets } = usePets()

  return (
    <div>
      {pets.length ? pets.map((pet, i) => <p key={i}>{pet.name}</p>) : null}
    </div>
  );
}

export default Cards;

import React, { useEffect, useState } from 'react';
import AppTemplate from "./app-template";


const App = () => {

  const [pets, setPets] = useState({})
  const [users, setUsers] = useState({})

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API_PET_ENDPOINT}/findByStatus?status=available`)
      .then(r => r.json())
      .then(r => setPets(r))
  }, []);
  return (
    <AppTemplate pets={pets} users={users} />
  );
}


export default App;

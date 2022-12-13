import React, { useEffect, useState } from 'react';
import { preloadImage } from '../utils/preloader';
import AppTemplate from "./app-template";

const App = () => {

  const [pets, setPets] = useState(null)
  const [users, setUsers] = useState({})

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_PET_ENDPOINT}/findByStatus?status=available`)

      const result = await response.json()

      for (let i = 0; i < result.length; i++) {
        const src = `https://source.unsplash.com/random/?Animal/?img=${i}`

        if (i === 0) {
          await preloadImage(src)
        }

        result[i].photoUrls = [src]
      };
      setPets(result)
    })()
  }, []);

  if (!pets) {
    return null;
  }
  return (
    <AppTemplate pets={pets} users={users} />
  );
}


export default App;

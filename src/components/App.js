import React, { useEffect, useState } from 'react';
import AppTemplate from "./app-template";
import { createWorkerFactory, useWorker } from '@shopify/react-web-worker';

const createWorker = createWorkerFactory(() => import('../utils/preloader'));

const App = () => {
  const worker = useWorker(createWorker);

  const [pets, setPets] = useState({})
  const [users, setUsers] = useState({})

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_PET_ENDPOINT}/findByStatus?status=available`)

      const result = await response.json()

      for (let i = 0; i < result.length; i++) {
        let webWorkerMessage;
        if (i < 2) {
          webWorkerMessage = await worker.preloadImage(i)
        } else {
          webWorkerMessage = worker.preloadImage(i)
        }
        result[i].photoUrls = [webWorkerMessage]
      };
      setPets(result)
    })()
  }, [worker]);
  return (
    <AppTemplate pets={pets} users={users} />
  );
}


export default App;

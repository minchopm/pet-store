import React, { useEffect, useState } from 'react';
import { preloadImage } from '../../utils/preloader';
import { usePets } from '../context';

const Card = () => {
  const { pets } = usePets();
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {

    if (pets.length) {
      const contentUpdateInterval = setInterval(async () => {
        const nextIndex = currentIndex + 1
        if (nextIndex < pets.length) {
          setTimeout(async () => {
            await pets[nextIndex].photoUrls[0];
          }, 5000);
        }

        if (pets.length <= nextIndex) {
          setCurrentIndex(0);
          return;
        }
        await preloadImage(nextIndex)
        setCurrentIndex(nextIndex);
      }, 6000);
    }
  })

  return (
    <div>
      {pets.length ? <><img src={pets[currentIndex].photoUrls[0]} alt="pet" />
        {pets[0].name}</> : null}
    </div>
  );

}

export default Card;
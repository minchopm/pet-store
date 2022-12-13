import React, { useEffect, useState } from 'react';
import { usePets } from '../context';

import { blue } from '@mui/material/colors';
import MaterialCard from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';


const Card = ({ style }) => {
  const matches = useMediaQuery('(min-width:860px)');
  const { pets } = usePets();
  const [currentIndex, setCurrentIndex] = useState(0);



  useEffect(() => {
    if (pets.length <= currentIndex + 1) {
      return;
    }

    const nextIndex = currentIndex + 1

    setTimeout(async () => {
      setCurrentIndex(nextIndex);
    }, 6000);
  })

  return (
    <MaterialCard sx={[{ maxWidth: 1000, maxHeight: 'auto', display: 'flex', flexDirection: matches ? 'row' : 'column' }, style]}>
      <CardMedia
        sx={{ maxHeight: 500, maxWidth: matches ? 500 : '100%' }}
        component="img"
        image={pets[currentIndex].photoUrls[0]}
        alt={pets[currentIndex].name}
      />

      <CardContent>
        <CardHeader
          avatar={
            <Avatar alt="Name Surname" src="https://source.unsplash.com/random/?Person/" />
          }
          title="Name Surname"
        />
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <ThumbUpAltIcon sx={{ color: blue[500] }} />
          </IconButton>
          <Typography variant="h6" gutterBottom>
            by 35 People
          </Typography>
        </CardActions>

      </CardContent>


    </MaterialCard >
  );

}

export default Card;
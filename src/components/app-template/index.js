import React from 'react';
import Card from "../card";
import { Provider } from '../context';
import useMediaQuery from '@mui/material/useMediaQuery';


const AppTemplate = (props) => {
  const matches = useMediaQuery('(min-width:860px)');
  return (
    <Provider context={props}>
      <Card style={{ margin: matches ? 5 : 1 }} />
    </Provider>
  );
}

export default AppTemplate;

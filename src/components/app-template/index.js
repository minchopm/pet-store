import React from 'react';
import Card from "../card";
import { Provider } from '../context';

const AppTemplate = (props) => {
  return (
    <Provider context={props}>
      <Card />
    </Provider>
  );
}

export default AppTemplate;

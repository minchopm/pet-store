import React from 'react';
import Cards from "../cards-list";
import { Provider } from '../context';

const AppTemplate = (props) => {

  return (
    <Provider context={props}>
      <Cards />
    </Provider>
  );
}

export default AppTemplate;

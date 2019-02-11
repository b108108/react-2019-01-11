import React from 'react';
import { Consumer as LocalizationConsumer } from '../../contexts/localization';

 export default (props) => {
  return (
    <LocalizationConsumer>
      {(language) => language[props.children] || ''}
    </LocalizationConsumer>
  )
} 
import React from 'react';
import Row from './Row';

const Rows = (props) => {
   return (
      <div
         className='dashboard'
      >
         {
            props.rows.map((row, index) => {
               return <Row key={index} row={row} />
            })
         }
      </div>
   );
}

export default Rows;

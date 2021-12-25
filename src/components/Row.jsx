import React from 'react';
import Cell from './Cell';

const Row = (props) => {
   return (
      <div className='row'>
         {
            props.row.cells.map((cell, index) => {
               return <Cell key={index} rowId={props.row.id} cell={cell} />
            })
         }
      </div>
   );
}

export default Row;

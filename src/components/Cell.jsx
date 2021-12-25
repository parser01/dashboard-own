import React from 'react';
import { typeTextAC } from '../redux/dashboard-reducer';
import StoreContext from '../StoreContext';


const Cell = (props) => {
   return <StoreContext.Consumer>
      {
         store => {
            return (
               <div className='cell'>
                  <textarea
                     row='1'
                     value={props.cell.text}
                     onChange={
                        e => (
                           store.dispatch(
                              typeTextAC(e.target.value, props.rowId, props.cell.id)
                           )
                        )
                     }
                  >
                  </textarea>
               </div>
            );
         }
      }
   </StoreContext.Consumer>
}

export default Cell;

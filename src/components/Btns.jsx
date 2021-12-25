import React from 'react';
import StoreContext from './../StoreContext';
import { addRowAC, removeRowAC, setColumnsAC } from './../redux/dashboard-reducer';

const Btns = (props) => {
   return <StoreContext.Consumer>
      {
         store => {
            return (
               <div className='btns'>
                  <button
                     type='button'
                     className="btn"
                     onClick={() => store.dispatch(addRowAC())}
                  >
                     Add row
                  </button>

                  <input
                     type='number'
                     min='1'
                     max='11'
                     placeholder='Add column'
                     className='setColumns'
                     onChange={(e) => store.dispatch(setColumnsAC(e.target.value))} />

                  {/* 
                  <button
                     type='button'
                     className='btn'
                   onClick={ }
                  >
                     Add column
                  </button> */}

                  <button
                     type='button'
                     className='btn'
                     onClick={() => store.dispatch(removeRowAC())}
                  >
                     Remove row
                  </button>

                  {/*                  <button
                     type='button'
                     className='btn'
                  onClick={ }
                  >
                     Remove column
                  </button> */}
               </div>
            );
         }
      }
   </StoreContext.Consumer>
}

export default Btns;

const ADD_ROW = 'ADD-ROW',
   TYPE_TEXT = 'TYPE-TEXT',
   REMOVE_ROW = 'REMOVE-ROW',
   SET_COLUMNS = 'SET-COLUMNS';

const initialState = [
   {
      id: 1,
      cells: [
         {
            id: 1,
            text: ''
         },

         /*          {
                     id: 2,
                     text: ''
                  },
         
                  {
                     id: 3,
                     text: ''
                  },
         
                  {
                     id: 4,
                     text: ''
                  },
         
                  {
                     id: 5,
                     text: ''
                  } */
      ]
   }
];

const dashboardReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_ROW: {
         let stateCopy = state.map(i => {
            return {
               ...i, id: i.id + 1, cells: i.cells.map(el => {
                  return { ...el, text: '' }
               })
            };
         });

         return [
            ...state,
            stateCopy[stateCopy.length - 1]
         ]
      }

      case REMOVE_ROW: {
         /*          let stateCopy = state.map(i => {
                     return {
                        ...i, id: i.id + 1, cells: i.cells.map(el => {
                           return { ...el }
                        })
                     };
                  }); */

         let stateCopy = [
            ...state
         ]

         if (stateCopy.length > 1) {
            stateCopy.pop();
         } else {
            return state;
         }

         return stateCopy;
      }

      case SET_COLUMNS: {
         /*                   let stateCopy = state.map(i => {
                              return {
                                 ...i, cells: i.cells.map(el => {
                                    return { id: el.id + 1, text: '' }
                                 })
                              };
                           }); */
         let stateCopy = state.map(i => {
            return {
               ...i, cells: [
                  {
                     id: 1,
                     text: ''
                  }
               ]
            }
         });

         for (let i = 2; i <= action.columnsNumber; i++) {
            stateCopy = stateCopy.map(i => {
               return {
                  ...i, cells: [
                     ...i.cells,
                     {
                        id: i.cells.length + 1,
                        text: ''
                     }
                  ]
               };
            });
         }

         return stateCopy;
      }

      case TYPE_TEXT: {
         let stateCopy = state.map(i => {
            return i.id === action.rowId ? {
               ...i, cells: i.cells.map(el => {
                  return el.id === action.cellId ? { ...el, text: action.text } : el
               })
            } : i;
         });

         return stateCopy;
      }

      default:
         return state;
   }
};

export default dashboardReducer;

export const typeTextAC = (text, rowId, cellId) => {
   return {
      type: TYPE_TEXT,
      text,
      rowId,
      cellId
   }
};

export const addRowAC = () => {
   return {
      type: ADD_ROW
   }
};

export const removeRowAC = () => {
   return {
      type: REMOVE_ROW
   }
};

export const setColumnsAC = (columnsNumber) => {
   return {
      type: SET_COLUMNS,
      columnsNumber
   }
};
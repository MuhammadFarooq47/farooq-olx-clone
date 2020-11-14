export const initialState = {
    data: [ ], //data show nhi kea means meny sell me rdata.length use kea ruko wo undefined data hy
    user: null,
}

function reducer(state = initialState, action) {
    console.log(action)
   switch(action.type){

    case 'SET_USER' :
        return{
            ...state,
            user: action.user
        }
       case  'ACTIVE_AD' : 
       //logic for adding item to basket
        return {
            ...state,
            data: [...state.data, action.item]
        }
        case 'DELETE_AD' :
            let newData = [...state.data]

            const index = state.data.findIndex((dataItem) => dataItem.id === action.id);

            if (index >= 0) {
                //Item exits in basket remove it...
                newData.splice(index, 1)
            }
            else{
                console.warn(
                    `Can't remove product (id: ${action.id})`
                );
            }
            return {
                ...state,
                data: newData,
            }
            default:
            return state
   }
}

export default reducer;

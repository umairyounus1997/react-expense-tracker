import React, {createContext,useReducer} from 'react'

//Import the Reducer
import AppReducer from './AppReducer'

//Create the initial State
const initialState = {
    transactions : []
}

//Create the Global Context
export const GlobalContext = createContext(initialState);

// Create a Provider for the Global Context
export const GlobalProvider = ({ children }) => {

    const [state,dispatch] = useReducer(AppReducer, initialState)

    // Actions for Transactions

        // Delete Existing Transaction Action
        function delTransaction(id) {
            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: id
            });
        }

        // Add New Transaction Action
        function addTransaction(transactions) {
            dispatch({
                type: 'ADD_TRANSACTION',
                payload: transactions
            })
        }
    return(
        <GlobalProvider.Provider value={
            {
                transactions : state.transactions,
                delTransaction,
                addTransaction
            }
        }>
{children}
        </GlobalProvider.Provider>
    )
}
export default GlobalProvider;
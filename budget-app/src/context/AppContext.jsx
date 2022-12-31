import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
	budget: 4000,
	expenses: [
		{ id: uuidv4(), name: 'Shopping', cost: 50 },
		{ id: uuidv4(), name: 'Holiday', cost: 300 },
		{ id: uuidv4(), name: 'Transportation', cost: 70 },
		{ id: uuidv4(), name: 'Fuel', cost: 40 },
		{ id: uuidv4(), name: 'Child Care', cost: 500 },
        { id: uuidv4(), name: 'Spotify', cost: 100 }
	],
};

export const AppContext = createContext({
    ...initialState,
    addExpense: () => {},
    updateBudget: () => {},
    removeExpense: () => {},
    searchExpense: () => {}
});

export const AppProvider = (props) => {
    const [budget, setBudget] = useState(4000);
    const [expenses, setExpenses] = useState([
        { id: uuidv4(), name: 'Shopping', cost: 50 },
		{ id: uuidv4(), name: 'Holiday', cost: 300 },
		{ id: uuidv4(), name: 'Transportation', cost: 70 },
		{ id: uuidv4(), name: 'Fuel', cost: 40 },
		{ id: uuidv4(), name: 'Child Care', cost: 500 },
        { id: uuidv4(), name: 'Spotify', cost: 100 }
    ])

    const addExpense = (newExpense) => {
        setExpenses(expenses.concat(newExpense));
    }

    const updateBudget = (newBudget) => {
        setBudget(newBudget);
    }

    const removeExpense = (expenseId) => {
        const expensesFiltered = expenses.filter((oneExpense) => oneExpense.id !== expenseId);
        setExpenses(expensesFiltered);
    }


    return (
        <AppContext.Provider value={{budget, expenses, addExpense, updateBudget, removeExpense}}>
            { props.children }
        </AppContext.Provider>
    )
}
import 'bootstrap/dist/css/bootstrap.min.css';

import { Budget } from "../../components/organisms/Budget/Budget";
import { Expenses } from "../../components/organisms/Expenses/Expenses";
import { AddExpenses } from "../../components/organisms/AddExpense/AddExpense";
import { AppProvider } from '../../context/AppContext';

export const Home = () => {
    return (
        <div className='container'>
            <AppProvider>
                <Budget />
                <Expenses />
                <AddExpenses />
            </AppProvider>
        </div>
    )
}
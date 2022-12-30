import 'bootstrap/dist/css/bootstrap.min.css';

import { Budget } from "../../components/organisms/Budget/Budget";
import { Expenses } from "../../components/organisms/Expenses/Expenses";
import { AddExpenses } from "../../components/organisms/AddExpense/AddExpense";

export const Home = () => {
    return (
        <div className='container'>
            <Budget />
            <Expenses />
            <AddExpenses />
        </div>
    )
}
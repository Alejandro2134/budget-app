import { useContext, useEffect, useState } from 'react';

import { Title } from "../../atoms/Title/Title";
import { Input } from "../../atoms/Input/Input";
import { OneExpense } from "../../molecules/OneExpense/OneExpense";
import { AppContext } from '../../../context/AppContext';

export const Expenses = () => {
    const { expenses } = useContext(AppContext);
    const [filteredExpenses, setFilteredExpenses] = useState(expenses);

    useEffect(() => {
        setFilteredExpenses(expenses);
    }, [expenses]);

    const handleChange = (event) => {
        const filtered = expenses.filter(oneExpense => {
            const expenseName = oneExpense.name.toLowerCase();
            return expenseName.includes(event.target.value.toLowerCase());
        })

        setFilteredExpenses(filtered);
    }

    return  (
        <>
            <Title heading="h3" text="Expenses" />

            <div className="row">
                <div className="col-sm">
                    <Input type="text" placeholder="Type to search..." cssClass="form-control mb-2 mr-sm-2" onChange={handleChange} />
                    <ul className="list-group mt-3 mb-3">
                        {
                            filteredExpenses.map(oneExpense =>
                                <OneExpense key={oneExpense.id} expenseType={oneExpense.name} expenseAmount={oneExpense.cost} expenseId={oneExpense.id}/>
                            )
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}